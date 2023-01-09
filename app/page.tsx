import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Hello world</div>
      <Link href='/about'>
        <button>Navigate to About</button>
      </Link>
    </main>
  );
}
