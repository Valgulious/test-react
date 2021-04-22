import styled from "@emotion/styled";
import ProfileSection from "../ProfileSection.jsx";
import BasicProfileFormInput from "./BasicProfileFormInput.jsx";
import FormHeader from "../FormHeader.jsx";
import FormButton from "../FormButton.jsx";
import Hr from '../../../../Hr.jsx'
import Footer from "../Footer.jsx";
import SubmitMessage from "../SubmitMessage.jsx";
import PhoneInput from "./PhoneInput.jsx";
import {useRef, useState} from "react";


const BasicProfileForm = () => {

    const [formReload, setFormReload] = useState(true);

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);

    const buttonRef = useRef(null);
    const submitMessageRef = useRef(null);

    const emailSpanRef = useRef(null);

    const emailValidation = (value) => {
        const regEmail = /\S+@\S+\.\S+/;

        return regEmail.test(value);
    }

    const handleChange = (e) => {
        let firstNameIsInvalid = firstNameRef.current.value === '';
        let lastNameIsInvalid = lastNameRef.current.value === '';

        if ('email' === e.target.id) emailSpanRef.current.textContent = '';

        let emailIsValid = emailValidation(emailRef.current.value);

        buttonRef.current.disabled = firstNameIsInvalid || lastNameIsInvalid || !emailIsValid;
    }

    const handleEmailBlur = () => {
        const emailValue = emailRef.current.value;
        if (emailValidation(emailValue)) {
            emailSpanRef.current.textContent = '';
        } else {
            emailSpanRef.current.textContent = 'Incorrect email. Example: example@example.com';
            emailSpanRef.current.style.color = 'red';
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        const formData = new FormData(e.target);

        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }

        if(Math.round(Math.random())) {
            submitMessageRef.current.textContent = 'Saved';
            submitMessageRef.current.style.color = 'green';

            setFormReload(!formReload);

            buttonRef.current.disabled = true;

            setTimeout(() => {
                submitMessageRef.current.textContent = '';
            }, 5000);
        } else {
            submitMessageRef.current.textContent = 'Error. Try again';
            submitMessageRef.current.style.color = 'red';
        }
    }

    const Fieldset = styled.fieldset`
        border: none;
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 10px;
    `

    const breakpoints = [576, 768, 992, 1430];

    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}px)`
    )

    const InputWrapper = styled.div`
        width: 95%;
        display: flex;
        flex-direction: column;
        position: relative;
        
        ${mq[0]} {
            width: 49%;
        }
        
        ${mq[2]} {
            width: 100%;
        }
        
        ${mq[3]} {
            width: auto;
        }
    `

    const InputSpan = styled.span`
        margin-left: 30px;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.4px;
        color: rgba(0, 0, 0, 0.6);
    `

    return (
        <ProfileSection>
            <form onSubmit={handleSubmit}>
                <FormHeader title='Basic Profile' info='The information can be edited from your profile page'/>
                <Hr/>
                <Fieldset>
                    <InputWrapper>
                        <BasicProfileFormInput ref={firstNameRef} id='firstName' name='firstName' type='text'
                                               placeholder='First Name' isRequired={true} onChange={handleChange}/>
                        <InputSpan>Please specify the first name</InputSpan>
                    </InputWrapper>
                    <InputWrapper>
                        <BasicProfileFormInput ref={lastNameRef} id='lastName' name='lastName' type='text'
                                               placeholder='Last Name' isRequired={true} onChange={handleChange}/>
                        <InputSpan>Assistive text</InputSpan>
                    </InputWrapper>
                    <InputWrapper>
                        <BasicProfileFormInput ref={emailRef} id='email' name='email' type='email' placeholder='Email'
                                               isRequired={true} onChange={handleChange} onBlur={handleEmailBlur}/>
                        <InputSpan ref={emailSpanRef}>{''}</InputSpan>
                    </InputWrapper>
                    <InputWrapper>
                        <PhoneInput id='phoneNumber' name='phoneNumber' placeholder='Phone Number'/>
                    </InputWrapper>
                    <InputWrapper>
                        <BasicProfileFormInput id='city' name='city' type='text' placeholder='City'/>
                    </InputWrapper>
                    <InputWrapper>
                        <BasicProfileFormInput id='country' name='country' type='text' placeholder='Country'/>
                    </InputWrapper>
                </Fieldset>
                <Hr/>
                <Footer>
                    <FormButton ref={buttonRef} buttonText='SAVE SETTINGS' isDisabled={true}/>
                    <SubmitMessage ref={submitMessageRef}>{''}</SubmitMessage>
                </Footer>
            </form>
        </ProfileSection>
    )

}

export default BasicProfileForm