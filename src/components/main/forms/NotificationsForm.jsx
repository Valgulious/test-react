import styled from "@emotion/styled";
import ProfileSection from "../ProfileSection.jsx";
import NotificationsFormInput from "./NotificationsFormInput.jsx";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter.jsx";
import Hr from '../../Hr.jsx'

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

    const FieldsetSectionTitle = styled.h3`
        color: #3A3B3F;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.05px;
    `

    return(
        <ProfileSection>
            <form>
                <FormHeader title='Notifications' info='Mange the notifications emailing'/>
                <Hr/>
                <Fieldset>
                    <FieldsetSection>
                        <FieldsetSectionTitle>Notifications</FieldsetSectionTitle>
                        <NotificationsFormInput text='Email' value='email' name='notifications' inputId='nEmail'/>
                        <NotificationsFormInput text='Push Notifications' value='pushNotifications' name='notifications'
                                                inputId='nPushNotifications'/>
                        <NotificationsFormInput text='Text Messages' value='textMessages' name='notifications'
                                                inputId='nTextMessages'/>
                        <NotificationsFormInput text='Phone Calls' value='phoneCalls' name='notifications'
                                                inputId='nPhoneCalls'/>
                    </FieldsetSection>
                    <FieldsetSection>
                        <FieldsetSectionTitle>Messages</FieldsetSectionTitle>
                        <NotificationsFormInput text='Email' value='email' name='messages' inputId='mEmail'/>
                        <NotificationsFormInput text='Push Notifications' value='pushNotifications' name='messages'
                                                inputId='mPushNotifications'/>
                        <NotificationsFormInput text='Text Messages' value='textMessages' name='messages'
                                                inputId='mTextMessages'/>
                    </FieldsetSection>
                </Fieldset>
                <Hr/>
                <FormFooter buttonText='SAVE' buttonIsDisabled={true}/>
            </form>
        </ProfileSection>
    )

}

export default NotificationsForm;