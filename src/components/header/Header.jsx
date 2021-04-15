import styled from "@emotion/styled";

const Header = styled.header`
    padding: 10px;
    color: white;
    background-color: #3f51b5;
    display: flex;
    justify-content: space-between;
    align-items: center;
`


// const Header = () => {
//     return (
//         <header>
//             <section id='logo'>
//                 <img src={logo} alt="logo"/>
//                 <h3>Devias Kit</h3>
//                 <section id='sect'>
//                     <span id='free'>FREE</span>
//                     <span id='text'>See our PRO version for more design components & coded in React follow this link: https://devias.io/products/devias-kit-pro</span>
//                 </section>
//             </section>
//             <section id='right'>
//                 <img src={bell} alt="notifications"/>
//                 <img src={logout} alt="logout"/>
//             </section>
//         </header>
//     );
// }

export default Header