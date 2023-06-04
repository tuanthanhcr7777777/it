import { useState, useEffect, useContext } from "react"
import { loginApi } from "../services/UserService"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const Login = () => {
    const navigate = useNavigate();
    const { loginContext } = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isShowPassword, setIsShowPassword] = useState(false)

    const [loadingApi, setLoadingApi] = useState(false)

    // useEffect(() => {
    //     let token = localStorage.getItem('token');
    //     if (token) {
    //         navigate('/')
    //     }
    // }, [])
    
    const handleLogin = async () => {
        if(!email || !password) {
            toast.error('Email or Password is required!')
            return;
        }
        setLoadingApi(true)
        let res = await loginApi(email.trim(), password)
        if (res && res.token) {
            loginContext(email, res.token)
            navigate('/');
        }else {
            // Error
            if(res && res.status === 400) {
                toast.error(res.data.error)
                alert('The account or password is incorrect, please check again !')
            }
        }
        setLoadingApi(false)
    }

    const handlePressEnter = (event) => {
        if (event && event.key === 'Enter') {
            handleLogin()
        }
    }

    return (
        <>
            <div className="login-container col-12 col-sm-4">
                <div className="title">Login</div>
                <div className="text">Email or username</div>
                <input 
                    type="text"
                    placeholder="Email or username..."
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <div className="input-2">
                    <input 
                        type={isShowPassword === true ? 'text' :"password"}
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        onKeyDown={(event) => handlePressEnter(event)}
                    />
                    <i className={isShowPassword === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
                        onClick={() => setIsShowPassword(!isShowPassword)}
                    ></i>
                </div>
                <button 
                    className={email && password ? 'active' : ''}
                    disabled={email && password ? false : true}
                    onClick={() => handleLogin()}
                >
                    {loadingApi && <i className="fa-solid fa-sync fa-spin"></i>}
                    Login
                </button>
                <div className="back">
                    Go back
                </div>
            </div>
        </>
    )
}

export default Login