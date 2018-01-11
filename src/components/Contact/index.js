import React from "react"
import styled from "styled-components"
import colorer from "colorer"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../constants"

export default class Contact extends React.Component {
    render() {
        return (
            <Container>
                <Title>Get in Touch!</Title>

                <Form>
                    <Field>
                        <Label htmlFor="email">Email:</Label>
                        <Input name="email" />
                    </Field>
                </Form>
            </Container>
        )
    }
}

const Container = styled.div`
    background: ${ SECONDARY_COLOR };
    position: relative;
`

const Title = styled.h3`
    font-size: 28px;
    margin: 0;
    font-weight: 500;
    line-height: 12vmax;
    letter-spacing: 6px;
    text-align: center;
`
const Input = styled.input`

`
const Label = styled.label`

`
const Field = styled.div``
const Form = styled.form`
    width: 80%;
    max-width: 560px;
    background-color: ${ colorer(SECONDARY_COLOR).light(20) };
    margin: 0 auto;
`
const Stripe = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    border-top: solid 122px transparent;
    border-right: solid 285px ${ PRIMARY_COLOR };
`