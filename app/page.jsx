// import Image from 'next/image'
//Home Page

import Image from 'next/image';
import Head from 'next/head';
import styles from './page.module.css';

function Leftside() {
  return (
    <div className={styles.leftSideBox}>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <div className={styles.info}>
        <Image 
          src="/self.png" 
          alt="Picture" 
          className={styles.picture} 
          width={150} 
          height={150} 
        />
        <h2>Chew Jun Wei</h2>
        <p>Cybersecurity & Digital Forensic <br />Student At Ngee Ann Polytechnic</p>
      </div>
      <div className={styles.socials}>
        <a href="https://www.linkedin.com/in/chew-jun-wei-1781ab267/" className={`${styles.fa} ${styles.faLinkedin}`}><i className="fa fa-linkedin"></i></a>
        <a href="https://www.instagram.com/jun_wei_7/" className={`${styles.fa} ${styles.faInstagram}`}><i className="fa fa-instagram"></i></a>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className={styles.rightSideBox}>
      <p className={styles.intro}>Hello!</p>
      <p className={styles.brief}>Here’s who I am & what I do</p>
      <a href="/About" className={styles.button1}><span>ABOUT ME</span></a>
      <a href="/Resume" className={styles.button2}><span>RESUME</span></a>
      <p>Welcome to my personal website. I am glad you are here! Hop onto my website to know me deeper.</p>
      <p>
        This entire website is <strong>coded</strong> by me!
        <br />
        Please do <strong>NOT</strong> Pen-Test or deface this website...
        <br />
        For the best experience, please use a laptop and maximise the screen.
        <br />
        <br />
        <a href="https://forms.gle/qNwJDsFEEAR6F3n68">Report Vulnerability</a>
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Leftside />
      <RightSide />
    </div>
  );
}
