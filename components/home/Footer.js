import React from 'react';
import ContainerStyled from "../styled/ContainerStyled"
import FooterStyled from '../styled/FooterStyled';
import Rectangle from "../styled/Rectangle"
import contactData from './footer/data/contact';
import termsData from './footer/data/terms';
import ListLinks from './footer/ListLinks';
import SocialLinks from './footer/SocialLinks';

export default function Footer() {
  return (
    <ContainerStyled className='footer'>
        <FooterStyled>
            <img src='images/logo.svg' className='logo' alt="logo svg" />
            <ListLinks data={contactData} />
            <ListLinks data={termsData} />
            <SocialLinks />
        </FooterStyled>
        <Rectangle className='rectangle' />
    </ContainerStyled>
  )
}
