import React, { useState } from 'react';
import "../pages/newsletterPage.css";
import { Link } from 'react-router-dom';

export default function Newsletter(){
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('¡Gracias por suscribirte!');
        setEmail('');
    };

    return (
    <div className='newsletter-background'>
        <div className="newsletter-container">
            <section className="subscription-section">
                <h2>Suscríbete a mi Newsletter</h2>
                <p>
                    Mantente al día con las últimas actualizaciones, proyectos y
                    consejos sobre desarrollo y administración de redes.
                </p>
                <form onSubmit={handleSubmit} className="newsletter-form">
                    <input
                        type="email"
                        placeholder="Tu correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Suscribirme</button>
                </form>
                {message && <p className="newsletter-message">{message}</p>}
            </section>

            <section className="content-section">
                <h1>Newsletter de este mes</h1>
                <p>
                    Recibe las últimas noticias y consejos útiles sobre
                    programación y administración de redes.
                </p>

                <article className="news-article">
                    <h2>Cómo Mejorar la Seguridad de tu Red Local</h2>
                    <p>
                        Te traemos un artículo sobre mejores prácticas para
                        proteger redes locales, desde la configuración de
                        firewalls hasta la gestión de contraseñas seguras.
                    </p>
                    <Link to="#" className="newsletter-btn">
                        Leer más sobre seguridad en redes
                    </Link>
                </article>

                <article className="news-article">
                    <h2>Herramientas Imprescindibles para Administradores de Redes</h2>
                    <p>
                        ¿Eres administrador de redes? Aquí te dejamos nuestras
                        herramientas recomendadas para facilitar tu gestión y
                        mejorar la eficiencia.
                    </p>
                    <Link to="#" className="newsletter-btn">
                        Ver herramientas recomendadas
                    </Link>
                </article>
            </section>
        </div>
    </div>
        
    );
};

