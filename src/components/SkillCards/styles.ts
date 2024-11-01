import styled from 'styled-components'
import { colors } from '../../styles.ts'

export const Skillcards = styled.div`
    background: linear-gradient(0deg, rgba(202, 168, 88, 0.7) -100%, rgba(35, 31, 32, 1) -100%, rgba(35, 31, 32, 1) 95%, rgba(187, 156, 83, 0.7) 100%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
`

export const CardsContainer = styled.div`
    margin: 2rem auto;
    justify-content: center;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    max-width: 950px;
`

export const CardSubcontainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ( width < 680px ) {
        align-items: center;
        text-align: center;
    }
    
    @media ( width < 680px ) {
        order: 1;
    }
`

export const Cards = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 26.5rem;
    height: 15rem;

    border-radius: 1rem;
    background-color: white;
    box-shadow: 1px 1px 10px ${colors.gold};

    @media ( width < 863px ) {
        height: auto;
    }

    @media ( width < 680px ) {
        flex-direction: column;
        gap: 0;
        width: 360px !important;
        height: auto !important;
        padding: 1rem 0;
    }

    @media ( width < 390px ) {
        width: 80% !important;
    }
`

export const Img = styled.div`
    opacity: 0.5;

    .CardImgClassOdd {
        position: absolute;
        bottom: 20px;
        right: 30px;
        width: 200px;
        height: 150px;

    @media ( width < 640px ) {
        width: 150px;
        }
    }

    .CardImgClassEven {
        position: absolute;
        bottom: 20px;
        left: 20px;
        width: 200px;
        height: 150px;

    @media ( width < 640px ) {
        width: 150px;
        }
    }

    @media (width < 560px ) {
            width: 50%;
    }
`

export const CardSubcontainerTitle = styled.h4`
    color: ${colors.gold};
    font-weight: 700;
    font-size: 20px;
    padding-left: 1rem;
    padding-top: 1rem;
    margin: auto;
    width: 60%;
    height: 50px;
    z-index: 1;

    @media ( width < 863px ) {
        padding: 1rem 0 0 0;
    }

    @media ( width < 680px ) {
        padding-left: 0rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    @media (width < 560px ) {
        width: 250px;
        padding: 0.5rem 0 0 0;
    }
`

export const CardSubcontainerDescription = styled.p`
    color: black;
    font-weight: 400;
    font-size: 16px;
    padding-left: 1rem;
    padding-top: 0.2rem;
    margin: auto;
    width: 50%;
    width: 90%;
    height: 200px;
    z-index: 1;

    @media ( width < 863px ) {
        padding: 1rem 0 0 0;
    }

    @media ( width < 680px ) {
        height: auto;
        padding-left: 0rem;
        padding-top: 0rem;
        font-weight: 400;
    }
`