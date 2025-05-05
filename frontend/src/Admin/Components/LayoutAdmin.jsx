import React from 'react'
import Sidebar from './Sidebar'
import NavbarAdmin from './NavbarAdmin'
import FooterAdmin from './FooterAdmin'

const LayoutAdmin = ({ children }) => {
  return (
    <>
     <div className="app">
       <Sidebar />
       <div className="main-content">
       <NavbarAdmin/>
       {children}
       <FooterAdmin/>
       </div>
       </div>
    </>
  )
}

export default LayoutAdmin
