import './signup.css'
import Link from 'next/link';
import Input from '../components/signup/inputForm/Input'


const links = [{
  label: '¿Ya tienes una cuenta?',
  route: '/signin'
}]

function SignUpPage() {
  return (
      <div className="app-container with-background">
      <div className="login-container">
        <h1 className="login-title">REGÍSTRATE AQUÍ</h1>
        <form className="login-form">
          <h2 className="form-title">Ingresa todos tus datos</h2>
          <div className="form-group">
            <label className="form-label">Nombre completo </label>
            <Input type="text" placeholder="Nombre completo" />
          </div>
          <div className="form-group">
            <label className="form-label">Correo electrónico </label>
            <Input type="email" placeholder="Correo electrónico" />
          </div>
          <div className="form-group">
            <label className="form-label">Contraseña </label>
            <Input type="password" placeholder="Contraseña" />
          </div>
          <button className="login-button">Registrarse</button>
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

export default SignUpPage