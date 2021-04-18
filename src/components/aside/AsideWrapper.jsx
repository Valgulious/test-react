import avatar from '../../img/avatar.jpg'
import dashboard from '../../img/dashboard.svg'
import users from '../../img/users.svg'
import products from '../../img/products.svg'
import authentication from '../../img/authentication.svg'
import typography from '../../img/typography.svg'
import icons_and_images from '../../img/icons_and_images.svg'
import support from '../../img/support.svg'
import menu from '../../img/menu.svg'
import styled from "@emotion/styled";
import {useRef} from "react";

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

    const AvatarWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const AvatarImg = styled.img`
        border-radius: 50%;
        width: 100px;
        height: 100px;
        margin: 20px 0 10px 0;
    `

    const Username = styled.p`
        margin: 5px;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        letter-spacing: -0.05px;
        color: #3A3B3F;
    `

    const UserPosition = styled.p`
        margin-bottom: 20px;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        color: #9EA0A5;
    `

    const AsideHR = styled.hr`
        background-color: #E4E7EB;
        border: 0 none;
        height: 1px;
        width: 100%;
        clear:both;
        margin: auto;
    `

    const Support = styled.p`
        margin: 24px 16px 10px 16px;
        font-size: 13px;
        line-height: 15px;
        color: rgba(0, 0, 0, 0.328974);
    `

    const AsideNav = styled.nav`
        padding: 10px;
    `

    const AsideListItem = styled.span`
        margin-left: 10px;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.05px;
        color: #66788A;
    `

    const AsideLI = styled.li`
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
                <AvatarWrapper>
                    <div>
                        <AvatarImg src={avatar} alt='avatar' />
                    </div>
                    <div>
                        <Username>Roman Kuterov</Username>
                        <UserPosition>Brain Director</UserPosition>
                    </div>
                </AvatarWrapper>
                <AsideNav>
                    <AsideHR/>
                    <ul>
                        <AsideLI>
                            <img id='dash' src={dashboard} alt='dashboard'/>
                            <AsideListItem>Dashboard</AsideListItem>
                        </AsideLI>
                        <AsideLI>
                            <img src={users} alt='users'/>
                            <AsideListItem>Users</AsideListItem>
                        </AsideLI>
                        <AsideLI>
                            <img src={products} alt='products'/>
                            <AsideListItem>Products</AsideListItem>
                        </AsideLI>
                        <AsideLI>
                            <img src={authentication} alt='authentication'/>
                            <AsideListItem>Authentication</AsideListItem>
                        </AsideLI>
                        <AsideLI>
                            <img src={typography} alt='typography'/>
                            <AsideListItem>Typography</AsideListItem>
                        </AsideLI>
                        <AsideLI>
                            <img src={icons_and_images} alt='icons_and_images'/>
                            <AsideListItem>Icons & Images</AsideListItem>
                        </AsideLI>
                    </ul>
                    <AsideHR/>
                    <div>
                        <Support>Support</Support>
                        <AsideLI>
                            <img src={support} alt='support'/>
                            <AsideListItem>Support</AsideListItem>
                        </AsideLI>
                    </div>
                </AsideNav>
            </Aside>
        </>
    )
}

export default AsideWrapper