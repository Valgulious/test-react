import menu from '../../img/menu.svg'
import styled from "@emotion/styled";
import {useRef} from "react";
import Avatar from "./Avatar.jsx";
import Nav from "./Nav";

const AsideWrapper = () => {

    const Aside = styled.aside`
        min-height: calc(100vh - 64px);
        box-shadow: 1px 0 3px rgba(0, 0, 0, 0.25);
        z-index: 1;
        
        @media (max-width: 575px) {
            width: 100%;
            position: absolute;
            background: white;
            top: 0;
            bottom: 0;
            left: -600px;
            transition: left 250ms ease;
        }
        
        @media (min-width: 576px) {
            width: 30%;
        }
        
        @media (min-width: 992px) {
            width: 20%;
        }
      
        @media (min-width: 1400px) {
            width: 15%;
        }
    `

    const MenuIcon = styled.img`
        display: none;
        position: absolute;
        top: -40px;
        width: 20px;
        height: 20px;
        padding: 5px;
        margin: 0 5px;
        border-radius: 2px;
        cursor: pointer;
        &:hover {
            background-color: #3c4a97
        }

      @media (max-width: 575px) {
        display: block;
      }
    `

    const asideRef = useRef(null);

    let isClick = false;

    const handleMenuClick = () => {
        if (isClick) {
            asideRef.current.style.left = '-600px';
            isClick = !isClick;
        } else {
            asideRef.current.style.left = '0';
            isClick = !isClick;
        }
    }

    return (
        <>
            <MenuIcon src={menu} alt='menu' onClick={handleMenuClick}/>
            <Aside ref={asideRef}>
                <Avatar/>
                <Nav/>
            </Aside>
        </>
    )
}

export default AsideWrapper