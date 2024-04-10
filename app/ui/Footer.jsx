import styles from "./Footer.module.css";

export default function Footer() {
   
    return (
        <footer className={styles.footer}>

            <div className={styles.left}>
                <p className={styles.copyright}>© 2024 by Chew Jun Wei</p>
            </div>



            <div className={styles.right}>

                <div className={styles.feedback}>
                    <h4>Feedback</h4>
                    <a href="https://forms.gle/qNwJDsFEEAR6F3n68" className={styles.form}>Form</a>
                </div>

                <div className={styles.write}>
                    <h4>Write</h4>
                    <a href="mailto: S10244567@connect.np.edu.sg" className={styles.email}>S10244567@connect.np.edu.sg</a>
                </div>

                <div className={styles.follow}>
                    <h4>Follow</h4>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <a href="https://www.linkedin.com/in/chew-jun-wei-1781ab267/" className={`${styles.fa} ${styles.faLinkedin}`}><i className="fa fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/jun_wei_7/" className={`${styles.fa} ${styles.faInstagram}`}><i className="fa fa-instagram"></i></a>
                </div>

            </div>

        </footer>
    );
}