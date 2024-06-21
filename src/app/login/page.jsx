"use client"
import { useState } from 'react';
import styles from './login.module.css'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await fetch('../api/auth', {
                method: 'POST', 
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({username , password}) })
        } catch (error){
            console.error(error)
        }

        setUsername('');
        setPassword('');
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h1 className={styles.headline}>Авторизация</h1>
                <input className={styles.input} type="email" placeholder="Email" value={username} onChange={(event) => {
                    setUsername(event.target.value);
                }}/>
                <input className={styles.input} type="password" placeholder="Passowrd" value={password} onChange={(event) => {
                    setPassword(event.target.value);
                }}/>
                <button type='submit' className={styles.button}>Log In</button>
            </form>
        </div>
    );
}