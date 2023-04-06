import React from 'react'
import '../App.css';

const Nav= () => {
  return (
    <div>
         <nav>
        <ul type="none" className="Nav-al">
          <li>
            <a href="/"><b>Home</b></a>
          </li>
          <li>
          <a href="/Contact"><b>Contact Us</b></a>
          </li>
          <li>
          <a href="/Blogs"><b>Blogs</b></a>
          </li>
          <li>
          <a href="/Product"><b>Product</b></a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
