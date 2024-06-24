"use client"
import { useState } from 'react';
import styles from './login.module.css'
import Link from "next/link";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await fetch('../api/auth', {
                method: 'POST', 
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({username , email , password}) })
        } catch (error){
            console.error(error)
        }

        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                    <h1 className={styles.headline}>Авторизация</h1>
                    <input className={styles.input} type="text" placeholder="Username" value={username} onChange={(event) => {
                        setUsername(event.target.value);
                    }}/>
                    <input className={styles.input} type="email" placeholder="Email" value={email} onChange={(event) => {
                        setEmail(event.target.value);
                    }}/>
                    <input className={styles.input} type="password" placeholder="Passowrd" value={password} onChange={(event) => {
                        setPassword(event.target.value);
                    }}/>
                    <button type='submit' className={styles.button}>Log In</button>
                </form>
            </div>
            <button className={styles.all_users}><Link href={"../userslist"}>Список пользователей</Link></button>
        </div>
    );
}