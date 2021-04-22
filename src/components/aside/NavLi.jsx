import styled from "@emotion/styled";
import PropTypes from 'prop-types'

const NavLi = ({imgSrc, imgAlt, value}) => {

    const ListItem = styled.span`
        margin-left: 10px;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.05px;
        color: #66788A;
    `

    const Li = styled.li`
        list-style: none;
        padding: 10px 16px;
        margin: 0 0 10px 0;
        display: flex;
        align-items: center;
        
        &:hover {
            background: #F6F9FD;
            box-shadow: inset 3px 0 0 #1665D8;
            border-radius: 4px 0 0 4px;
            cursor: pointer;
        }
        
        &:focus {
            background: #F6F9FD;
            box-shadow: inset 3px 0 0 #1665D8;
            border-radius: 4px 0 0 4px;
            cursor: pointer;
        }
        
        &:hover span {
            color: #212529;
        }
    `

    const Icon = styled.img`
      width: 20px;
      height: 20px;
    `

    return (
        <Li>
            <Icon src={imgSrc} alt={imgAlt}/>
            <ListItem>{value}</ListItem>
        </Li>
    )
}

NavLi.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

export default NavLi;