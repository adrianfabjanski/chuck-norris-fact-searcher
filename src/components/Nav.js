import React from 'react'
import chuck_img from '../img/chuck-cartoon.png'

const Nav = () => {
    return (
        <div>
            <div className='header-cnt'>
        <a href='/'>
            <h2>Chuck Norris</h2>
        </a>
            <img src={chuck_img} height='100px' alt=''/> 
          </div>
          <div className='choice-cnt'>
            <h4 className='choice-item'>
              <a href='/search'>
              Search for a fact
              </a>
            </h4>
            <h4 className='choice-item'>
            <a href='/random'>
            Get random fact
            </a>
            </h4>
            <h4 className='choice-item'>
              <a href='/categories'>
              Get random fact from categories
              </a>
            </h4>
          </div>
        </div>
    )
}

export default Nav
