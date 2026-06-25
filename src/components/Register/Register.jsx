import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router";


const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [success, setSuccess] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(email, password, terms);

        setSuccess(false);
        setErrorMessage('');

        if (!terms) {
            setErrorMessage("Please accept terms & conditions");
            return;
        }

        const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (passwordRegExp.test(password) === false) {
            setErrorMessage("Password Must have 8 Characters, one small letter, one capital letter, one number & one special character");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result);
                setSuccess(true)
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage(error.message);
            })
    }


    return (
        <div className="border p-4 mt-12 flex justify-center mx-auto">
            <div>
                {/* <h2 className="text-2xl">this is register</h2> */}
                <form className="space-y-4" onSubmit={handleRegister}>

                    {/* email submit */}
                    <div className="join">
                        <div>
                            <label className="input validator join-item">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" name="email" placeholder="mail@site.com" required />
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div>
                        </div>
                        {/* <button className="btn btn-neutral join-item">Register</button> */}
                    </div> <br />

                    {/* password submit */}
                    <div className="join">
                        <div>
                            <label className="input validator join-item">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <div className="relative">
                                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" required />
                                    <button onClick={() => setShowPassword(!showPassword)} className="btm btn-xs absolute right-1 top-1"><FaEye /></button>
                                </div>
                            </label>
                            <div><a href="" className="link link-hover">Forget Password</a></div>
                        </div>
                    </div><br />
                    <label className="label">
                        <input type="checkbox" name="terms" className="checkbox" />
                        Accept terms & condition
                    </label><br />
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </form>

                <p>Already have an account? Please <Link className="text-shadow-blue-600 underline" to="/login">Login</Link></p>

                {
                    errorMessage && <p className="text-red-500">{errorMessage}</p>
                }

                {
                    success && <p className="text-blue-300">User has created successfully</p>
                }
            </div>
        </div>
    );
};

export default Register;