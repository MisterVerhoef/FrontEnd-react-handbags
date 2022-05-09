import React from "react";

function Product({productLabel, productImage, imageTitle, productName, productPrice}) {



    return(
        <article>
            <span>{productLabel}</span>
            <img src={productImage} alt={imageTitle}/>
            <p>{productName}</p>
            <h4>{productPrice}</h4>
        </article>

    );
}





export default Product;