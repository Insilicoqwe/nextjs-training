import styles from './login.module.css'

export default function Login() {
    return (
        <div className={styles.container}>
            <form>
                <h1 className={styles.headline}>Авторизация</h1>
                <input className={styles.input} type="email" placeholder="Email"/>
                <input className={styles.input} type="password" placeholder="Passowrd" />
                <button className={styles.button}>Log In</button>
            </form>
        </div>
    );
  }