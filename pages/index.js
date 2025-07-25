import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>KK Hoard - Home</title>
      </Head>
      <main style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh", 
        backgroundColor: "black", 
        color: "gold", 
        fontSize: "2rem" 
      }}>
        Welcome to KK Hoard 🛍️
      </main>
    </>
  );
}
