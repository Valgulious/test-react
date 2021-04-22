import dashboard from "../../img/dashboard.svg";
import users from "../../img/users.svg";
import products from "../../img/products.svg";
import authentication from "../../img/authentication.svg";
import typography from "../../img/typography.svg";
import icons_and_images from "../../img/icons_and_images.svg";
import support from "../../img/support.svg";
import styled from "@emotion/styled";
import NavLi from "./NavLi.jsx";

const Nav = () => {

    const Hr = styled.hr`
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

    return (
        <AsideNav>
            <Hr/>
            <ul>
                <NavLi imgSrc={dashboard} imgAlt='dashboard' value='Dashboard'/>
                <NavLi imgSrc={users} imgAlt='users' value='Users'/>
                <NavLi imgSrc={products} imgAlt='products' value='Products'/>
                <NavLi imgSrc={authentication} imgAlt='authentication' value='Authentication'/>
                <NavLi imgSrc={typography} imgAlt='typography' value='Typography'/>
                <NavLi imgSrc={icons_and_images} imgAlt='icons_and_images' value='Icons & Images'/>
            </ul>
            <Hr/>
            <div>
                <Support>Support</Support>
                <ul>
                    <NavLi imgSrc={support} imgAlt='support' value='Support'/>
                </ul>
            </div>
        </AsideNav>
    )
}

export default Nav;