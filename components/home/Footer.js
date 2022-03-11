import React from 'react';
import ContainerStyled from "../styled/ContainerStyled"
import FooterStyled from '../styled/FooterStyled';
import Rectangle from "../styled/Rectangle"

export default function Footer() {
  return (
    <ContainerStyled className='footer'>
        <FooterStyled>
            <img src='images/logo.svg' className='logo' alt="logo svg" />
            <ul className='list-links'>
                <li className='main'><span className='main'>Healthy</span></li>
                <li><a href="#">benefits</a></li>
                <li><a href="#">credits</a></li>
                <li><a href="#">contact</a></li>
                
            </ul>
            <ul className='list-links'>
                <li><a href="#">about us</a></li>
                <li><a href="#">terms and conditions</a></li>
                <li><a href="#">privacy notice</a></li>
            </ul>
            <div className='social-links'>
                <ul>
                    <li><a href="https://www.linkedin.com/in/thet-lin-han-0a5693227/"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://www.facebook.com/thethan13/"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="https://github.com/thetsGit"><i class="fa-brands fa-github"></i></a></li>
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
        </FooterStyled>
        <Rectangle className='rectangle' />
    </ContainerStyled>
  )
}
