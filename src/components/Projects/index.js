import React from "react"
import styled from "styled-components"

const ProjectsView = styled.div`
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

const Title = styled.h3``
const Description = styled.p`
    font-size: .5em;
    transform: translateX(130%);
    transition: all .4s ease-in-out;    
`

const Card = styled.div`
    display: inline-block;
	background-color: #112128;
    box-shadow: 0px 35px 77px -17px rgba(0,0,0,0.44);
    overflow: hidden;
    padding: 0 .7em;
    transition: all .4s ease-in-out;
    width: 10em;

    &:hover {
        box-shadow: 0px 35px 77px -17px rgba(0,0,0,0.64);
        transform: scale(1.07);
    }

    &:hover ${Description} {
        transform: translateX(0);
    }
`

export default class Projects extends React.Component {
    render() {
        return (
            <ProjectsView>
                <Card>
                    <Title>Simon Says Mobile App</Title>
                    <Description>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis illo veritatis consectetur alias quod,
                        placeat incidunt architecto quae quasi rem, magnam quidem sapiente autem suscipit. Harum eveniet quibusdam aut ex!
                    </Description>
                </Card>

                <Card>
                    <Title>Calculator</Title>
                    <Description>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis illo veritatis consectetur alias quod,
                        placeat incidunt architecto quae quasi rem, magnam quidem sapiente autem suscipit. Harum eveniet quibusdam aut ex!
                    </Description>
                </Card>

                <Card>
                    <Title>Weather Forecast</Title>
                    <Description>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis illo veritatis consectetur alias quod,
                        placeat incidunt architecto quae quasi rem, magnam quidem sapiente autem suscipit. Harum eveniet quibusdam aut ex!
                    </Description>
                </Card>

                <Card>
                    <Title>Wikipedia Viewer</Title>
                    <Description>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis illo veritatis consectetur alias quod,
                        placeat incidunt architecto quae quasi rem, magnam quidem sapiente autem suscipit. Harum eveniet quibusdam aut ex!
                    </Description>
                </Card>

                <Card>
                    <Title>Tic-Tac-Toe</Title>
                    <Description>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis illo veritatis consectetur alias quod,
                        placeat incidunt architecto quae quasi rem, magnam quidem sapiente autem suscipit. Harum eveniet quibusdam aut ex!
                    </Description>
                </Card>

                <Card>
                    <Title>Batman Tribute Page</Title>
                    <Description>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis illo veritatis consectetur alias quod,
                        placeat incidunt architecto quae quasi rem, magnam quidem sapiente autem suscipit. Harum eveniet quibusdam aut ex!
                    </Description>
                </Card>

                <Card>
                    <Title>Twitch TV</Title>
                    <Description>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis illo veritatis consectetur alias quod,
                        placeat incidunt architecto quae quasi rem, magnam quidem sapiente autem suscipit. Harum eveniet quibusdam aut ex!
                    </Description>
                </Card>

                <Card>
                    <Title>Random Quote Generator</Title>
                    <Description>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis illo veritatis consectetur alias quod,
                        placeat incidunt architecto quae quasi rem, magnam quidem sapiente autem suscipit. Harum eveniet quibusdam aut ex!
                    </Description>
                </Card>

                <Card>
                    <Title>Pomodoro Clock</Title>
                    <Description>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis illo veritatis consectetur alias quod,
                        placeat incidunt architecto quae quasi rem, magnam quidem sapiente autem suscipit. Harum eveniet quibusdam aut ex!
                    </Description>
                </Card>

                <Card>
                    <Title>Youtube</Title>
                    <Description>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis illo veritatis consectetur alias quod,
                        placeat incidunt architecto quae quasi rem, magnam quidem sapiente autem suscipit. Harum eveniet quibusdam aut ex!
                    </Description>
                </Card>

                <Card>
                    <Title>Dell</Title>
                    <Description>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis illo veritatis consectetur alias quod,
                        placeat incidunt architecto quae quasi rem, magnam quidem sapiente autem suscipit. Harum eveniet quibusdam aut ex!
                    </Description>
                </Card>
            </ProjectsView>
        )
    }
}