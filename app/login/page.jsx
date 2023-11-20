import  React from 'react';
import '../page_login.css';



function LoginPage() {
    return (
        <div className="app-container with-background">
        <div className="login-container">
          <h1 className="login-title">INGRESA AQUÍ</h1>
          <form className="login-form">
            <h2 className="form-title">Ingresa todos tus datos</h2>
            <div className="form-group">
              <label className="form-label">Correo electrónico</label>
              <input type="text" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Contraseña</label>
              <input type="password" className="form-input" />
            </div>
            <button className="login-button">Iniciar sesión</button>
            <p className="or-text">o</p>
            <button className="google-button">
              <img src="google-icon.png" alt="Google Icon" className="google-icon" />
              Iniciar sesión con Google
            </button>
            <p className="account">¿No tienes una cuenta?</p>
          </form>
        </div>
      </div>
    );
  }
  
  export default LoginPage;