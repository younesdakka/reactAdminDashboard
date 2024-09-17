import { Box, Button } from '@mui/material';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import { DownloadOutlined } from '@mui/icons-material';
const Dashboord = () => {
  return (
    <div>
      <Box sx={{ textAlign: 'right', mb: 1.3 }}>
        <Button variant='contained' color='primary' sx={{ padding: '6px 8px', textTransform: 'capitalize' }}>
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  )
}
export default Dashboord;