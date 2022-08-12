import React from 'react'
import "./Header.scss"

function Header() {
  return (
    <header className="App-header">
    <div>Shop</div>
    <div>Products</div>
    <div>Cart</div>
    <div>Orders</div>
    <div>Add Products</div>
    <div>Admin Products</div>
    <div className='App_Header_logginButton'>
    <div className='App_Header_LogOutButton'>Sign In</div>
    <div className='App_Header_LogOutButton'>Sign up</div>
    </div>
    </header>
  )
};

export default Header