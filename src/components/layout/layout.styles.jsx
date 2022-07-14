import styled from 'styled-components'
import { Colors } from '../GlobalStyle'
import { Home } from '@styled-icons/ionicons-solid'
// Navbar styles
export const Navigation = styled.nav` 
    border-radius:.5rem .5rem 0 0;
    background-color:${Colors.black_bean};
    transform:translateY(2.7rem);
    
    ul{
        margin:0;
        display:flex; 
        align-items:center;   
        list-style:none;
        padding:1rem;
        
       
        li{
            margin-left:3rem;
            display:flex;
            
            
            a{
                text-decoration:none;
                color:${Colors.primary_green};
                
            }
        } 
        & > *:last-child{
            margin-right:3rem;
            margin-left:auto;
            font-size:3rem;            
            letter-spacing:.1rem;
            text-transform:uppercase;
        }               

    }

`
export const HomeIcon = styled(Home)`
    color:inherit;
    height:6rem;


`