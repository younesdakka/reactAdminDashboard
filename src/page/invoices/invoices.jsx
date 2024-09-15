import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box, Typography } from "@mui/material";
import { columns, rows } from './data';


const Invoices = () => {
  return (
    <Box sx={{ height: 600, width: '98%', mx: 'auto' }}>
      <DataGrid
        checkboxSelection
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        columns={columns} />
    </Box>
  )
}
export default Invoices;