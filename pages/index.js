import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const buttonInstalledClickEvent =()=>{
    console.log("clicked buttonInstalledClickEvent!")
  }
  const buttonDroppedClickEvent =()=>{
    console.log("clicked buttonDroppedClickEvent!")
  }
  return (
    <div >
      <Head>
        <meta
          name="description"
          content="A PWA boilerplate/reference application in React"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div>
    <div style={{textAlign:'center',margin:'10px'}}>
      <h1 >MedTec</h1>
      <button className='button' onClick={buttonInstalledClickEvent}>Yük Alındı</button>
      <button className='button' onClick={buttonDroppedClickEvent}>Yük Bırakıldı</button>
      </div>
  </div>

      
    </div>
  );
}
