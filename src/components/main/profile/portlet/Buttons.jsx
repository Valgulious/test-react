import styled from "@emotion/styled";

const Buttons = () => {

    const Wrapper = styled.div`
        display: flex;
        justify-content: space-around;
        padding: 20px 10px;
    `

    const Button = styled.button`
    
        &:hover {
            transform: scale(1.05)
        }
    
        padding: 0;
        border: none;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 1.25px;
        text-transform: uppercase;
        cursor: pointer;
        background-color: white;
        color: ${props => props.color}
    `

    return (
        <Wrapper>
            <Button color='#1665D8'>UPLOAD PICTURE</Button>
            <Button color='#425A70'>REMOVE PICTURE</Button>
        </Wrapper>
    )
}

export default Buttons