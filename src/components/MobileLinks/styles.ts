import styled from "styled-components"
import { colors } from '../../styles.ts'

export const MobileContainer = styled.div`
    @media ( width > 754px ) {
        display: none;
    }

    &.hidden {
        overflow: hidden;
        opacity: 0;
        width: 0;
    }

    postion: relative;
    z-index: 200;
    position: fixed;
    top: 0;
    right: 0;
    width: 200px;
    height: 100vh;
    display: flex;
    flex-direction: column; 
    background-color: ${colors.grey};
    border-left: 1px solid ${colors.gold};
    transition: all 0.3s ease;
`

export const CloseBtn = styled.div`
    position: absolute;
    top: 15px;
    right: 30px;
    font-size: 1.5rem;
    color: ${colors.gold}
`
export const MobileLogo = styled.div`
    margin-top: 3rem;
    margin-left: 30px;

    img {
        width: 180px;
    }
`

export const Links = styled.a`
    margin-left: 30px;
`

export const BlogHover = styled.a`
    margin-left: 30px;
    cursor: pointer;
`

export const ServicosHover = styled.div`
    cursor: pointer;
`

export const QuemSomosHover = styled.div`
    cursor: pointer;
    margin: 0;
`

export const LocalizacaoHover = styled.div`
    cursor: pointer;
    margin: 0;
`

export const Icons = styled.p`
    font-weight: 600;
    text-decoration: none;
    color: ${colors.gold};
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
    margin: 1rem 0;

    i {
        width: 20px;
        margin-right: 5px
    }
` 

export const PeticoesButton = styled.div`
    background-color: transparent;
    border: 2px solid ${colors.gold};
    border-radius: 0.5rem 0.5rem 2rem 0.5rem;
    font-weight: bold;
    font-size: 1rem;
    transition: all 0.3s ease;
    width: 150px;
    margin-left: 30px;

    p {
        margin: 5px 18px 5px 10px;
        font-weight: 600;
        text-decoration: none;
        color: ${colors.gold};
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease;

        i {
            margin-right: 5px;
        }

        &:hover {
            color: ${colors.gold};
        }
    }

    &:hover {
        cursor: pointer;
        background-color: white;
        transform: scale(1.05);
    }

    i {
        font-size: 1.2rem;
    }
`

export const IconsHeader = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 1.55rem;
    margin-left: 30px;
    margin-top: 20px;

    i {
        font-size: 1.8rem;
        cursor: pointer;
        transition: transform 0.3s ease;           
    }
`