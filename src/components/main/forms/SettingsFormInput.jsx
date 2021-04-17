import PropTypes from 'prop-types'
import styled from "@emotion/styled";

const SettingsFormInput = ({type, placeholder, isRequired}) => {

    const Input = styled.input`
        
        margin: 15px 5px 5px 20px;
        padding-left: 15px;
        width: 20vw;
        height: 6vh;
        border: 1px solid rgba(0, 0, 0, 0.32);
        box-sizing: border-box;
        border-radius: 4px;
        
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.15px;
        color: rgba(0, 0, 0, 0.6);
        
        &:focus {
            outline: none !important;
            border: 2px solid #1665D8;
        }
        
        // &:focus + span::before {
        //     padding-button: 50px;
        //     font-weight: normal;
        //     font-size: 12px;
        //     line-height: 16px;
        //     letter-spacing: 0.4px;
        //     color: #1665D8;
        //     content: '${placeholder}';
        // }
        
        &:required + span::after {
            content: 'Please specify the ${placeholder}';
        }
        
        &:required:focus + span::after {
            color: #1665D8;
        }           
    `

    const Span = styled.span`
        margin-left: 30px;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.4px;
        color: rgba(0, 0, 0, 0.6);
    `

    const InputWrapper = styled.div`
        display: flex;
        flex-direction: column;
    `

    return(
        <InputWrapper>
            <Input type={type} placeholder={placeholder} required={isRequired}/>
            <Span/>
        </InputWrapper>
    )

};

SettingsFormInput.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    isRequired: PropTypes.bool
}

export default SettingsFormInput