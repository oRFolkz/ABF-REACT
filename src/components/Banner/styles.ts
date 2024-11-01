import styled from 'styled-components'

export const WhiteFade = styled.div`
    width: 100%;
    height: 15%;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 60%);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
`

export const MainBanner = styled.div`
    position: relative;

    &:hover {
        cursor: grab
        }

    .slick-dots {
        bottom: 10px !important;     
    }

    .slick-next {
        right: 0px;
        width: 80px !important;
        z-index: 10;
        opacity: 1;
        
    &:before {
        color: black;
        font-size: 3rem !important;
        }
    }

    .slick-prev {
        left: 10px;
        font-size: 1rem;
        z-index: 10;
        opacity: 1;

    &:before {
        color: black;
        font-size: 3rem !important;
        }
    }
    img {
        width: 100%;
        height: 700px;
        object-fit: cover;
    }

    @media ( width < 425px ) {
        min-height: 400px;
        height: 15vh;
    }
`