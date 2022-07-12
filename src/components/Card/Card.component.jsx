import React from "react";
import { CardContainer } from "./Card.styles";


const Card = ({title,imgUrl,linkUrl}) => {
    console.log(imgUrl.type)
    return ( 
        <>
            <CardContainer>
                <h1>{title}</h1>
                <img src={imgUrl.type} alt={title} />            
            </CardContainer>
        </> 
    );
}
 
export default Card;