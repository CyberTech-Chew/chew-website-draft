//Contact Me Page

"use client"
import styles from "./page.module.css";
import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';

//CTA
function ContactMe() {
    const form = useRef();
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);
    const [showErrorNotification, setShowErrorNotification] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm(
        'service_a4bdttj',                      //UserID
        'template_ntb35qg',                     //Template ID
        form.current, {
            publicKey: 'NMMWO-4dlRYPSYikH',     //Public Key
      })
      .then(
        () => {
          console.log('It was rendered fine,Message Sent!')
          setShowSuccessNotification(true);
          setTimeout(() => setShowSuccessNotification(false), 3000);
          e.target.reset();                     //Clear the form after submitting
        },
        (error) => {
          console.log('FAILED...', error.text);
          setShowErrorNotification(true);
          setTimeout(() => setShowErrorNotification(false), 3000)
        },
      );
  };
    return (
        <div>
            <h1 className={styles.header}><strong>Let&quot;s talk</strong></h1>

            {/* In Built Form */}
            <div className={styles.formBox}>
                <form ref={form} onSubmit={sendEmail}>
                    <div className={styles.details}>

                        {/* First Name */}
                        <label>First name*:</label>
                        <input type="text" name="user_fname" required/><br />

                        {/* Last Name */}
                        <label>Last name*:</label>
                        <input type="text" name="user_lname" required/> <br />

                        {/* Email */}
                        <label>Your email*:</label>
                        <input type="email" name="user_email" required/><br />

                        {/* Subject */}
                        <label>Subject:</label>
                        <input type="text" name="user_subject" /> <br />

                        {/* Message */}
                        <label>Message*:</label>
                        <textarea name="message" required/><br />
                    </div>

                    {/* Checkbox */}
                    <div>
                        <input type="checkbox" required/>
                        <label className={styles.checkboxLabel}>I understand Jun Wei will contact me via email</label>
                    </div>

                    <input type="submit" value="Send" /> <br />
                </form>
            </div>
            {/* Success Notification */}
            {showSuccessNotification && (
                <div className={`${styles.notification} ${styles.success}`}>Form submitted successfully!</div>
            )}

            {/* Error Notification */}
            {showErrorNotification && (
                <div className={`${styles.notification} ${styles.error}`}>Failed to send message. Please try again.</div>
            )}



            {/* Socials Medias Links */}
            <div className={styles.socialsBox}>

                {/* LinkedIn */}
                <div className={styles.linkedIn}>
                    <div>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <a href="https://www.linkedin.com/in/chew-jun-wei-1781ab267/" className={`${styles.fa} ${styles.faLinkedin}`}><i className="fa fa-linkedin"></i></a>
                    </div>
                    <div className={styles.linkedInDetails}>
                        <p>Connect my LinkedIn!<br/>View my profile.</p>
                        <a href="https://www.linkedin.com/in/chew-jun-wei-1781ab267/">Connect</a>
                    </div>
                </div>

                {/* Instagram */}
                <div className={styles.instagram}>
                    <div>
                        <a href="https://www.instagram.com/jun_wei_7/" className={`${styles.fa} ${styles.faInstagram}`}><i className="fa fa-instagram"></i></a>
                    </div>
                    <div className={styles.instagramDetails}>
                        <p>Follow my Instagram!<br />View my personal life.</p>
                        <a href="https://www.instagram.com/jun_wei_7/">Follow</a>
                    </div>
                </div>
                {/* Can add more socails next time */}
            </div>

        </div>
    );
}




export default function Contact() {
    return (
        <div className={styles.contact}>
            <ContactMe />
        </div>
    );
}
