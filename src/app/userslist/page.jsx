import prisma from "../../lib/prisma"
import styles from './userslist.module.css'
import Image from 'next/image'
import userIcon from '../images/user.svg'
import trashIcon from '../images/trash.svg'

export default async function UsersList() {

  let allUsers = await prisma.user.findMany()

  return (
    <div className={styles.container}>
        {allUsers.map((user) => (
          <div className={styles.user_card} key={user.id}>
            <Image src={userIcon} width={41} height={41} alt="Picture of the user"></Image>
            <span className={styles.data_field}>
              <p className={styles.p1}>{user.username}</p>
              <p className={styles.p}>{user.email}</p>
            </span>
            <button className={styles.button}><Image src={trashIcon} width={25} height={25} alt="Delete button"></Image></button>
          </div>
        ))}
    </div>
  );
}