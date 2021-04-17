import PropTypes from 'prop-types'
import styled from "@emotion/styled";

const AnotherTab = ({title}) => {

    const Title = styled.h1`
        margin: 20px;
    `

    return (
        <Title>{title}</Title>
    )

}

AnotherTab.propTypes = {
    title: PropTypes.string.isRequired
}

export default AnotherTab