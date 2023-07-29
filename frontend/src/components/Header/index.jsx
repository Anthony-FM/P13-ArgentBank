import './index.css'
// React router
import { Link } from 'react-router-dom'
// Assets
import Logo from '../../assets/argentBankLogo.png'
// hook
import { useSelector, useDispatch } from 'react-redux'
// selector
import { selectUser } from '../../utils/selectors'
// action
import { toggleLogInLogOut, toggleLogOut } from '../../features/signIn'
// assest
import USER from '../../assets/user.png'

export default function Header(){
    const log = useSelector(selectUser).logIn
    const dispatch = useDispatch
    const textOfLog = log ? "Log Out" : "Sign In"
    const firstname = useSelector(selectUser).firstname


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
                            <div className='logContainer'>
                                <div className='userContainer'>
                                    <img src={USER} alt='user'/>
                                    <h2>{firstname}</h2>
                                </div>

                                <Link className="main-nav-item" onClick={() => dispatch(toggleLogInLogOut)}>
                                <i className="fa fa-user-circle i-padding"></i>
                                {textOfLog}
                                </Link>
                            </div>
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