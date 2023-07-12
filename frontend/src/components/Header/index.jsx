import './index.css'
// React router
import { Link } from 'react-router-dom'
// Assets
import Logo from '../../assets/argentBankLogo.png'

export default function Header(){
    return <div>
        <nav className="main-nav">
            <Link className="main-nav-logo" to='/'>
                <img
                className="main-nav-logo-image"
                src={Logo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to="/signin">
                <i className="fa fa-user-circle"></i>
                Sign In
                </Link>
            </div>
        </nav>
    </div>
}