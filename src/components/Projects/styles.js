import styled from "styled-components"
import colorer from "colorer"

export const Container = styled.div`
    
`
export const ProjectsView = styled.div`
    padding: 1em 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    > * {
        margin: 1em;
    }

    > *:last {
        margin-bottom: 1em;
    }
`
export const Overlay = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(100%);
`
export const Title = styled.h3``
export const Description = styled.p`
    font-size: .5em;
    transform: translateX(130%);
    transition: all .4s ease-in-out;    
`
export const ProjectImage = styled.img`
    position: absolute;
    max-height: 100%;
    max-width: 100%;
    top: 0;
    left: 0;
`

export const CardView = styled.article`
    position: relative;
    width: 80%;
    max-width: 230px;
    height: 300px;
    margin-bottom: 95px;

    @media (min-width: 768px) {
        width: 30%;
    }

    h2 {
        background-color: ${({ color }) => color };
        box-sizing: border-box;
        position: absolute;
        top: calc(100% - 40px);
        left: 0;
        width: 100%;
        padding: 10px 16px;
        color: #fff;
        font-size: 18px;
        line-height: 1.6em;
        margin: 0;
        z-index: 10;
        white-space: nowrap;
        ${ getTransition() };

        span {
            display: block;
        }
        strong {
            font-weight: 400;
            display: block;
            font-size: .8em;
        }
        &:before,
        &:after {
            content: ' ';
            position: absolute;
            left: 0;
            top: -16px;
            width: 0;
            border: 8px solid;
            ${ getTransition() };
            border-top-color: transparent;
            border-left-color: transparent;
        }
        &:before {
            border-right-color: ${({ color }) => colorer(color).light(-30)};
            border-bottom-color: ${({ color }) => colorer(color).light(-30)};
        }
        &:after {
            top: auto;
            bottom: 0;
            border-right-color: ${({ color }) => color};
            border-bottom-color: ${({ color }) => color};
        }
    }
    &.mc-active {
        @media screen and (max-width: 767px) {
            padding-bottom: 0;
        }
        h2 {
            top: 0;
            padding-left: 70px;

            &:before {
                top: 0;
                border-top-color: transparent;
                border-left-color: transparent;
                border-right-color: ${({ color }) => color};
                border-bottom-color: ${({ color }) => color};
            }
            &:after {
                bottom: -16px;
                border-bottom-color: transparent;
                border-left-color: transparent;
                border-right-color: ${({ color }) => colorer(color).light(-30)};
                border-top-color: ${({ color }) => colorer(color).light(-30)};
            }
        }
    }
    .mc-content {
        color: #37474F;
        font-size: 14px;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 16px;
        left: 16px;
        ${ getTransition() };
    }
    .mc-btn-action {
        background: ${({ color }) => color };
        font-size: 18px;
        position: absolute;
        right: 0px;
        top: 5px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 5px solid;
        width: 43px;
        height: 43px;
        line-height: 44px;
        text-align: center;
        color: #fff;
        cursor: pointer;
        z-index: 20;
        ${ getTransition() };
    }
    &.mc-active .mc-btn-action {
        top: 62px;
    }
    .mc-description {
        position: absolute;
        height: 0%;
        top: 100%;
        right: 30px;
        left: 30px;
        overflow: hidden;
        bottom: 54px;
        overflow: hidden;
        opacity: 0;
        ${ getTransition(1.2) };
    }
    .mc-footer {
        display: flex;
        justify-content: space-between;
        height: 0;
        opacity: 0;
        overflow: hidden;
        background-color: ${({ color }) => color};
        ${ getTransition() };

        h4 {
            color: ${({ color }) => color};
            position: absolute;
            top: 200px;
            left: 30px;
            padding: 0;
            margin: 0;
            font-size: 16px;
            font-weight: 700;
            ${ getTransition(1.4) };
        }
        a {
            display: block;
            float: left;
            position: relative;
            width: 52px;
            height: 52px;
            font-size: 20px;
            color: #fff;
            line-height: 52px;
            text-decoration: none;
            top: 200px;

            &:nth-child(1) {
                ${ getTransition(.5) }
            }
            &:nth-child(2) {
                ${ getTransition(.6) }
            }
            &:nth-child(3) {
                ${ getTransition(.7) }
            }
            &:nth-child(4) {
                ${ getTransition(.8) }
            }
            &:nth-child(5) {
                ${ getTransition(.9) }
            }
        }
    }
    .img-container {
        background: white;
        border-radius: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        ${ getTransition() };
        
        .img-responsive {
            max-height: 100%;
        }
    }
    &.mc-active {

        .img-container {
            display: flex;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            left: -12px;
            top: 8px;
            width: 60px;
            height: 60px;
            z-index: 20;
        }
        .mc-content {
            height: 100%;

            @media screen and (max-width: 767px) {
                position: relative;
                margin-right: 16px;
            }
        }
        .mc-description {
            top: 122px;
            height: 100%;
            opacity: 1;
        }
        .mc-footer {
            opacity: 1;
            overflow: visible;
            height: 50px;
            position: absolute;
            top: calc(100% - 16px);
            left: 16px;
            right: 0;

            a {
                top: 0;
            }
            h4 {
                top: -32px;
            }
        }
    }

    .fa-spin-fast {
        -webkit-animation: fa-spin-fast .2s infinite linear;
        animation: fa-spin-fast .1s infinite linear;
    }

    @-webkit-keyframes fa-spin-fast {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
        }
    }

    @keyframes fa-spin-fast {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
        }
    }

    }
`
function getTransition(duration = .3) {
    return `
        -webkit-transition: all ${ duration }s;
        -moz-transition: all ${ duration }s;
        -ms-transition: all ${ duration }s;
        -o-transition: all ${ duration }s;
        transition: all ${ duration }s;
    `
}
