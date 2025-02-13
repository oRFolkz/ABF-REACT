import styled from 'styled-components'
import { colors } from '../../styles.ts'

export const Footer = styled.div`
    background-color: ${colors.grey};
    padding-bottom: 1.1rem;
    width: 100%;
    height: auto;

    @media ( width < 860px ){
        flex-direction: column;
    }
`
export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: auto;

    i {
        padding-right: 0.3rem;
    }

    @media ( width < 960px ) {
        width: 95%;
        padding: 1rem 0 0 0;
    }

    @media ( width < 860px ) {
        padding: 0;
    }
`

export const LogoSide = styled.div`
    color: ${colors.gold};
    text-align: center;
    width: 250px;
    height: 130px;

    img {
        width: 100%;
        height: 100%;
    }

    @media ( width < 960px ) {
        width: 200px;
    }

    @media ( width < 860px ) {
        margin: 0 0 0 3.5rem;
        padding-bottom: 2rem;

        img {
            width: 100%;
            height: 100%;
        }
    }

`

export const InfoSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    color: white;
    font-weight: 500;

    @media ( width < 860px ) {
        width: auto;
        height: 150px;
    }
`

export const TimeSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    color: white;
    font-weight: 500;

    @media ( width < 860px ) {
        width: auto;
        height: 150px;
    }

    @media ( width < 435px ) {
        width: 250px;
    }
`

export const ContactBook = styled.div`
    font-size: 2rem;
`
export const FooterClock = styled.div`
    font-size: 2rem;
`

export const FooterInfo = styled.div`
    border-left: 1px solid ${colors.gold};
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    margin-left: 1rem;

    p {
        margin: 0;

        @media ( width < 960px ) {
            width: 190px;
        }
    }
`

export const FooterTime = styled.div`
    border-left: 1px solid ${colors.gold};
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    margin-left: 1rem;

    p {
        margin: 0;
    }
`

export const LocationSide = styled.div`
    margin: auto;
    width: 870px;
    height: 320px;
    text-align: end;

    @media ( width < 960px ) {
        width: 85%;
    }

    @media ( width < 860px ) {
        width: 90%;
    }
`

export const Diretos = styled.div`
    color: ${colors.gold};
    background-color: ${colors.grey};
    border-top: 2px solid ${colors.gold};
    padding: 0rem 0;
    text-align: center;

    h6 {
        margin: auto;
    }
`

export const FooterSubContainer = styled.div`
    background-color: ${colors.grey};
    display: flex;
    justify-content: space-around;
    width: 950px;
    margin: auto;
    padding: 1.5rem 0;
    border-radius: 1rem;

    @media ( width < 960px ) {
        width: 750px;
    }

    @media ( width < 860px ) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: auto;
        height: auto;
        padding: 0 0 2rem 0;
    }

    @media ( width < 680px ) {
        max-width: 500px;
        width: 75%;
    }
`

export const Teste = styled.div`
    display: flex;
    gap: 3rem;

    @media ( width < 860px ) {
        gap: 0rem;
    }

    @media ( width < 680px ) {
        flex-direction: column;
    }
`