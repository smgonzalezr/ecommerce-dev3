import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="div container grid2">
                    <div className="box">
                        <h1>SHOPPING-Style</h1>
                        <li>Compra y recoge</li>
                        <li>Domicilio telefónico</li>
                        <li>Garantía extendida</li>
                        <li>Vende en SHOPPING-Style</li>
                        <li>Paute con nosotros</li>
                        <li>Afiliados Clickam</li>
                        <li>Revista virtual</li>
                        <div className='icon d_flex'>
                            <div className='img d_flex'>
                                <i class='fa-brands fa-google-play'></i>
                                    <li>
                                        <a href="https://play.google.com/store/games">Google Play</a>
                                    </li>                                    
                            </div>
                            <div className='img d_flex'>
                                <i class='fa-brands fa-app-store-ios'></i>
                                    <li>
                                        <a href="https://apps.apple.com/es/app/apple-store/id375380948">Google Play</a>
                                    </li> 
                            </div>
                        </div>
                    </div>
                    <div className='box'>
                        <h2>Sobre Nosotros</h2>
                        <ul>
                            <li>Grupo TECH-LOGISTICS</li>
                            <li>Fundación TECH-LOGISTICS</li>
                            <li>Donar goticas</li>
                            <li>Inversionistas</li>
                            <li>Ventas empresariales</li>
                            <li>Oportunidades de empleo</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h2>Atencion al Cliente</h2>
                        <ul>
                            <li>Preguntas Frecuentes</li>
                            <li>Políticas de Cambios y Devoluciones</li>
                            <li>Política de garantías</li>
                            <li>Contacto</li>
                            <li>Cambia tu producto fácil</li>
                            <li>Almacenes</li>
                            <li>Escribenos (PQRS)</li>
                            <li>¿Cómo gestionar mi pedido?</li>
                            <li>Actualiza tus datos</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h2>Contactanos</h2>
                        <ul>
                            <li>calle 67 No. 53 - 108  Medellín - Colombia </li>
                            <li>Email: atencionalusuario@tech-logistics.com</li>
                            <li>Telefono: (+57) 3195555555</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer