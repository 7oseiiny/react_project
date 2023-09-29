import { useContext, useState } from 'react';
import './Login.css'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { login } from '../../Services/user-auth';
import { AuthContext } from '../../Context/user-auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const { setIslogged, setUserData } = useContext(AuthContext);


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setUser({ ...user, email: e.target.value })
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setUser({ ...user, password: e.target.value })
    };
    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmailTouched(true);
        setPasswordTouched(true);

        if (!emailValid || !passwordValid) {
            toast.error('Email or password is incorrect', {
                position: "top-center"
            });
        } else {
         
            try {
                const res = await login(user)
                console.log(res.data.user);

                const userDatatoSave = res.data.user;
                // console.log(userDatatoSave.name);
                setUserData(userDatatoSave)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userData', JSON.stringify(userDatatoSave));
                setIslogged(true)
                navigate('/')
            } catch (e) {
                toast.error('Wrong Email or Password', {
                    position: "buttom-center"
                });
            }
        }

    };
    const emailValid = /\S+@\S+\.\S+/.test(email);
    const passwordValid = password.length >= 8;

    return (
        <>
        <div className="logo2">
    <img src="../assets/images/Amazon_logo.svg.png" alt=""/>
</div>
            <div className="container login-container">
                <div className="login-center-box p-5">
                    <h2 className="login-header">Sign in</h2>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email Address:
                            </label>
                            <input
                                type="email"
                                id="email"
                                className={`form-control ${(emailTouched && !email) || (emailTouched && !emailValid) ? 'is-invalid' : emailValid ? 'is-valid' : ''
                                    }`}
                                value={email}
                                onChange={handleEmailChange}
                                onBlur={() => setEmailTouched(true)}
                            // required
                            />
                            {(emailTouched && !email) && (
                                <div className="invalid-feedback">Please provide a valid email.</div>
                            )}
                            {(emailTouched && email && !emailValid) && (
                                <div className="invalid-feedback">Email must be valid.</div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password:
                            </label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className={`form-control ${(passwordTouched && !passwordValid) ? 'is-invalid' : passwordValid ? 'is-valid' : ''
                                        }`}
                                    value={password}
                                    onChange={handlePasswordChange}
                                    onBlur={() => setPasswordTouched(true)}

                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={toggleShowPassword}
                                >
                                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                </button>
                                {(passwordTouched && !passwordValid) && (
                                    <div className="invalid-feedback">Password must be at least 8 characters long.</div>
                                )}
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <button type="submit" className="btn btn-warning w-100  ">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="breck">
                <p>New to Amazon?</p>
            </div>
            <div className="btn">
                <button>Create your Amazon account</button>
            </div>
            <footer>
                <div className="links">
                    <a href="#">Conditions of Use</a>
                    <a href="#">Privacy Notice</a>
                    <a href="#">Help</a>
                </div>
                <p>&#169;1996–2023, Amazon.com, Inc. or its affiliates</p>
            </footer>
            <Toaster />



        </>
    );
};

export default Login;
