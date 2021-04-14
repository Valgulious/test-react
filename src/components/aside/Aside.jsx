import '../../css/Aside.css'
import avatar from '../../img/avatar.png'
import dashboard from '../../img/dashboard.svg'
import users from '../../img/users.svg'
import products from '../../img/products.svg'
import authentication from '../../img/authentication.svg'
import typography from '../../img/typography.svg'
import icons_and_images from '../../img/icons_and_images.svg'
import support from '../../img/support.svg'

const Aside = () => {
    return (
        <aside>
            <img src={avatar} alt='avatar'/>
            <h3 className='name'>Roman Kuterov</h3>
            <p className='info'>Brain Director</p>
            <hr/>
            <nav>
                <ul id='aside-menu'>
                    <li className='menu-item'>
                        <img src={dashboard} alt='dashboard'/>
                        <span className='list-item'>Dashboard</span>
                    </li>
                    <li className='menu-item'>
                        <img src={users} alt='users'/>
                        <span className='list-item'>Users</span>
                    </li>
                    <li className='menu-item'>
                        <img src={products} alt='products'/>
                        <span className='list-item'>Products</span>
                    </li>
                    <li className='menu-item'>
                        <img src={authentication} alt='authentication'/>
                        <span className='list-item'>Authentication</span>
                    </li>
                    <li className='menu-item'>
                        <img src={typography} alt='typography'/>
                        <span className='list-item'>Typography</span>
                    </li>
                    <li className='menu-item'>
                        <img src={icons_and_images} alt='icons_and_images'/>
                        <span className='list-item'>Icons & Images</span>
                    </li>
                </ul>
                <hr/>
                <span>Support</span>
                <article className='menu-item'>
                    <img src={support} alt='support'/>
                    <span className='list-item'>Support</span>
                </article>
            </nav>
        </aside>
    )
}

export default Aside