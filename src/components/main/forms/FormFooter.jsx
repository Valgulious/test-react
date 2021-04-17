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

export default FormFooter