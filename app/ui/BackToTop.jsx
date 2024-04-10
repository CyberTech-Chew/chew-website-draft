"use client"
import React, { useState, useEffect } from 'react';
import styles from './BackToTop.module.css'; 

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show the button when scrolling down 300px from the top
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            {isVisible && (
                <button className={styles.backToTopBtn} onClick={scrollToTop}>
                    Back to Top
                </button>
            )}
        </div>
    );
};

export default BackToTopButton;
