import Image from "next/image";
import Link from "next/link";
import pool from '@/config/database.js'

export default function Home() {
  return (
    <Link href={"/login"}>Oleg</Link>
  );
}

const Fetch = async () => {
  try {

    const client = await pool.connect();
    console.log("Uraaaaaaa");
    const result = await client.query(`SELECT * FROM public.Users`);
    const data = result.rows;

    client.release();
    return data;

  } catch(err) {

    console.error("Error: ", err)
    throw err;

  }
}

Fetch().then(data => {console.log("Data:", data)}).catch(err => {console.log("Откисай", err)})
