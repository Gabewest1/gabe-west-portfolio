import React from "react"
import styled from "styled-components"
import colorer from "colorer"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../constants"

import SectionTitle from "../shared/SectionTitle"

export default class Contact extends React.Component {
    constructor() {
        super()
        
        this.inputs = {}
    }
    render() {
        return (
            <Container>
                <SectionTitle left right secondary>Get in Touch!</SectionTitle>


                <FormWrapper>
                    <p>
                        I'm looking to start a long career with a company that will provide long-term stability,
                        new challenges and an opportunity to work with talented people.
                    </p>

                    <Form action="/contact" method="post" >
                        <Footer bottom>
                            <div>
                                <Text>Send me an Email</Text>
                            </div>
                        </Footer>

                        <Field>
                            <Label htmlFor="name">
                                <Input innerRef={ this._setInput("name") } name="name" placeholder="Name" />
                            </Label>
                        </Field>
                        <Field>
                            <Label htmlFor="email">
                                <Input innerRef={ this._setInput("email") } name="email" placeholder="Email" />
                            </Label>
                        </Field>
                        <Field>
                            <Label htmlFor="message">
                                <TextArea innerRef={ this._setInput("message") } name="message" placeholder="Message" />
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
                </FormWrapper>
            </Container>
        )
    }
    _handleSubmit = (e) => {
        e.preventDefault()
        
        const data = {}

        for (const field in this.inputs) {
            data[field] = this.inputs[field].value
        }

        console.log("FORM DATA:", data)
        
        fetch("/contact", {
            method: "POST", 
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
            mode: "cors",
            cache: "default"
        }).then(res => {
            console.log("Request complete! response:", res)
        })
    }
    _setInput = (name) => (input) => {
        this.inputs[name] = input
    }
}

const INPUT_STYLES = `
    box-sizing: border-box;
    border: none;
    background-color: ${colorer(SECONDARY_COLOR).light(-20)};
    height: 30px;
    width: 100%;
    margin-bottom: 24px;
    padding: 8px;
`
const FORM_BACKGROUND_COLOR = colorer(SECONDARY_COLOR).light(-20)

const Container = styled.div`
    background: ${ SECONDARY_COLOR };
    position: relative;
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
        <path d="M104.837 294.974l-87.562-42.957 477.45-133.694z" fill={ PRIMARY_COLOR }/>
        <path d="M494.725 118.323l-354.918 187.812 17.531 87.542 63.13-51.528-31.293-13.742z" fill={ PRIMARY_COLOR }/>
        <path d="M326.154 372.705l-106.865-47.084 274.985-206.756z" fill={ PRIMARY_COLOR }/>
    </svg>
)
const SubmitButton = styled.button`
    width: 100%;
    background: ${FORM_BACKGROUND_COLOR};
    border-left: solid thin black;
    border-top: solid thin black;
    border-right: solid thin #efefef;
    border-bottom: solid thin #efefef;
    outline: none;

    &:active {
        border-left: solid thin #efefef;
        border-top: solid thin #efefef;
        border-right: solid thin black;
        border-bottom: solid thin black;

        * {
            position: relative;
            top: 2px;
            left: 2px;
        }
    }
`
const Field = styled.div`
    display: flex;
    justify-content: space-between;
`
const Form = styled.form`
    border-radius: 5px;
`
const FormWrapper = styled.div`
    margin: 0 auto;    
    max-width: 500px;
    width: 90%;    
`
const Footer = styled.div`
    ${({ bottom }) => bottom ? "margin-bottom: 30px;" : "margin-top: 30px;"}

    ${Text} {
        margin: 8px 0;
    }

    div {
        ${({ bottom }) => bottom ? `border-bottom: solid thin ${ PRIMARY_COLOR };` : `border-top: solid thin ${ PRIMARY_COLOR };`}
        
        display: flex;
        justify-content: space-between;
    }
`