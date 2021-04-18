import PropTypes from 'prop-types'
import styled from "@emotion/styled";
import {forwardRef} from "react";

const FormButton = forwardRef(({buttonText, isDisabled}, ref) => {

    const Button = styled.input`
        padding: 10px 20px;
        outline: none;
        border: none;
        cursor: pointer;
        color: white;
        background: #1665D8;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        box-sizing: border-box;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 1.25px;
        text-transform: uppercase;
        
        transition: transform 100ms ease;
        
        &:not(:disabled):hover {
            transform: scale(1.05)
        }
        
        &:not(:disabled):focus {
            transform: scale(1.05)
        }
        
        &:disabled {
            color: #1665D8;
            background: rgba(98, 2, 238, 0.0001);
            border: 1px solid rgba(22, 101, 216, 0.1);
            box-shadow: none;
            cursor: default;
        }
        
        // &:disabled:hover {
        //     transform: none;
        // }
    `

    return(
        <Button ref={ref} type='submit' value={buttonText} disabled={isDisabled}/>
    )

})

FormButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool
}

export default FormButton;