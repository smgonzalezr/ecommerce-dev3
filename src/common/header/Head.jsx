/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Head = () => {
    return (
        <>
            <section className="head">
                <div className="container d_flex">
                    <div className="left row">
                        <i className="fa fa-phone"></i>
                        <label>(+57) 3195555555</label>
                        <i className="fa fa-envelope"></i>
                        <label>atencionalusuario@tech-logistics.com</label>
                    </div>
                    <div className="right row RText">
                        <label>Preguntas Frecuentes</label>
                        <label>Ayuda</label>
                        <img className="imagen" src="https://img.icons8.com/external-others-iconmarket/15/000000/external-colombia-flags-others-iconmarket.png"/>
                        <label>ESP</label>
                        <img className="imagen" src="https://img.icons8.com/external-others-iconmarket/15/000000/external-colombia-flags-others-iconmarket.png"/>
                        <label>COL</label>
                    </div>
                </div>
                
            </section>        
        </>
    )
}

export default Head