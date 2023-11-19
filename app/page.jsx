import React from 'react'
import Link from 'next/link';
import styles from './page.module.css'

const links = [{
  label: 'Inscríbete ahora',
  route: '/signup'
}]

function IndexPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.infoContainer}>
      <div className={styles.landingImgContainer}>
        </div>
      <div className={styles.textContainer}>
        <h2>Liga de Tennis Colombiana</h2>
        <h1>ASOCIACIÓN DE TENNIS</h1>
        <p>Entra al mundo del tenis de una manera completamente nueva.
          En nuestra página, te ofrecemos la oportunidad de sumergirte en la competencia, mejorar tus habilidades y conectarte con jugadores apasionados de todo el mundo.
        </p>
          <h3>¿Listo para darlo todo en la cancha?</h3>
        {/* Agrega más contenido específico de la landing page aquí */}
        {links.map(({ label, route }) => (
          <p key = {route} className={styles.landingLink}>
            <Link href={route}>
              {label}
            </Link>
          </p>
        ))}
      </div>
    </div>
    </div>
  );
}

export default IndexPage;

