import { createGlobalStyle } from "styled-components";

export const Colors = {
    primary_green:'#76BA99',
    secondary_green:'#ADCF9F',
    tertiary_green:'#CED89E',
    beige:'#FFDCAE',
    black_bean:'#3D0C02'

}

export const GlobalStyles = createGlobalStyle`

html{    
    box-sizing: border-box;        
    font-size: 62.50%;   
}

body{
    margin: 0;
    padding: 3rem;
    font-family:'lato',sans-serif
}


`