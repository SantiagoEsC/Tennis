import  React from 'react';
import Link from 'next/link';
import './signin.css';
import Input from '../components/signup/inputForm/Input'

const links = [{
  label: '¿No tienes una cuenta?',
  route: '/signup'
}]

function SignInPage() {
    return (
        <div className="app-container with-background">
        <div className="login-container">
          <h1 className="login-title">INGRESA AQUÍ</h1>
          <form className="login-form">
            <h2 className="form-title">Ingresa todos tus datos</h2>
            <div className="form-group">
              <label className="form-label">Correo electrónico</label>
              <Input type="email" placeholder="Correo electrónico" />
            </div>
            <div className="form-group">
              <label className="form-label">Contraseña</label>
              <Input type="password" placeholder="Contraseña" />
            </div>
            <button className="login-button">Iniciar sesión</button>
            <p className="or-text">o</p>
            <button className="google-button">
              <span className="google-icon" />
              Iniciar sesión con Google
            </button>
            {links.map(({ label,route }) => (
            <p key = {route} className="account">
              <Link href={route}>
                {label}
              </Link>
            </p>
          ))}
          </form>
        </div>
      </div>
    );
  }
  
  export default SignInPage;