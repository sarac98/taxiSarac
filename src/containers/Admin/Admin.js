import React from 'react';
import Table from '../../components/MaterialTable/Table';
export default function Admin() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment style={{ width: '90%' }}>
      <Table />
    </React.Fragment>
  );
}