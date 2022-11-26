import React from "react";
import logo from '../assets/images/logo.PNG'
import { Link } from 'react-router-dom';

const Search = ({cartItem}) => {
    window.addEventListener("scroll", function(){
        const search = this.document.querySelector(".search")
        search.classList.toggle("active", this.window.scrollY > 100)
    })
    return (
        <>
           <section className="search">
            <div className="container c_flex">
                <div className="logo width">
                    <img src={logo} alt=''/>
                </div>
                <div className="search-box f_flex">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="Escribe y presiona enter para buscar..." />
                    <span>Todas las Categorias</span>
                </div>
                <div className="icon f_flex width">
                    <Link to="/admin">
                    <i className="fa fa-user icon-circle"></i></Link>
                    <div className="cart">
                        <Link to="/cart">
                            <i className="fa fa-shopping-cart icon-circle"></i>
                            <span>{cartItem.length === 0 ? '0' : cartItem.length}</span>
                        </Link>
                    </div>
                </div>
            </div>
           </section>
        </>
    )
}

export default Search