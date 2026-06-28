import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";
import { Link } from "react-router";


const Login = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // reset
        setErrorMessage('');
        setSuccess(false);


        // login user
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess(true);
                e.target.reset();
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage(error.message);
            })

    }
    return (

        <div className="card bg-base-100 w-full mx-auto mt-12 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-4xl font-bold">Login now!</h1>
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" autoComplete="email" required />
                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" autoComplete="current-password" placeholder="Password" required />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>

                <p>New to this website? Please <Link to="/register" className="underline">Register</Link></p>
                {
                    errorMessage && <p className="text-red-400">{errorMessage}</p>
                }

                {
                    success && <p className="text-green-500">User logged in successfully</p>
                }

            </div>

        </div>

    );
};

export default Login;