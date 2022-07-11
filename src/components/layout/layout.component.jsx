import React from 'react'
import { Link } from 'gatsby'
import { Navigation,HomeIcon } from './layout.styles'

const Layout = ({ pageTitle, children }) => {
    
  return (
        <>
            <title>{pageTitle}</title>            
            <main>
                <Navigation>
                    <ul>
                        <li><Link to="/"><HomeIcon/></Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </Navigation>
                {/* <h1>{pageTitle}</h1> */}
                {children}
            </main>
        </>

  )
}

export default Layout