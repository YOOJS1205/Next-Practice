import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  console.log("server");
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
}

export default function Home({ time }) {
  return (
    <>
      <h1 className={styles.title}>
        {/* Welcome to <a href="https://nextjs.org">Next.js!</a> */}
        {time}
      </h1>
      <h1>
        <Link href="/csr">CSR로 이동!</Link>
      </h1>
      <h1>
        <Link href="/ssg">SSG로 이동!</Link>
      </h1>
      <h1>
        <Link href="/ssg">ISR로 이동!</Link>
      </h1>
    </>
  );
}
