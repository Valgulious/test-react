import PropTypes from 'prop-types'
import styled from "@emotion/styled";


const FormHeader = ({title, info}) => {

    const Header = styled.header`
        padding: 20px 20px;
        display: flex;
        align-items: center;
    `

    const Title = styled.h3`
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.05px;
        color: #3A3B3F;
    `

    const Info = styled.p`
        margin-left: 15px;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        color: #66788A;
    `

    return(
        <Header>
            <Title>{title}</Title>
            <Info>{info}</Info>
        </Header>
    )

}

FormHeader.propTypes = {
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
}

export default FormHeader