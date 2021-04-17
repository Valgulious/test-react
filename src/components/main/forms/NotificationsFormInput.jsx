import PropTypes from 'prop-types'
import styled from "@emotion/styled";
import check from '../../../img/check.svg'

const NotificationsFormInput = ({inputId, name, text, value}) => {

    const Input = styled.input`
        position: absolute;
        z-index: -1;
        opacity: 0;
    `

    const Label = styled.label`
        display: inline-flex;
        align-items: center;
        user-select: none;
        margin: 20px 0 0 0;
        
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.15px;
        color: rgba(0, 0, 0, 0.6);
        
        & > span::before {
            content: '';
            display: inline-block;
            width: 1em;
            height: 1em;
            flex-shrink: 0;
            flex-grow: 0;
            border: 2px solid #425A70;
            border-radius: 0.25em;
            margin-right: 0.5em;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 50% 50%; 
        }
        
        & > input:not(:disabled):not(:checked) + span:hover::before {
            border-color: #b3d7ff;
        }
        
        & > input:not(:disabled):active + span::before {
            background-color: #b3d7ff;
            border-color: #b3d7ff;
        }
        
        & > input:focus + span::before {
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }
        
        & > input:focus:not(:checked) + span::before {
            border-color: #80bdff;
        }
        
        & > input:checked + span::before {
            border-color: #2c65d8;
            background-color: white;
            background-image: url(${check});
            background-size: 100%;
        }
    `

    return(
        <Label htmlFor={inputId}>
            <Input id={inputId} type='checkbox' name={name} value={value.toLowerCase()}/>
            <span>{text}</span>
        </Label>
    )
}

NotificationsFormInput.propTypes = {
    inputId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default NotificationsFormInput;