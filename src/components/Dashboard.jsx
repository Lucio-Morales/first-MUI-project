import Sidebar from './Sidebar';
import { Box, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4">¡Bienvenido al Dashboard!</Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
