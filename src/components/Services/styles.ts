import styled from 'styled-components'
import { colors } from '../../styles.ts'

export const ServicesContainer = styled.div`
    background: linear-gradient(0deg, rgba(202,168,88,0.5) 0%, rgba(255,255,255,0) 90%);
    display: flex;
    gap: 2rem;
    flex-direction: row-reverse;
    justify-content: center;
    height: auto;
    padding: 2rem 0;

    .borderRight {
        border-right: 1px solid ${colors.gold};
    }

    .borderBottom{
        border-bottom: 1px solid ${colors.gold};
    }

    .bordertop{
        border-top: 1px solid ${colors.gold};
    }
    
    .hidden {
        display: none;
    }
`

export const ServicesMainImg = styled.div`
    border: none;
    border-radius: 1rem 1rem 10rem 1rem;
    transition: all 0.5s ease;
    width: 300px;
    height: 550px;

    img {
        border-radius: 1rem 1rem 10rem 1rem;
        width: 300px;
        height: 550px;
    }

    @media ( width < 820px ) {
        width: 220px;
        height: 460px;

        img {
            width: 220px;
            height: 460px;
        }
    }

    @media ( width < 720px ) {
        width: 200px;
        height: 400px;

        img {
            width: 200px;
            height: 400px;
        }
    }

    @media ( width < 640px ) {
        display: none;
    }
`

export const ServicesSubContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 630px;
    height: 550px;

    @media ( width < 920px ) {
        width: 450px;
        height: 550px;
    }

    @media ( width < 820px ) {
        width: 450px;
        height: 460px;
    }

    @media ( width < 720px ) {
        width: 400px;
        height: 400px;
    }

    @media ( width < 640px ) {
        width: 400px;
        height: 380px;
    }

    @media ( width < 440px ) {
        width: 90%;
        height: auto;
    }
`

export const ServicesCard = styled.div`
    color: ${colors.grey};
    transition: transform 0.3s ease;
    text-align: center;
    height: auto;

    @media ( width < 820px ) {
        height: 435px;
    }

    @media ( width < 720px ) {
        height: 400px;
    }

    @media ( width < 640px ) {
        height: 360px;
    }

    @media ( width < 440px ) {
        height: auto;
    }
`

export const ServiceSubCard = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;

    @media ( width < 820px ) {
        height: 380px;
    }

    @media ( width < 640px ) {
        height: 295px;
    }

    @media ( width < 440px ) {
        height: auto;
    }
`

export const ServiceCardInside = styled.div`
    display: flex;
    align-items: center;
    transition: all 0.5s ease;
    margin: 0;
`

export const HighlightCard = styled.div`
    &:hover {
        cursor: pointer;
        background-color: rgba(202, 168, 88, 0.1);
        box-shadow: 0px 0px 90px 0px rgba(202, 168, 88, 0.8);
    }

`

export const ScrollCard = styled.div`
`

export const ServiceIcon = styled.div`
    margin-top: 1rem;

    
    @media ( width < 640px ) {
        margin: 1rem 0 0 0;
    }
`

export const ServiceCardTitle = styled.div`
    h2 {
        text-align: center;
        font-size: 1.1rem;
        font-weight: 700;
        margin: 0.3rem 0 1rem 0;

        @media ( width < 820px ) {
            font-size: 1rem;
            margin: 0 0 0.5rem 0;
        }

        @media ( width < 640px ) {
            margin: 0.5rem 0;
        }
    }
`

export const ServiceCardText = styled.div`
    p {
        margin: 0.5rem 0.5rem 1.5rem 0.5rem;
        font-size: 1rem;
        font-weight: 400;

        @media ( width < 820px ) {
            font-size: 15px;
            margin: 0 0.3rem 0.5rem 0.3rem;
        }

        @media ( width < 720px ) {
            font-size: 13px;
        }

        @media ( width < 640px ) {
            font-size: 12px;
        }
    }
`

export const Arrows = styled.div`
    font-size: 1rem;
    display: flex;
    justify-content: space-around;
    transition: all 0.5s ease;
    color: ${colors.grey};
    z-index: 999999999999;

    $i:hover{
    transform: scale(1.3);
    cursor: pointer;
}
`

export const BtnMore = styled.div`
    cursor: pointer;
    border: none;
    color: ${colors.grey};
    font-size: .9rem;
    font-weight: bold;
    text-decoration: underline;
    background-color: transparent;
    margin-bottom: 1rem;

    @media ( width < 640px ) {
        margin-bottom: 0.5rem;
    }
`

export const BtnPrevService = styled.div`
    i {
        font-size: 1.1rem;
    }
`

export const BtnNextService = styled.div`
    i {
        font-size: 1.1rem;
    }
`



// Other hidden cards

export const BtnCloseSubCard = styled.div`
    cursor: pointer;
    color: ${colors.gold};
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 2.5rem;

    @media ( width < 920px ) {
        font-size: 2rem;
        top: 10px;
        right: 20px;
    }

    @media ( width < 400px ) {
        font-size: 1.5rem;
        top: 18px;
        right: 20px;
    }
`
export const ActiveCardContainer = styled.div`
    width: 100%;
    margin: auto;

    @media ( width < 640px ) {
        width: 100vw;
    }
`
export const ActiveCard = styled.div`

    &.showCard1 {
        display: flex;
    }
    
    &.showCard2 {
        display: flex;
    }

    &.showCard3 {
        display: flex;
    }
    
    &.showCard4 {
        display: flex;
    }

    ${ServicesMainImg} {
    width: 0px;
    height: 550px;

        img {
            width: 300px;
            height: 550px;
        }

    @media ( width < 820px ) {
        width: 0px;
        height: 450px;

        img {
            width: 250px;
            height: 450px;
        }
    }

    @media ( width < 720px ) {
        height: 450px;

        img {
            width: 200px;
            height: 380px;
        }
    }

    @media ( width < 640px ) {
        display: none;
    }

    }

    width: 95%;
    margin: auto;
    display: none;

    h4 {
        font-size: 2rem;

        @media ( width < 920px ) {
            font-size: 2rem;
            margin: 1rem 0 0 0;
        }

        @media ( width < 720px ) {
            font-size: 1.5rem;
        }
    }
    
    p {
        font-size: 1.2rem;

        @media ( width < 640px ) {
            font-size: 1rem;
            padding: 0 1rem 1rem 1rem;
        }

        @media ( width < 920px ) {
            font-size: 1.2rem;
        }

        @media ( width < 720px ) {
            font-size: 1rem;
        }
    }

    @media ( width < 920px ) {
        width: 85%;
    }

    @media ( width < 640px ) {
        width: 100%;
    }
`
export const ActiveCardTxt = styled.div`
    position: relative;
    margin: 0 1rem 0 2.6rem;
    border: 2px solid ${colors.gold};
    border-radius: 2rem;
    width: 600px;

    p {
        padding: 0 2rem;

        @media ( width < 920px ) {
        height: 400px;
        }
    }

    @media ( width < 920px ) {
        width: 500px;
        height: 550px;
        overflow-x: auto;
    }

    @media ( width < 820px ) {
        height: 445px;
    }

    @media ( width < 720px ) {
        height: 380px;
        width: 80%;
    }
`