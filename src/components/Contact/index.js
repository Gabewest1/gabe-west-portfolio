import React from "react"
import styled from "styled-components"
import colorer from "colorer"
import * as EmailValidator from 'email-validator';

import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../constants"

import SectionTitle from "../shared/SectionTitle"

export default class Contact extends React.Component {
    constructor() {
        super()
        
        this.state = {
            loading: false,
            errors: {}
        }

        this.inputs = {}
    }
    render() {
        const inputs = [{ name: "Name", type: "input" }, { name: "Email", type: "email" }, { name: "Message", type: "textArea" }]
        const InputComponents = inputs.map(this._renderInput)

        return (
            <Container>
                <SectionTitle left right secondary>Get in Touch!</SectionTitle>


                <FormWrapper>
                    <p>
                        I'm looking to start a long career with a company that will provide long-term stability,
                        new challenges and an opportunity to work with talented people.
                    </p>
                    <p>
                        If you're looking for someone who loves what they do &amp; lays awake at night thinking about 
                        what they're gonna build tomorrow then reach out to me and lets create something awesome!
                    </p>

                    <Form action="/contact" method="post" >
                        <Footer bottom>
                            <div>
                                <Text>Send me an Email</Text>
                            </div>
                        </Footer>

                        { InputComponents }

                        <SubmitButton onClick={ this._handleSubmit }>
                            <SubmitIcon />
                        </SubmitButton>

                        <Footer>
                            <div>
                                <Text>
                                    <strong>Hate Forms?</strong>
                                    { window.innerWidth < 768 && <br />} 
                                    <em> Give Me A Call!</em>
                                    </Text>
                                <Text>512-669-9592</Text>
                            </div>
                        </Footer>
                    </Form>
                </FormWrapper>
            </Container>
        )
    }
    _renderInput = (input) => {
        const { name, type } = input
        const errorMessage = this.state.errors[name.toLowerCase()]
        const InputComponent = type === "input" || type === "email"
            ? Input 
            : TextArea

        return (
            <Field error={ errorMessage }>
                <Label htmlFor={ name.toLowerCase() }>
                    <InputComponent
                        innerRef={ this._setInput(name.toLowerCase()) }
                        name={ name.toLowerCase() }
                        placeholder={ errorMessage || name }
                        type={ type } />
                </Label>
            </Field>
        )
    }
    _handleSubmit = (e) => {
        e.preventDefault()
        
        const data = {}
        const errors = {}

        for (const field in this.inputs) {
            data[field] = this.inputs[field].value
        }

        console.log("FORM DATA:", data)

        errors.name = data.name.trim() === "" && "Please enter your name"
        errors.email = data.email.trim() === "" 
            ? "Please enter your email address"
            : !EmailValidator.validate(data.email)
                ? "Please enter a valid email address"
                : "" 
        errors.message = data.message.trim() === "" && "Please enter a message"

        const hasError = Object.keys(errors).find(error => errors[error])
        
        if (hasError) {
            console.log("Errors:", errors, hasError)
            this.setState({ errors })
        } else {
            this.setState({ loading: true, errors: {} })

            fetch("/contact", {
                method: "POST", 
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
                mode: "cors",
                cache: "default"
            }).then(res => {
                console.log("Request complete! response:", res)
                this.setState({ loading: false })
            }).catch(err => {
                console.log("Error submitting form:", err)
                this.setState({ errors: { submit: "An error occured when trying to process your Email :(" }})
            })
        }
    }
    _setInput = (name) => (input) => {
        this.inputs[name] = input
    }
}

const INPUT_STYLES = `
    box-sizing: border-box;
    border: none;
    background-color: ${colorer(SECONDARY_COLOR).light(-20)};
    color: ${ PRIMARY_COLOR };
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
    ${({ error }) => {
        if (error) {
            return `
                input, textarea {
                    border: solid thin red;

                    ::placeholder {
                        color: red;
                        opacity: 1;
                    }
                    
                    :-ms-input-placeholder {
                        color: red;
                    }
                    
                    ::-ms-input-placeholder {
                        color: red;
                    }
                }
            `
        }
    }}
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