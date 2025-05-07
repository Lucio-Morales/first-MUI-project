import { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  const [isLogin, setIsLogin] = useState(true); // Estado para determinar qué formulario mostrar

  // Función para alternar entre login y registro
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {isLogin ? <LoginForm onToggleForm={toggleForm} /> : <RegisterForm onToggleForm={toggleForm} />}
    </div>
  );
}

export default App;
