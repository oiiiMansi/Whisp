import React from 'react'
import './LeftSidebar.css'

const LeftSidebar = () => {
  return (
    <div className='ls'>
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} className='logo' alt="" />
          <div className="menu">
            <img src={assets.menu_icon} alt="" />
          </div>
        </div>
        <div className="ls-search"></div>
      </div>
      
    </div>
  )
}

export default LeftSidebar
