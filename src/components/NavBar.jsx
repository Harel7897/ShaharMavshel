import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = () => {
const navigate=useNavigate();

const gotomenu=()=>{
  navigate('/Menu')
}
const gotoShoppingCart=()=>{
  navigate('/ShoppingCart')
}
const gotoabout=()=>{
  navigate('/About')
}

  return (
    <div>
      <div className='navbar'>
         <button  className="nav-btn" onClick={gotoabout}>המלצות</button>
        <button  className="nav-btn" onClick={gotomenu}>תפריט</button>
        <button  className="nav-btn" onClick={gotoShoppingCart}>הזמן אירוע</button>
      </div>
       
    </div>
  )
}

export default NavBar