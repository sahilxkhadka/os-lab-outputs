import { useEffect, useState } from "react"
import LabOutputs from "./LabOutputs"

function Login() {
    const [codeValue, setCodeValue] = useState("")
    const [name, setName] = useState("")
    const [symbolNum, setSymbolNum] = useState("")
    const [loginSuccess, setLoginSuccess] = useState(false)
    const [error, setError] = useState(false)
    const handleButtonClick = () => {
        if (codeValue === "6969") {
            setLoginSuccess(true)
            setError(false)
            localStorage.setItem("verified", "true")
            localStorage.setItem("name", name)
            localStorage.setItem("symbol", symbolNum)
        }
        else {
            setError(true)
        }
    }
    const handleInputChange = (e) => {
        setCodeValue(e.target.value)
        if (e.target.value === "6969") {
            setError(false)
        }
    }
    useEffect(() => {
        const isVerified = localStorage.getItem("verified")
        if (isVerified === "true") {
            setLoginSuccess(true)
        }
    }, [])
    return (
        <>
            {
                loginSuccess ?
                    <LabOutputs loginSuccess = {setLoginSuccess} />
                    :
                    <div className="login-container">
                        <div className="profile">
                            OS
                        </div>
                        <h2>Welcome to Os Lab</h2>
                        <h2>Continue with the Verification Code</h2>
                        <input 
                            type="text" 
                            placeholder="Enter your name"    
                            value={name}
                            onChange = { (e) => setName(e.target.value) }
                        />
                        <input
                            type="text"
                            inputMode="numeric"

                            onChange={ (e) => setSymbolNum(e.target.value) }
                            value={symbolNum}
                            placeholder="Enter your symbol number"
                        />
                        <input
                            type="text"
                            inputMode="numeric"

                            onChange={handleInputChange}
                            value={codeValue}
                            placeholder="Enter the verification code"
                        />
                        {error && <p className="error-msg">Enter Valid Verification code</p>}
                        <button onClick={handleButtonClick} className="verify-btn">Verify</button>
                    </div>

            }
        </>
    )
}

export default Login