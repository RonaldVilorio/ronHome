import styled from 'styled-components'
import { Colors } from '../GlobalStyle'

// Navbar styles
export const Navigation = styled.nav` 
    background-color:${Colors.primary_green};
    border: .2rem solid red;
    border-radius:.5rem;
    
    ul{
        display:flex;    
        list-style:none;
        padding:.5rem;
        
        li{
            margin-left:3rem;
            display:flex;
            a{
                text-decoration:none;
            }
        } 
        & > *:last-child{
            margin-right:3rem;
            margin-left:auto;
        }               

    }



`