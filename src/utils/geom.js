// ParseLocation parses a query string location:lat,lon format and returns lat, lon, error
export function ParseLocation(s) {

  let lat, lon, error;

  error = 1;
  if (s && s.includes("location")) {
    let tokens = s.split(":");
    if (tokens.length === 2) {
      let tokens2 = tokens[1].split(",");
      if  (tokens2.length === 2) {
        lat = parseFloat(tokens2[0].trim());
        lon = parseFloat(tokens2[1].trim());
        error = null;
      }
    }
  }
  return {lat, lon, error};
}

// GetBoundingBoxAndCenter returns the bounding box, center, and zoom factor for an array of lat/lon points
export function GetBoundingBoxAndCenter(geomArray) {

  let northwest = {}, southeast = {}, delta = 0, center = {}, zoom = 0, error = null;

  if (!geomArray || geomArray.length === 0) {
    error = 1;
    return {northwest, southeast, center, delta, zoom, error}
  }

  for (let i=0; i<geomArray.length; i++) {
    const geom = geomArray[i];
    if (northwest?.lat === undefined || geom.lat > northwest.lat) {
      northwest.lat = geom.lat;
    }
    if (southeast?.lat === undefined || geom.lat < southeast.lat) {
      southeast.lat = geom.lat;
    }
    if (northwest?.lon === undefined || geom.lon < northwest.lon) {
      northwest.lon = geom.lon;
    }
    if (southeast?.lon === undefined || geom.lon > southeast.lon) {
      southeast.lon = geom.lon;
    }
  }
  if (geomArray.length === 1) {
    center = {
      lat: geomArray[0].lat,
      lon: geomArray[0].lon
    }
  } else {
    center = {
      lat: (northwest.lat + southeast.lat) / 2.0,
      lon: (northwest.lon + southeast.lon) / 2.0
    }
  }

  // Google maps delta
  delta = {
    lat: Math.abs(northwest.lat - southeast.lat) * 1.5,
    lon: Math.abs(southeast.lon - northwest.lon) * 1.5,
  }
  if (delta.lat < 0.125 || delta.lon < 0.125) {
    delta = {lat: 0.125, lon: 0.125}
  }

  // Leaflet zoom
  let z1 = Math.abs(northwest.lat - southeast.lat);
  let z2 = Math.abs(northwest.lon - southeast.lon);
  if (z2 || z1) {
    zoom = Math.log2(360/(z2 > z1 ? z2 : z1)) - 0.5
  } else {
    zoom = 1
  }

  zoom = Math.max(4, zoom);
  zoom = Math.min(12, zoom);

  return {northwest, southeast, center, delta, zoom, error};
}