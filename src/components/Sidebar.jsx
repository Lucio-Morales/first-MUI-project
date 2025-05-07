import { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, IconButton, Typography, Box, Divider } from '@mui/material';
import { Home, Settings, Logout, Menu } from '@mui/icons-material';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => setOpen(!open);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 240 : 60,
        '& .MuiDrawer-paper': {
          width: open ? 240 : 60,
          backgroundColor: '#333',
          color: 'white',
          transition: 'width 0.3s',
          overflowX: 'hidden',
          boxShadow: '2px 0 8px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={toggleDrawer} sx={{ color: 'white', margin: 2 }}>
          <Menu />
        </IconButton>
      </Box>

      <List>
        <ListItem
          button
          sx={{
            padding: 2,
            marginTop: 1,
            '&:hover': { backgroundColor: '#444', cursor: 'pointer' },
          }}
        >
          <ListItemIcon sx={{ color: 'white' }}>
            <Home />
          </ListItemIcon>
          {open && (
            <Typography variant="body1" sx={{ ml: 2, color: 'white' }}>
              Inicio
            </Typography>
          )}
        </ListItem>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />

        <ListItem
          button
          sx={{
            padding: 2,
            '&:hover': { backgroundColor: '#444', cursor: 'pointer' },
          }}
        >
          <ListItemIcon sx={{ color: 'white' }}>
            <Settings />
          </ListItemIcon>
          {open && (
            <Typography variant="body1" sx={{ ml: 2, color: 'white' }}>
              Configuración
            </Typography>
          )}
        </ListItem>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />

        <ListItem
          button
          sx={{
            padding: 2,
            '&:hover': { backgroundColor: '#444', cursor: 'pointer' },
          }}
        >
          <ListItemIcon sx={{ color: 'white' }}>
            <Logout />
          </ListItemIcon>
          {open && (
            <Typography variant="body1" sx={{ ml: 2, color: 'white' }}>
              Cerrar sesión
            </Typography>
          )}
        </ListItem>
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
      </List>
    </Drawer>
  );
};

export default Sidebar;
