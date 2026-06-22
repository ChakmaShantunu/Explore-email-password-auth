

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        console.log("form submitted");
    }
    return (
        <div>
            <h2 className="text-2xl">this is register</h2>
            <form onSubmit={handleRegister}>

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
                            <input type="email" placeholder="mail@site.com" required />
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
                            <input type="password" placeholder="password" required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                    </div>
                    <button className="btn btn-neutral join-item">Join</button>
                </div>
            </form>
        </div>
    );
};

export default Register;