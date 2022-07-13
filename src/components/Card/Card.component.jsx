import React from "react";
import { CardContainer } from "./Card.styles";


const Card = ({title,imgUrl,linkUrl}) => {
    console.log(linkUrl)
    return ( 
        <>
            <CardContainer>
                <h1>{title}</h1>
                <a href={linkUrl}><img src={imgUrl.type} alt={title} /></a>                
            </CardContainer>
        </> 
    );
}
 
export default Card;