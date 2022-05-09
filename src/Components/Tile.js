import React from "react";

function Tile({brandImage, brandImageText, tileTitle, children}) {
    return(

        <section>
            <img src={brandImage}  alt={brandImageText}/>
            <h2>{tileTitle}</h2>
            {children}

        </section>

    );
}

export default Tile;