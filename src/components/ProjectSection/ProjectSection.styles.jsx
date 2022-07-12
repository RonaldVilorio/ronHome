import styled from "styled-components";
import ClothingYImgSrc from '../../images/clothing_y.png'
import { Colors } from "../GlobalStyle";

export const ProjectBox = styled.div`
    /* border:2px solid black; */
    padding:4rem;
    height: auto;
    margin-top: -8vh;
    background-image:linear-gradient(to bottom, ${Colors.beige}, ${Colors.secondary_green});
`
export const Title = styled.h1` 
    display:flex;
    justify-content:center;
    font-size:4rem;
    margin: 15rem auto;    
    font-weight:700;
    letter-spacing:.6rem;
    text-transform:uppercase;
    color:${Colors.black_bean};
`
export const ProjectGrid = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr 1fr;
`
export const Description = styled.p`
    display:flex;
    font-size:2.5rem;    
    align-items:center;
    margin-left:10rem;
    margin-right:auto;
    letter-spacing:.1rem;

`

