import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    // console.log(username, password);

    // validation 
    const [usernameError, setusernameError] = useState('')
    const [passwordError, setpasswordError] = useState('')
    const [bothError, setBothError] = useState();
    // console.log(usernameError, passwordError, "passwordError");

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("admin")
        if (token) {
            toast.error("user already Login")
            navigate("/home")
        } else {
            navigate("/login")
        }
    }, [])

    const isValidation = () => {
        setBothError('');
        let isvalid = true;
        // let err = "Please Enter ";

        if (username.trim() === '') {
            setusernameError("Please Enter username")
            isvalid = false;

            // err += " username"
        } else {
            setusernameError('')
        }
        if (!password || password.trim() === '') {
            setpasswordError("Please Enter password")
            isvalid = false;

            // err += " password"
        } else {
            setpasswordError('');
        }

        // if (!isvalid) {
        //     // document.getElementById("valid").innerHTML = err
        //     // alert(err);

        // }


        return isvalid

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValidation()) {
            const userData = {
                username: username,
                password: password
            }

            fetch("http://localhost:8000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData)
            }).then((res) => {
                return res.json()
            }).then((resp) => {
                // console.log(resp, "response");
                // localStorage.setItem("admin", resp.accessToken);
                // alert("Login Success");
                // navigate("/home")

                if (Object.keys(resp).length === 0) {
                    // alert("Login failed, invalid credentials")
                    setBothError("Login failed, invalid credentials");
                    toast.error("Login failed, invalid credentials")
                } else {
                    if (resp.username === username) {
                        // alert("Login Success");
                        toast.success("Login Success");

                        localStorage.setItem("admin", resp.accessToken);
                        // setBothError('')
                        navigate("/home")
                    } else {
                        toast.error("Invalid Username and Password")

                        setBothError("Invalid Username and Password")
                        // document.getElementById("valid").innerHTML = "Invalid Username and Password"
                        // alert("Invalid Username and Password")


                    }
                }

            }).catch((err) => {
                console.log(err.message, "Login Error");
            })

        }

    }
    return (
        <>
            {/* Login Form */}
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card shadow">
                            <div className="card-title text-center border-bottom">
                                <h2 className="p-3">Login</h2>
                            </div>
                            <div className="card-body">
                                {/* <h3 id='valid' className=' mt-2' style={{ color: "red" }}></h3> */}
                                <h3 id='valid' className=' mt-2' style={{ color: "red" }}>{bothError}</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="username" className="form-label">
                                            Username/Email
                                        </label>
                                        <input
                                            type="text"
                                            onChange={e => { setusername(e.target.value) }}
                                            className="form-control" id="username" />
                                        {/* <p style={{ color: "red" }}>{usernameError}</p> */}
                                        {usernameError === '' ? null :
                                            <p style={{ color: "red" }}>{usernameError}</p>}

                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            onChange={e => { setpassword(e.target.value) }}
                                            className="form-control" id="password" />
                                        <p style={{ color: "red" }}>{passwordError}</p>
                                    </div>
                                    {/* <div className="mb-4">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="remember"
                                        />
                                        <label htmlFor="remember" className="form-label">
                                            Remember Me
                                        </label>
                                    </div> */}
                                    <div className="d-grid">
                                        <button type="submit" className="btn text-light main-bg">
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login