import styled from "styled-components";
import { Colors } from "../GlobalStyle";

export const ProjectBox = styled.div`
    padding:4rem;
    height: auto;
    margin-top: -5vh;
    background-image:linear-gradient(to bottom, ${Colors.beige}, ${Colors.secondary_green});
`
export const Title = styled.h1` 
    display:flex;
    justify-content:center;
    font-size:2.5rem;
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
export const DescriptionRight = styled.p`
    display:flex;
    font-size:1.6rem;    
    align-items:center;
    margin-left:10rem;
    letter-spacing:.1rem;

`
export const DescriptionLeft = styled.p`
    display:flex;
    font-size:1.6rem;    
    align-items:center;    
    margin-right:10rem;
    letter-spacing:.1rem;

`

