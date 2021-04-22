import styled from "@emotion/styled";
import ProfileSection from "../ProfileSection.jsx";
import NotificationsFormInput from "./NotificationsFormInput.jsx";
import FormHeader from "../FormHeader";
import Hr from '../../../../Hr.jsx'
import FormButton from "../FormButton.jsx";
import SubmitMessage from "../SubmitMessage.jsx";
import Footer from "../Footer.jsx";
import {useRef, useState} from "react";

const NotificationsForm = () => {

    const Fieldset = styled.fieldset`
        border: none;
        display: flex;
        flex-wrap: wrap;
    `

    const FieldsetSection = styled.section`
        margin: 20px;
        display: flex;
        flex-direction: column;
    `

    const FieldsetSectionTitle = styled.h5`
        color: #3A3B3F;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.05px;
    `

    let isCheckedCount = 0;

    const [formReload, setFormReload] = useState(true);

    const buttonRef = useRef(null);
    const submitMessageRef = useRef(null);

    const handleOnChange = (e) => {

        if (e.target.checked) {
            ++isCheckedCount;
        } else {
            --isCheckedCount;
        }

        buttonRef.current.disabled = !isCheckedCount;

    }

    const handleSubmit = e => {
        e.preventDefault();

        const formData = new FormData(e.target);

        let object = {
            notifications: [],
            messages: [],
        };

        formData.forEach((value, key) => {
            object[key].push(value);
        });

        const json = JSON.stringify(object);

        console.log(json)

        if(Math.round(Math.random())) {
            submitMessageRef.current.textContent = 'Saved';
            submitMessageRef.current.style.color = 'green';

            setFormReload(!formReload);

            setTimeout(() => {
                submitMessageRef.current.textContent = '';
            }, 5000);
        } else {
            submitMessageRef.current.textContent = 'Error. Try again';
            submitMessageRef.current.style.color = 'red';
        }
    }

    return(
        <ProfileSection>
            <form onSubmit={handleSubmit}>
                <FormHeader title='Notifications' info='Mange the notifications emailing'/>
                <Hr/>
                <Fieldset>
                    <FieldsetSection>
                        <FieldsetSectionTitle>Notifications</FieldsetSectionTitle>
                        <NotificationsFormInput text='Email' value='email' name='notifications' inputId='nEmail'
                                                onChange={handleOnChange}/>
                        <NotificationsFormInput text='Push Notifications' value='pushNotifications' name='notifications'
                                                inputId='nPushNotifications' subtext='For your mobile or tablet device'
                                                onChange={handleOnChange}/>
                        <NotificationsFormInput text='Text Messages' value='textMessages' name='notifications'
                                                inputId='nTextMessages' onChange={handleOnChange}/>
                        <NotificationsFormInput text='Phone Calls' value='phoneCalls' name='notifications'
                                                inputId='nPhoneCalls' onChange={handleOnChange}/>
                    </FieldsetSection>
                    <FieldsetSection>
                        <FieldsetSectionTitle>Messages</FieldsetSectionTitle>
                        <NotificationsFormInput text='Email' value='email' name='messages' inputId='mEmail'
                                                onChange={handleOnChange} key='nEmail'/>
                        <NotificationsFormInput text='Push Notifications' value='pushNotifications' name='messages'
                                                inputId='mPushNotifications' onChange={handleOnChange}/>
                        <NotificationsFormInput text='Text Messages' value='textMessages' name='messages'
                                                inputId='mTextMessages' onChange={handleOnChange}/>
                    </FieldsetSection>
                </Fieldset>
                <Hr/>
                <Footer>
                    <FormButton ref={buttonRef} buttonText='SAVE' isDisabled={!isCheckedCount}/>
                    <SubmitMessage ref={submitMessageRef}>{''}</SubmitMessage>
                </Footer>
            </form>
        </ProfileSection>
    )

}

export default NotificationsForm;