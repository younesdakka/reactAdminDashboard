
import { DataGrid } from '@mui/x-data-grid';
import { rows } from './data';
import { useTheme } from '@mui/material';
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";



const Team = () => {

  const theme = useTheme()
  const columns = [
    {
      field: "id",
      headerName: "Id",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    { field: "name", headerName: "Name", align: "center", headerAlign: "center" },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              backgroundColor: access === 'Admin' ? theme.palette.primary.dark : access === 'Manager' ? theme.palette.secondary.dark :'green',
              p: '5px', mt: '7px', display: 'flex', justifyContent: 'space-evenly'
            }}
          >
            {access === 'Admin' && (
            <AdminPanelSettingsOutlined fontSize='small' sx={{color:'#fff'}}/>
            )}
            {access === 'Manager' && (
            <SecurityOutlined fontSize='small' sx={{color:'#fff'}} />
            )}
            {access === 'User' && (
            <LockOpenOutlined fontSize='small' sx={{color:'#fff'}}/>
            )}
            <Typography sx={{ fontSize: '13px' , color:'#fff'}}> {access} </Typography>
          </Box>
        )
      }
    },
  ];




  return (
      <Box sx ={{ height: 600, width: '98%',mx:'auto' }}>
        <DataGrid rows={rows}
          // @ts-ignore
          columns={columns} />
      </Box>
   
  )
}
export default Team;