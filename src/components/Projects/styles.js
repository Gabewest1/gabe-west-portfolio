import styled from "styled-components"
import colorer from "colorer"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../constants"

export const Background = styled.div`

`
export const Container = styled.div`
    position: relative;
    background-color: ${ SECONDARY_COLOR };
`
export const Stripe = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    border-top: solid 150px transparent;
    border-left: solid 285px #15191d;
`
export const ProjectsView = styled.div`
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;

    > * {
        margin: 1em;
    }

    > *:last {
        margin-bottom: 1em;
    }

    &:before {
		content: "";
		display: block;
        position: absolute;
		height: 100%;
		width: 100%;
		// background: rgba(0,0,0,.8);
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
export const Title = styled.h3`
    color: ${ SECONDARY_COLOR };
    line-height: 12vmax;
    font-size: 28px;
    text-align: center;
    letter-spacing: 4px;
    margin: 0;
`
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
    overflow: hidden;
    position: relative;
    width: 80%;
    max-width: 230px;
    height: 300px;
    margin-bottom: 95px;

    @media (min-width: 768px) {
        width: 30%;
    }

    i {
        width: auto !important;
    }

    h2 {
        color: ${ SECONDARY_COLOR };
        background-color: ${({ color }) => color };
        box-sizing: border-box;
        position: absolute;
        top: calc(100% - 76px);
        left: 0;
        width: 100%;
        padding: 10px 16px;
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
            padding-left: 61px;

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
        font-size: 14px;
        position: absolute;
        right: 8px;
        top: 0;
        bottom: 16px;
        left: 16px;
        ${ getTransition() };
    }
    .mc-btn-action {
        background: ${({ color }) => colorer(color).light(-20) };
        font-size: 16px;
        position: absolute;
        right: 8px;
        top: 5px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 5px solid;
        width: 34px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        color: #fff;
        cursor: pointer;
        z-index: 20;
        ${ getTransition() };
    }
    &.mc-active .mc-btn-action {
        top: 53px;
    }
    .mc-description {
        position: absolute;
        height: 0%;
        top: 100%;
        right: 15px;
        left: 8px;
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
            left: 8px;
            right: 15px;
            padding: 0;
            margin: 0;
            font-size: 16px;
            font-weight: 700;
            ${ getTransition(1.4) };
        }
        a {
            display: block;
            position: relative;
            font-size: 18px;
            color: #fff;
            text-decoration: none;
            top: 200px;

            &:hover {
                text-decoration: underline;
            }

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
            left: -6px;
            top: 14px;
            width: 45px;
            height: 45px;
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
            top: 100px;
            height: 100%;
            opacity: 1;
        }
        .mc-footer {
            opacity: 1;
            overflow: visible;
            height: 50px;
            position: absolute;
            top: calc(100% - 46px);
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
