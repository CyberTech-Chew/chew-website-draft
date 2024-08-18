// import Image from 'next/image'
//Home Page

import styles from './page.module.css'

function Leftside (){
  return (
    <div className={styles.leftSideBox}>

      <div className={styles.info}>
        <img src="/self.png" alt="Picture" className={styles.picture} />
        <h2>Chew Jun Wei</h2>
        <p>Cybersecurity & Digital forensic <br></br>Student At Ngee Ann Polytechnic</p>
      </div>

      {/* Links for scoials */}
      <div className={styles.socials}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <a href="https://www.linkedin.com/in/chew-jun-wei-1781ab267/" className={`${styles.fa} ${styles.faLinkedin}`}><i className="fa fa-linkedin"></i></a>
        <a href="https://www.instagram.com/jun_wei_7/" className={`${styles.fa} ${styles.faInstagram}`}><i className="fa fa-instagram"></i></a>
      </div>
    </div>
  );
}

function RightSide (){
  return (
    <div className={styles.rightSideBox}>
      <p className={styles.intro}>Hello!</p>
      <p className={styles.brief}>Here&quot;s who I am & what I do</p>
      <a href="/About" className={styles.button1}><span>ABOUT ME</span></a>
      <a href="/Resume" className={styles.button2}><span>RESUME</span></a>
      <p>Welcome to my personal website. I am glad you are here! Hop onto my website to know me deeper.</p>
      <p>
        This entire website is <strong>coded</strong> by me!
        <br></br>
        Please do <strong>NOT</strong> Pen-Test or deface this website...
        <br></br>
        For the best experience, please use a laptop and maximise the screen.
        <br></br>
        <br></br>
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
  )
}