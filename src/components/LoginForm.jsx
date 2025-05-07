import { useState } from 'react';
import { TextField, Typography, Box, Card, CardContent, CardHeader } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
export default function LoginForm({ onToggleForm }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log({ email, password });

    setLoading(false);
    navigate('/dashboard');
  };

  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', mt: 8, boxShadow: 4 }}>
      <CardHeader title="Iniciar sesión" titleTypographyProps={{ variant: 'h5', align: 'center' }} />
      <CardContent>
        <Box component="form" onSubmit={handleLogin} noValidate>
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

          <LoadingButton type="submit" variant="contained" fullWidth loading={loading} sx={{ mt: 2 }}>
            Entrar
          </LoadingButton>

          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            ¿Eres nuevo?
            <span
              style={{
                cursor: 'pointer',
                color: '#1976d2',
                fontWeight: 'bold',
                marginLeft: '4px',
              }}
              onClick={onToggleForm}
            >
              Crear cuenta
            </span>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
