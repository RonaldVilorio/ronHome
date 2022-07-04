import React from 'react'
import { Link } from 'gatsby'
import { DefaultSettings } from './layout.styles'

const Layout = ({ pageTitle, children }) => {
    
  return (
        <>
            <DefaultSettings>
                <title>{pageTitle}</title>
                <nav>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
                <main>
                    <h1>{pageTitle}</h1>
                    {children}
                </main>

            </DefaultSettings>
        </>

  )
}

export default Layout