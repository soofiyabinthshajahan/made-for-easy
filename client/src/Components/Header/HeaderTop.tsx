import React from 'react';
import { Header1, HeaderText, HeaderContact, HeaderSocial } from './Header.styles';
import { MdPhoneIphone } from 'react-icons/md';
import { BsWhatsapp, BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";


function HeaderTop() {
    
    return (
        <Header1>
            <HeaderContact>
                <HeaderText>INDIA, BURKINA FASO</HeaderText>
                <span><MdPhoneIphone size={24} /></span>
                <HeaderText>+91 9495389547 |</HeaderText>
                <HeaderText>+91 9846194952</HeaderText>
            </HeaderContact>
            <HeaderSocial>
                <span><BsWhatsapp size={24} /></span>
                <span><BsInstagram size={24} /></span>
                <span><BsFacebook size={24} /></span>
                <span><BsLinkedin size={24} /></span>
            </HeaderSocial>
        </Header1>
    );
}
export default HeaderTop;
