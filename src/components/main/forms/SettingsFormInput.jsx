import PropTypes from 'prop-types'
import styled from "@emotion/styled";
import {forwardRef} from "react";


const SettingsFormInput = forwardRef(({id, name, type, placeholder, isRequired, onChange, onBlur}, ref) => {

    const breakpoints = [576, 768, 992, 1430];

    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}px)`
    )

    const Input = styled.input`
        
        margin: 15px 5px 5px 20px;
        padding-left: 15px;
        height: 56px;
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
        
        &:focus + label {
            display: block;
        }
        
        &:required:focus ~ span {
            color: #1665D8;
        }  
        
         ${mq[2]} {
           width: 328px;
        }
         
         ${mq[2]} {
            width: 90%;
        }
        
        ${mq[3]} {
            width: 328px;
        }
              
    `

    const Label = styled.label`
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.4px;
        color: #1665D8;
        
        display: none;
        position: absolute;
        top: 8px;
        left: 30px;
        background-color: white;
    `

    return (
        <>
            <Input ref={ref} id={id} name={name} type={type} placeholder={placeholder} required={isRequired}
                   onChange={onChange} onBlur={onBlur}/>
            <Label htmlFor={id}>{placeholder}</Label>
        </>
    )
});

SettingsFormInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
}

export default SettingsFormInput