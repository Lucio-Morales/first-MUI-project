import { useState } from 'react';
import { TextField, Button, Typography, Box, Card, CardContent, CardHeader } from '@mui/material';

export default function RegisterForm({ onToggleForm }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', mt: 8, boxShadow: 4 }}>
      <CardHeader title="Registrarse" titleTypographyProps={{ variant: 'h5', align: 'center' }} />
      <CardContent>
        <Box component="form" onSubmit={handleRegister} noValidate>
          <TextField
            label="Nombre completo"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Correo electrónico"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Crear cuenta
          </Button>

          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            ¿Ya tienes una cuenta?
            <span
              style={{
                cursor: 'pointer',
                color: '#1976d2', // Color azul (puedes ajustarlo)
                fontWeight: 'bold', // Hace el texto más grueso
                marginLeft: '4px', // Separa el texto
              }}
              onClick={onToggleForm}
            >
              Iniciar sesión
            </span>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
