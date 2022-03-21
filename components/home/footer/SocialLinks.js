import React from 'react'
import Link from 'next/link'
import HiddenText from 'components/styled/hiddenText'

export default function SocialLinks() {
  return (
    <div className='social-links'>
        <ul>
            <li><Link href="https://www.linkedin.com/in/thet-lin-han-0a5693227/"><a><HiddenText>linkedin icon</HiddenText><i className="fa-brands fa-linkedin"></i></a></Link></li>
            <li><Link href="https://www.facebook.com/thethan13/"><a><HiddenText>facebook icon</HiddenText><i className="fa-brands fa-facebook"></i></a></Link></li>
            <li><Link href="https://github.com/thetsGit"><a><HiddenText>github icon</HiddenText><i className="fa-brands fa-github"></i></a></Link></li>
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
