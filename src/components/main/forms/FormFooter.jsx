import PropTypes from 'prop-types'
import styled from "@emotion/styled";
import FormButton from "./FormButton.jsx";


const FormFooter = ({buttonText, buttonIsDisabled}) => {

    const Footer = styled.footer`
        padding: 20px;
    `

    return(
        <Footer>
            <FormButton buttonText={buttonText} isDisabled={buttonIsDisabled}/>
        </Footer>
    )

}

FormFooter.propTypes = {
    buttonText: PropTypes.string.isRequired,
    buttonIsDisabled: PropTypes.bool
}

export default FormFooter