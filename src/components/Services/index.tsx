import React, { useState } from 'react'
import Slider from 'react-slick'
import { Arrows, BtnMore, ScrollCard, ServiceCardInside, ServiceCardTitle, ServiceIcon, ServicesCard, ServicesContainer, ServicesMainImg, ServicesSubContainer, ServiceSubCard, ServiceCardText, HighlightCard, ActiveCard, BtnCloseSubCard, ActiveCardTxt, ActiveCardContainer } from './styles.ts'

import ImgHenrique from '../imgs/henrique/Henrique6.png'
import ImgAna from '../imgs/anaF/anaF.png'
import ImgGabriele from '../imgs/gabriele/gabriele1.jpg'
import ImgLarissa from '../imgs/larissa/larissa.png'


function Services() {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false,
        speed: 1000,
        fade: true
    }

    const [criminalistaActive, setCriminalistaActive] = useState(false)
    const [trabalhistaActive, setTrabalhistaActive] = useState(false)
    const [administrativoActive, setAdministrativoActive] = useState(false)
    const [tributarioActive, setTributarioActive] = useState(false)

    const [hoverCriminalistaActive, setHoverCriminalistaActive] = useState(false)
    const [hoverTrabalhistaActive, setHoverTrabalhistaActive] = useState(false)
    const [hoverAdministrativoActive, setHoverAdministrativoActive] = useState(false)
    const [hoverTributarioActive, setHoverTributarioActive] = useState(false)

    return (
        <ServicesContainer>
             <ServicesMainImg className='slider-container'>
                    <Slider {...settings} className={` ${hoverTrabalhistaActive || hoverCriminalistaActive || hoverAdministrativoActive ||hoverTributarioActive ? 'hidden' : ''} ${criminalistaActive || trabalhistaActive || administrativoActive || tributarioActive ? 'hidden' : ''} `}>
                        <img className={` ${criminalistaActive || trabalhistaActive || administrativoActive || tributarioActive ? 'hidden' : ''} ${hoverCriminalistaActive ? '' : 'hidden'} `} src={ImgHenrique} alt="" />
                        <img className={` ${criminalistaActive || trabalhistaActive || administrativoActive || tributarioActive ? 'hidden' : ''} ${hoverTrabalhistaActive ? '' : 'hidden'} `} src={ImgAna} alt="" />
                        <img className={` ${criminalistaActive || trabalhistaActive || administrativoActive || tributarioActive ? 'hidden' : ''} ${hoverAdministrativoActive ? '' : 'hidden'} `} src={ImgGabriele} alt="" />
                        <img className={` ${criminalistaActive || trabalhistaActive || administrativoActive || tributarioActive ? 'hidden' : ''} ${hoverTributarioActive ? '' : 'hidden'} `} src={ImgLarissa} alt="" />
                    </Slider>
                <img className={` ${criminalistaActive || trabalhistaActive || administrativoActive || tributarioActive ? 'hidden' : ''} ${hoverCriminalistaActive ? '' : 'hidden'} `} src={ImgHenrique} alt="" />
                <img className={` ${criminalistaActive || trabalhistaActive || administrativoActive || tributarioActive ? 'hidden' : ''} ${hoverTrabalhistaActive ? '' : 'hidden'} `} src={ImgAna} alt="" />
                <img className={` ${criminalistaActive || trabalhistaActive || administrativoActive || tributarioActive ? 'hidden' : ''} ${hoverAdministrativoActive ? '' : 'hidden'} `} src={ImgGabriele} alt="" />
                <img className={` ${criminalistaActive || trabalhistaActive || administrativoActive || tributarioActive ? 'hidden' : ''} ${hoverTributarioActive ? '' : 'hidden'} `} src={ImgLarissa} alt="" />
            </ServicesMainImg>
            <ServicesSubContainer>
                <ServicesCard>
                    <ServiceSubCard className={criminalistaActive || trabalhistaActive || administrativoActive || tributarioActive ? 'hidden' : ''}>
                        <ServiceCardInside className="borderBottom">  
                            <HighlightCard className="borderRight">
                                <ScrollCard
                                    onMouseEnter={() => setHoverCriminalistaActive(true)}
                                    onMouseLeave={() => setHoverCriminalistaActive(false)}
                                    onClick={() => setCriminalistaActive(true)}
                                    >
                                    <ServiceIcon>
                                        <i className="fa-solid fa-scale-balanced"></i>
                                    </ServiceIcon>
                                    <ServiceCardTitle>
                                        <h2>Criminalista</h2>
                                    </ServiceCardTitle>
                                    <ServiceCardText>
                                        <p>Defesa jurídica especializada em crime econômico, financeiro, tributário, licitatório,  organização criminosa, tráfico de drogas, e outros  
                                        </p>
                                    </ServiceCardText>
                                </ScrollCard>
                                <Arrows>
{/*                                     <BtnPrevService><i className="fa-solid fa-arrow-left"></i></BtnPrevService> */}
                                    <BtnMore onClick={() => setCriminalistaActive(true)}>Saiba Mais</BtnMore>
{/*                                     <BtnNextService><i className="fa-solid fa-arrow-right"></i></BtnNextService> */}
                                </Arrows>
                            </HighlightCard>
                            <HighlightCard>
                                <ScrollCard 
                                    onMouseEnter={() => setHoverTrabalhistaActive(true)}
                                    onMouseLeave={() => setHoverTrabalhistaActive(false)}
                                    onClick={() => setTrabalhistaActive(true)}
                                    >
                                    <ServiceIcon>
                                        <i className="fa-solid fa-scale-balanced"></i>
                                    </ServiceIcon>
                                    <ServiceCardTitle>
                                        <h2>Trabalhista</h2>
                                    </ServiceCardTitle>
                                    <ServiceCardText>
                                        <p>Defesa jurídica especializada em crime econômico, financeiro, tributário, licitatório,  organização criminosa, tráfico de drogas, e outros  
                                        </p>
                                    </ServiceCardText>
                                </ScrollCard>
                                <Arrows>
{/*                                     <BtnPrevService><i className="fa-solid fa-arrow-left"></i></BtnPrevService> */}
                                    <BtnMore onClick={() => setTrabalhistaActive(true)}>Saiba Mais</BtnMore>
{/*                                     <BtnNextService><i className="fa-solid fa-arrow-right"></i></BtnNextService> */}
                                </Arrows>
                            </HighlightCard>
                        </ServiceCardInside>
                        <ServiceCardInside>  
                            <HighlightCard className="borderRight">
                                <ScrollCard 
                                onMouseEnter={() => setHoverAdministrativoActive(true)}
                                onMouseLeave={() => setHoverAdministrativoActive(false)}
                                onClick={() => setAdministrativoActive(true)}>
                                    <ServiceIcon>
                                        <i className="fa-solid fa-scale-balanced"></i>
                                    </ServiceIcon>
                                    <ServiceCardTitle>
                                        <h2>Administrativo</h2>
                                    </ServiceCardTitle>
                                    <ServiceCardText>
                                        <p>Defesa jurídica especializada em crime econômico, financeiro, tributário, licitatório,  organização criminosa, tráfico de drogas, e outros  
                                        </p>
                                    </ServiceCardText>
                                </ScrollCard>
                                <Arrows>
{/*                                     <BtnPrevService><i className="fa-solid fa-arrow-left"></i></BtnPrevService> */}
                                    <BtnMore onClick={() => setAdministrativoActive(true)}>Saiba Mais</BtnMore>
{/*                                     <BtnNextService><i className="fa-solid fa-arrow-right"></i></BtnNextService> */}
                                </Arrows>
                            </HighlightCard>
                            <HighlightCard>
                                <ScrollCard 
                                onMouseEnter={() => setHoverTributarioActive(true)}
                                onMouseLeave={() => setHoverTributarioActive(false)}
                                onClick={() => setTributarioActive(true)}>
                                    <ServiceIcon>
                                        <i className="fa-solid fa-scale-balanced"></i>
                                    </ServiceIcon>
                                    <ServiceCardTitle>
                                        <h2>Tributário</h2>
                                    </ServiceCardTitle>
                                    <ServiceCardText>
                                        <p>Defesa jurídica especializada em crime econômico, financeiro, tributário, licitatório,  organização criminosa, tráfico de drogas, e outros  
                                        </p>
                                    </ServiceCardText>
                                </ScrollCard>
                                <Arrows>
{/*                                     <BtnPrevService><i className="fa-solid fa-arrow-left"></i></BtnPrevService> */}
                                    <BtnMore onClick={() => setTributarioActive(true)}>Saiba Mais</BtnMore>
{/*                                     <BtnNextService><i className="fa-solid fa-arrow-right"></i></BtnNextService> */}
                                </Arrows>
                            </HighlightCard>
                        </ServiceCardInside>
                    </ServiceSubCard>
                    <ActiveCardContainer>
                        <ActiveCard className={criminalistaActive ? 'showCard1' : ''}>
                            <ActiveCardTxt>
                                <h4>Criminalista</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eligendi non iusto debitis architecto voluptatem neque! Vitae, sed harum. Recusandae quia neque sequi iusto rem quasi rerum libero ea omnis minima error maxime fugiat harum mollitia odio cupiditate cum, possimus beatae nemo distinctio! Ipsum aperiam ratione minus sit non distinctio, ea accusamus excepturi optio culpa a blanditiis libero, aliquid dolor consectetur repellendus numquam possimus eum molestias similique? Delectus ducimus aut, placeat officiis ipsum, tempora doloribus pariatur iste quae provident molestias a, rerum accusamus. Nemo saepe voluptatem laudantium possimus sint iure perferendis deleniti, dolorem aperiam alias qui doloribus eaque, minus dolore.</p>
                                <BtnCloseSubCard onClick={() => setCriminalistaActive(false)}><i className="fa-solid fa-circle-xmark"></i></BtnCloseSubCard>
                            </ActiveCardTxt>
                            <ServicesMainImg>
                                <img src={ImgHenrique} alt="" />
                            </ServicesMainImg>
                        </ActiveCard >
                        <ActiveCard className={trabalhistaActive ? 'showCard2' : ''}>
                            <ActiveCardTxt>
                                <h4>Trabalhista</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eligendi non iusto debitis architecto voluptatem neque! Vitae, sed harum. Recusandae quia neque sequi iusto rem quasi rerum libero ea omnis minima error maxime fugiat harum mollitia odio cupiditate cum, possimus beatae nemo distinctio! Ipsum aperiam ratione minus sit non distinctio, ea accusamus excepturi optio culpa a blanditiis libero, aliquid dolor consectetur repellendus numquam possimus eum molestias similique? Delectus ducimus aut, placeat officiis ipsum, tempora doloribus pariatur iste quae provident molestias a, rerum accusamus. Nemo saepe voluptatem laudantium possimus sint iure perferendis deleniti, dolorem aperiam alias qui doloribus eaque, minus dolore.</p>
                                <BtnCloseSubCard onClick={() => setTrabalhistaActive(false)}><i className="fa-solid fa-circle-xmark"></i></BtnCloseSubCard>
                            </ActiveCardTxt>
                            <ServicesMainImg>
                                <img src={ImgAna} alt="" />
                            </ServicesMainImg>
                        </ActiveCard>
                        <ActiveCard className={administrativoActive ? 'showCard3' : ''}>
                            <ActiveCardTxt>
                                <h4>Administrativo</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eligendi non iusto debitis architecto voluptatem neque! Vitae, sed harum. Recusandae quia neque sequi iusto rem quasi rerum libero ea omnis minima error maxime fugiat harum mollitia odio cupiditate cum, possimus beatae nemo distinctio! Ipsum aperiam ratione minus sit non distinctio, ea accusamus excepturi optio culpa a blanditiis libero, aliquid dolor consectetur repellendus numquam possimus eum molestias similique? Delectus ducimus aut, placeat officiis ipsum, tempora doloribus pariatur iste quae provident molestias a, rerum accusamus. Nemo saepe voluptatem laudantium possimus sint iure perferendis deleniti, dolorem aperiam alias qui doloribus eaque, minus dolore.</p>
                                <BtnCloseSubCard onClick={() => setAdministrativoActive(false)}><i className="fa-solid fa-circle-xmark"></i></BtnCloseSubCard>
                            </ActiveCardTxt>
                            <ServicesMainImg>
                                <img src={ImgGabriele} alt="" />
                            </ServicesMainImg>
                        </ActiveCard>
                        <ActiveCard className={tributarioActive ? 'showCard4' : ''}>
                            <ActiveCardTxt>
                                <h4>Tributario</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eligendi non iusto debitis architecto voluptatem neque! Vitae, sed harum. Recusandae quia neque sequi iusto rem quasi rerum libero ea omnis minima error maxime fugiat harum mollitia odio cupiditate cum, possimus beatae nemo distinctio! Ipsum aperiam ratione minus sit non distinctio, ea accusamus excepturi optio culpa a blanditiis libero, aliquid dolor consectetur repellendus numquam possimus eum molestias similique? Delectus ducimus aut, placeat officiis ipsum, tempora doloribus pariatur iste quae provident molestias a, rerum accusamus. Nemo saepe voluptatem laudantium possimus sint iure perferendis deleniti, dolorem aperiam alias qui doloribus eaque, minus dolore.</p>
                                <BtnCloseSubCard onClick={() => setTributarioActive(false)}><i className="fa-solid fa-circle-xmark"></i></BtnCloseSubCard>
                            </ActiveCardTxt>
                            <ServicesMainImg>
                                <img src={ImgLarissa} alt="" />
                            </ServicesMainImg>
                        </ActiveCard>
                    </ActiveCardContainer>
                </ServicesCard>
            </ServicesSubContainer>
    </ServicesContainer>
    )
}

export default Services