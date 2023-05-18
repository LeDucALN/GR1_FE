import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Login.scss';

function Login(){
    const Login = () => {
        console.log('Login');
    }

    const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }


    const [username, setUsername] = useState<string>('');

   
    return(
        <React.Fragment>
            <div className="login__page">
                <div className="login__container">
                    <div className="login__content">
                        Login
                    </div>
                    <div className="login__field">
                        <input type="text" placeholder="Username" value={username} onChange={changeUsername}/>
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="options">
                        <div className="forgot__password">
                            Forgot password?
                            <Link to="/forgot-password">Click here</Link>
                        </div>
                        <div className="register__user">
                            New user?
                            <Link to="/register">Register here</Link>
                        </div>
                    </div>
                    <div className="login__button">
                        <button onClick={Login}>Login</button>
                    </div>
                    <div className="login__social">
                        <div className="login__social__text">
                            Or login with
                        </div>
                        <div className="login__social__icons">
                            <div className="login__social__icon">
                                <FacebookIcon />
                                <GoogleIcon />
                                <TwitterIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Login;