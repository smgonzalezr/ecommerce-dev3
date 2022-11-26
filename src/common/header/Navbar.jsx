import React, { useState } from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    const[MobileMenu, setMovileMenu] = useState(false);
    return (
        <>
            <header className="header">
                <div className="container d_flex">
                    <div className="navlink">
                        <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMovileMenu(false)}>
                            <li> 
                                <Link to='/'>Inicio</Link>
                            </li>
                            <li>
                                <a className="App-link" href="https://www.google.com/maps/@10.4652959,-73.2588325,14z?hl=es">Rastrear mi pedido</a>
                            </li>
                            <li>
                                <Link to= '/contac'>Contacto</Link>
                            </li>
                        </ul>
                        <button className="toggle" onClick={() => setMovileMenu(!MobileMenu)}>
                            {
                                MobileMenu? <i className="fas fa-times close home-bth"></i> :
                                <i className="fas fa-bars open"></i>
                            }
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar