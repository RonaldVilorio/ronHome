import React from 'react'
import { Link } from 'gatsby'
import { Navigation,HomeIcon } from './Layout.styles.jsx'

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
                {children}
            </main>
        </>

  )
}

export default Layout