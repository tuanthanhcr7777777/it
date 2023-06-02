import { useState } from "react"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <i className="fa-solid fa-eye-slash"></i>
                </div>
                <button className={email && password ? 'active' : ''}>Login</button>
                <div className="back">
                    Go back
                </div>
            </div>
        </>
    )
}

export default Login