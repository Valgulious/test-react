import styled from "@emotion/styled";
import ProfileSection from "../ProfileSection.jsx";
import SettingsFormInput from "./SettingsFormInput.jsx";
import FormHeader from "./FormHeader.jsx";
import FormFooter from "./FormFooter.jsx";
import Hr from '../../Hr.jsx'


const SettingsForm = () => {

    const Form = styled.form`
        // width: 50vw;
    `

    const InputsWrapper = styled.div`
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 10px;
    `

    return (
        <ProfileSection>
            <Form>
                <FormHeader title='Basic Profile' info='The information can be edited from your profile page'/>
                <Hr/>
                <InputsWrapper>
                    <SettingsFormInput type='text' placeholder='First Name' isRequired={true}/>
                    <SettingsFormInput type='text' placeholder='Last Name' isRequired={true}/>
                    <SettingsFormInput type='email' placeholder='Email' isRequired={true}/>
                    <SettingsFormInput type='tel' placeholder='Phone Number' isRequired={false}/>
                    <SettingsFormInput type='text' placeholder='City' isRequired={false}/>
                    <SettingsFormInput type='text' placeholder='Country' isRequired={false}/>
                </InputsWrapper>
                <Hr/>
                <FormFooter buttonText='SAVE SETTINGS' buttonIsDisabled={true}/>
            </Form>
        </ProfileSection>
    )

}

export default SettingsForm