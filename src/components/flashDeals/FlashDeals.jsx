import React from "react";
import FlashCard from "./FlashCard";

const FlashDeals = ({productItems, addToCart }) => {
    return (
        <>
            <section className="flash background">
                <div className="container">
                    <div className="container f_flex">
                        <i className="fa fa-bolt"></i>
                        <h1>Oferta relampago</h1>
                    </div>
                    <FlashCard productItems={productItems} addToCart={addToCart}/>
                </div>    
            </section>
        </>
    )
}

export default FlashDeals