import React, { useState } from 'react'
import { Header, HeaderContainer, HeaderLogo, Links, BlogHover, ServicosHover, Icons, QuemSomosHover, LocalizacaoHover, PeticoesButton, IconsHeader, ShowLinksMobile} from './styles.ts'
import MobileLinks from '../MobileLinks/index.tsx'

import logo from '../imgs/logos/logotipo.png'
import { FacebookColor, InstagramColor, WhatsAppColor } from '../../styles.ts'

function Home() {
    const [ mobileLinksOn, setMobileLinksOn] = useState(false)
    return (
        <Header>
            <HeaderContainer>
                <ShowLinksMobile onClick={() => setMobileLinksOn(true)}>
                    <i className="fa-solid fa-bars"></i>
                </ShowLinksMobile>
                <HeaderLogo>
                    <img src={logo} alt="LOGO" />
                </HeaderLogo>
                <Links>
                    <BlogHover>
                        <Icons><i className="fa-solid fa-address-card "></i>Blog</Icons>         
                    </BlogHover>
                    <ServicosHover>
                        <Icons><i className="fa-solid fa-book"></i>Serviços</Icons>
                    </ServicosHover>
                    <QuemSomosHover>
                    <Icons><i className="fa-solid fa-user-tie"></i>Quem Somos</Icons>
                    </QuemSomosHover>
                    <LocalizacaoHover>
                        <Icons><i className="fa-solid fa-location-dot"></i>Localização</Icons>
                    </LocalizacaoHover>
                </Links>
                <PeticoesButton>
                    <p><i className="fa-solid fa-book-open"></i>Petições</p>
                </PeticoesButton>
                <IconsHeader>
                    <a href="https://www.instagram.com/abf_advogados?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer">
                    <InstagramColor className="fa-brands fa-instagram"></InstagramColor>
                    </a>
                     <a href="https://www.facebook.com/profile.php?id=100083081781351" target="_blank" rel="noreferrer">
                    <FacebookColor className="fa-brands fa-facebook"></FacebookColor>
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=5516992819803&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                    <WhatsAppColor className="fa-brands fa-whatsapp"></WhatsAppColor>
                    </a>
                </IconsHeader>
            </HeaderContainer>
            <MobileLinks 
            mobileLinksOn={mobileLinksOn}
            setMobileLinksOn={setMobileLinksOn}/>
        </Header>
    )
}

export default Home