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
                        <Label htmlFor="name">FULLNAME:
                            <Input name="name" />
                        </Label>
                    </Field>
                    <Field>
                        <Label htmlFor="email">EMAIL:
                            <Input name="email" />
                        </Label>
                    </Field>
                    <Field>
                        <Label htmlFor="message">MESSAGE:
                            <TextArea type="textarea" name="message" />
                        </Label>
                    </Field>

                    <SubmitButton onClick={ this._handleSubmit }>
                        <SubmitIcon />
                    </SubmitButton>

                    <Footer>
                        <div>
                            <Text><strong>Hate Forms?</strong> <em>Give Me A Call!</em></Text>
                            <Text>512-669-9592</Text>
                        </div>
                    </Footer>
                </Form>
            </Container>
        )
    }
    _handleSubmit = (e) => {
        e.preventDefault()
    }
}

const INPUT_STYLES = `
    box-sizing: border-box;
    height: 30px;
    // width: 160px;
    width: 100%;
    margin-bottom: 24px;

    // @media (min-width: 768px) {
    //     width: 74%;
    // }
`
const FORM_BACKGROUND_COLOR = colorer(SECONDARY_COLOR).light(20)

const Container = styled.div`
    background: ${ SECONDARY_COLOR };
    position: relative;
    padding-bottom: 40px;
`
const Text = styled.p``
const Title = styled.h3`
    font-size: 28px;
    margin: 0;
    font-weight: 500;
    line-height: 12vmax;
    letter-spacing: 6px;
    text-align: center;
`
const Input = styled.input`
    ${ INPUT_STYLES }
`
const TextArea = styled.textarea`
    ${ INPUT_STYLES }
    height: 120px;
`
const Label = styled.label`
    width: 100%;
`
const SubmitIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 512 512">
        <path d="M104.837 294.974l-87.562-42.957 477.45-133.694z" fill={ FORM_BACKGROUND_COLOR }/>
        <path d="M494.725 118.323l-354.918 187.812 17.531 87.542 63.13-51.528-31.293-13.742z" fill={ FORM_BACKGROUND_COLOR }/>
        <path d="M326.154 372.705l-106.865-47.084 274.985-206.756z" fill={ FORM_BACKGROUND_COLOR }/>
    </svg>
)
const SubmitButton = styled.button`
    width: 100%;
    margin-top: 8px;
`
const Field = styled.div`
    display: flex;
    justify-content: space-between;
`
const Form = styled.form`
    border-radius: 5px;
    background-color: ${ FORM_BACKGROUND_COLOR };
    width: 80%;
    max-width: 560px;
    margin: 0 auto;
    padding: 15px;
    padding-top: 27px;  
`
const Stripe = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    border-top: solid 122px transparent;
    border-right: solid 285px ${ PRIMARY_COLOR };
`
const Footer = styled.div`
    margin-top: 30px;

    ${Text} {
        margin: 8px 0;
    }

    div {
        border-top: solid thin ${ PRIMARY_COLOR };
        display: flex;
        justify-content: space-between;
    }
`