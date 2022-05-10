// ParseLocation parses a query string location:lat,lon format and returns lat, lon, error
export default function ParseLocation(s) {
  if (s && s.includes("location")) {
    let tokens = s.split(":");
    if (tokens.length === 2) {
      let tokens2 = tokens[1].split(",");
      if  (tokens2.length === 2) {
        return [parseFloat(tokens2[0].trim()), parseFloat(tokens2[1].trim()), null];
      }
    }
  }
  return [0, 0, true];
}