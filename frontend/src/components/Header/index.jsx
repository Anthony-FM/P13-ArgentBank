import './index.css'
// React router
import { Link } from 'react-router-dom'
// Assets
import Logo from '../../assets/argentBankLogo.png'
// hook
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../../utils/selectors'
// action
import { toggleLogInLogOut, toggleLogOut } from '../../features/signIn'

export default function Header(){
    const log = useSelector(selectUser).logIn
    const dispatch = useDispatch
    const textOfLog = log ? "Log Out" : "Sign In"
    return <header>
        <nav className="main-nav">
            <Link className="main-nav-logo" to='/' onClick={() => dispatch(toggleLogOut())}>
                <img
                className="main-nav-logo-image"
                src={Logo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                
                    {
                        log ?
                        (
                            <Link className="main-nav-item" onClick={() => dispatch(toggleLogInLogOut)}>
                            <i className="fa fa-user-circle i-padding"></i>
                            {textOfLog}
                            </Link>
                        )
                        :
                        (
                            <Link className="main-nav-item" to='/signin' >
                            <i className="fa fa-user-circle i-padding"></i>
                            {textOfLog}
                            </Link>
                        )
                    } 
                
                
            </div>
        </nav>
    </header>
}