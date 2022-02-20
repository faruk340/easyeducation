import React from "react";




function Cards(props) {
    return (
        <>
            <div className="card">
                <div className="img-card card-1">
                    <img src={props.imgsrc} alt="image-1" />
                    <h5>{props.brand}</h5>
                    <h4>{props.price}</h4>
                    <h6>{props.company}</h6>
                </div>
            </div>
        </>
    )
}


export default Cards;