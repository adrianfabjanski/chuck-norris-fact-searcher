import React from 'react'
import chuck_img from '../img/chuck-cartoon.png'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <div className='header-cnt'>
        <Link to='/'>
            <h2>Chuck Norris</h2>
        </Link>
            <img src={chuck_img} height='100px' alt=''/> 
          </div>
          <div className='choice-cnt'>
            <h4 className='choice-item' id='choice-item-1'>
              <Link to='/search'>
              Search for a fact
              </Link>
            </h4>
            <h4 className='choice-item' id='choice-item-2'>
            <Link to='/random'>
            Get random fact
            </Link>
            </h4>
            <h4 className='choice-item' id='choice-item-3'>
              <Link to='/categories'>
              Get random fact from categories
              </Link>
            </h4>
          </div>
        </div>
    )
}

export default Nav
