import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase-config'
import { useState, useHistory } from 'react'

const c = {
    pageContainer: 'py-6 flex items-center justify-center',
    container: 'flex flex-col border border-gray-500 rounded-md p-6',
    header: 'mx-auto py-3 text-xl',
    formContainer: 'space-y-3',
    fieldContainer: 'flex flex-col',
    field: 'border border-gray-700 rounded-sm py-2 px-1',
    button: 'block bg-yellow-500 text-black hover:bg-yellow-600 py-2',
}

function Login() {
    // const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            // logged in
            // history.push('/');
        }).catch((err) => alert(err.message));
    }

    return (
        <div className={c.pageContainer}>
            <div className={c.container}>
                <div className={c.header}>
                    <Link to="/">
                        Login
                    </Link>
                </div>

                <form className={c.formContainer}>
                    <div className={c.fieldContainer}>
                        <label>Email</label>
                        <input value={email} onChange={event => setEmail(event.target.value)} className={c.field} />
                    </div>
                    <div className={c.fieldContainer}>
                        <label>Password</label>
                        <input value={password} onChange={event => setPassword(event.target.value)} type="password" className={c.field} />
                    </div>
                    <div className={c.fieldContainer}>
                        <button onClick={login} className={c.button}>Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
