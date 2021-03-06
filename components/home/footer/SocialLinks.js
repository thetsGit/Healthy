import React from 'react'
import Link from 'next/link'

export default function SocialLinks() {
  return (
    <div className='social-links'>
        <ul>
            <li><Link href="https://www.linkedin.com/in/thet-lin-han-0a5693227/"><a aria-abel='linkedin icon'><i className="fa-brands fa-linkedin"></i></a></Link></li>
            <li><Link href="https://www.facebook.com/thethan13/"><a aria-label='facebook icon'><i className="fa-brands fa-facebook"></i></a></Link></li>
            <li><Link href="https://github.com/thetsGit"><a aria-label='github icon'><i className="fa-brands fa-github"></i></a></Link></li>
        </ul>
        <p>     
            <i>
            <span><i className="fa-solid fa-less-than"></i> / <i className="fa-solid fa-greater-than"></i> by <em><a href='https://www.linkedin.com/in/thet-lin-han-0a5693227/' className='me'>Thethan</a></em></span>
            <br/>
            <span>&copy; Mao</span>     
            </i>
        </p>
    </div>
  )
}
