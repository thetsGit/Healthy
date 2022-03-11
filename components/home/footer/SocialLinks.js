import React from 'react'
import Link from 'next/link'

export default function SocialLinks() {
  return (
    <div className='social-links'>
        <ul>
            <li><Link href="https://www.linkedin.com/in/thet-lin-han-0a5693227/"><a><i class="fa-brands fa-linkedin"></i></a></Link></li>
            <li><Link href="https://www.facebook.com/thethan13/"><a><i class="fa-brands fa-facebook"></i></a></Link></li>
            <li><Link href="https://github.com/thetsGit"><a><i class="fa-brands fa-github"></i></a></Link></li>
        </ul>
        <p>
        <p>
            <i>
            <span><i class="fa-solid fa-less-than"></i> / <i class="fa-solid fa-greater-than"></i> by <em><a href='https://www.linkedin.com/in/thet-lin-han-0a5693227/' className='me'>Thethan</a></em></span>
            <br/>
            <span>&copy; Mao</span>     
            </i>
        </p>
        </p>
    </div>
  )
}
