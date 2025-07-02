import React from 'react'
import './RightSidebar.css'
import assets from '../../assets/assets'


const RightSidebar = () => {
  return (
    <div className='rs'>
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>Billy Butcher <img src={assets.green_dot} alt="" /></h3>
        <p>Hey there, i am using Whisp</p>
      </div>
      
    </div>
  )
}

export default RightSidebar
