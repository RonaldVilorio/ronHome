import styled from "styled-components";
import ClothingYImgSrc from '../../images/clothing_y.png'
import { Colors } from "../GlobalStyle";
export const ProjectBox = styled.div`
    height: 100vh;
    /* border: 3px solid red; */
    background-image:linear-gradient(to bottom, ${Colors.secondary_green}, ${Colors.tertiary_green});
`
export const ProjectGrid = styled.div`
    display:grid;
   
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr 1fr;
`
export const Title = styled.h1` 
    display:flex;
    justify-content:center;
    font-size:4rem;
    margin:0;
    font-weight:700;
    letter-spacing:.6rem;
    color:${Colors.black_bean};

`
export const Card = styled.div`
    display:flex;
    border:2px solid black;
    height:60rem;
    width:60rem;
    img{
        max-width:100%;
        max-height:100%;        
    }
    background-image:url(${ClothingYImgSrc});
    background-size:cover;


`
export const Description = styled.div`


`

