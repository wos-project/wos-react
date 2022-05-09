import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { forwardRef, useImperativeHandle }  from 'react';

// eslint-disable-next-line
export default DialogComingSoon = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    open() {
      handleOpenComingSoon();
    }
  }));

  const [openComingSoon, setOpenComingSoon] = React.useState(false);

  const handleOpenComingSoon = () => {
    setOpenComingSoon(true);
  };

  const handleCloseComingSoon = () => {
    setOpenComingSoon(false);
  };

  return (
    <Dialog
      open={openComingSoon}
      onClose={handleCloseComingSoon}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Coming Soon!"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This feature is in development and coming soon.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseComingSoon}>Okay</Button>
      </DialogActions>
    </Dialog>
  );
});

function DialogComingSoon(props) {
}