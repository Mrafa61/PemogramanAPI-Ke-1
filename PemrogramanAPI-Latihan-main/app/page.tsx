import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>TESTING</h1>
      <p>
        <Link href="/posts">POSTING PAGE</Link>
      </p>
      <p>
        <Link href="/albums">ALBUM PAGE</Link>
      </p>
    </>
  );
}