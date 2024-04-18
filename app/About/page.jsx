//About Me page

'use client'
import { useState, useEffect } from "react";
import styles from "./page.module.css";



function Section1({ title, data }) {
    const [imageIndex, setImageIndex] = useState(0);
    const [showAchievements, setShowAchievements] = useState(false);        //Set achievements to none until there is

    const nextImage = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % data.images.length);
    };

    const prevImage = () => {
        setImageIndex((prevIndex) => (prevIndex - 1 + data.images.length) % data.images.length);
    };

    useEffect(() => {
        const timer = setInterval(nextImage, 5000);
        return () => clearInterval(timer);
    }, [
        nextImage
    ]);

    const toggleAchievements = () => {
        setShowAchievements(!showAchievements);
    };

    return (
        <div className={styles.box}>

            <div className={styles.leftBox}>
                <img src={data.images[imageIndex]} alt="Picture" className={styles.picture} />
                <div>
                    {/* Navigating picture */}
                    <button onClick={prevImage} className={styles.pictureLeftButton}>&lt;</button>
                    <button onClick={nextImage} className={styles.pictureRightButton}>&gt;</button>
                </div>
            </div>


            <div className={styles.rightBox}>
                <div className={styles.rightBoxContent}>
                    <div>
                        <h2>{data.title}</h2>
                        <p>Year started: {data.started}</p>
                        <p>{data.description}</p>
                        <p>{data.addDescription}</p>
                    </div>
                    {data.achievements.length > 0 && (  // Check if there are achievements to show the "Button"
                        <div>
                            <button onClick={toggleAchievements} className={styles.achievementButton}>View Achievements</button>
                            {showAchievements && (      // Render based on showAchievements state
                                <div>
                                    <h4>Achievements:</h4>
                                    <ul>
                                        {data.achievements.map((achievement, index) => (
                                            <li key={index}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}

// Fill with data
function Aboutme() {
    const [selectedSport, setSelectedSport] = useState("taekwondo");
    const [selectedComputing, setSelectedComputing] = useState("coding");
    const [selectedLeisure, setSelectedLeisure] = useState("drone");

    const sportsData = {
        taekwondo: {
            title: "Taekwondo",
            images: [
                "TKD/TKD1.jpg",
                "TKD/TKD2.jpg",
                "TKD/TKD3.jpg",
                "TKD/TKD4.jpg",
                "TKD/TKD5.jpg",
                "TKD/TKD6.jpg",
                "TKD/TKD7.jpg",
                "TKD/TKD8.jpg",
                "TKD/TKD9.jpg"
            ],
            started: "2013",
            description: "I embarked on my Taekwondo journey at the age of 7, igniting a passion that has only grown stronger over the years. As I celebrate my 11th year in the sport, I reflect on the countless lessons learned, challenges overcome, and the unwavering dedication that has propelled me forward in my Taekwondo journey.",
            addDescription: "In addition to my individual achievements, I am proud to be an active member of the Ngee Ann Taekwondo team since 2022. Being part of the team has not only provided me with invaluable opportunities for growth and development but has also instilled in me a sense of camaraderie and sportsmanship that extends beyond the competition arena. Together, we strive for excellence, pushing each other to new heights and representing our institution with pride and honor.",
            achievements: [
                "2022 - 1st POL-ITE (Kyrougi)",
                "2023 - Full Colour Award",
                "2023 - 3rd POL-ITE (Kyrougi)",
                "2024 - Half Colour Award",
            ]
        },
        basketball: {
            title: "Basketball",
            images: [
                "Basketball/Basketball1.jpg",
                "Basketball//Basketball2.jpg",
                "Basketball//Basketball3.jpg",
            ],
            started: "2015",
            description: "I started playing basketball in primary school and up the level by choosing Basketball as my CCA in secondary school. Basketball has taught me teamwork, discipline, and perseverance.",
            addDescription: "I have participated in numerous inter-school tournaments that has allowed me to work as a team.",
            achievements: [
                "2017 - 3rd T-Net Singapore",
            ]
        },
        waterSki: {
            title: "Water Skiing",
            images: [
                "WaterSki/WaterSki1.jpg",
                "WaterSki/WaterSki2.jpg"
            ],
            started: "2024",
            description: "Embark on my journey as a beginner in water skiing! Over the past month, I've delved into the world of this exhilarating water sport, finding myself captivated by the rush of adrenaline and the serenity of gliding across the water's surface. ach moment has been filled with excitement and discovery.",
            addDescription: "As I continue to refine my skills, my goal is to achieve a seamless connection with the water and the boat, mastering controlled turns and graceful maneuvers. Beyond the thrill of speed, I have also made new friends along the way while skiing.Water skiing isn't just a sport for me; it's a pathway to moments of pure joy and a lifelong pursuit of adventure on the water.",
            achievements: []
        }
    };

    const computingData = {
        coding: {
            title: "Coding",
            images: [
                "Coding/Coding1.jpg"
            ],
            started: "2022",
            description: "From the first moment I typed my inaugural line of code, I knew I had found my calling. Since then, I've embarked on a journey filled with projects/assignments, each one a testament to my dedication and relentless pursuit of mastery in the world of programming. What sets me apart is not just my technical proficiency, but also my insatiable thirst for knowledge. I constantly seek out new challenges and opportunities for growth, eagerly to expand my hozions amd deepen my expertise",
            addDescription: "One of my proudest achievements is the creation of this very website you're experiencing right now. I've incorporated skills I had learnt in school and poured countless hours into refining this user experience, optimising its performance, and ensuring its seamless integration. Though it was quite tidous, determination see this project through.",
            achievements: []
        }
    };

    const leisureData = {
        drone: {
            title: "Drone Photography",
            images: [
                "Drone/Drone1.jpg"
            ],
            started: "2024",
            description: "I have actually started flying drone at the age of 15 as post exam activities in secondary school but I took drone to a new level in 2024 during my school semester break. Would you believe that I have bought a drone with a camera for only $20? Though the camera quality may not be the best, it has allowed me to refine my flying skills and explore the limitless possibilities of aerial photography",
            addDescription: "Hopefully in the future I get to fly a drone with better camera quailty to traverse the rugged terrain of overseas mountains, capturing their majesty in stunning detail. ",
            achievements: []
        },
    };

    const handleSportChange = (sport) => {
        setSelectedSport(sport);
    };

    const handleComputingChange = (computing) => {
        setSelectedComputing(computing);
    };

    const handleLeisureChange = (leisure) => {
        setSelectedLeisure(leisure);
    };

    return (
        <div>
            <h1 className={styles.header}><strong>About me!</strong></h1>
            <h2 className={styles.computingNavigation}>Computing</h2>
            <div className={styles.sportNavigation}>
                <button onClick={() => handleComputingChange("coding")} className={styles.buttons}>Coding</button>
            </div>
            {selectedComputing && (
                <div className={styles.sportSection}>
                    <Section1 title={computingData[selectedComputing].title} data={computingData[selectedComputing]} />
                </div>
            )}

            <h2 className={styles.sportNavigation}>Sport</h2>
            <div className={styles.sportNavigation}>
                <button onClick={() => handleSportChange("taekwondo")} className={styles.buttons}>Taekwondo</button>
                <button onClick={() => handleSportChange("basketball")} className={styles.buttons}>Basketball</button>
                <button onClick={() => handleSportChange("waterSki")} className={styles.buttons}>Water Skiing</button>
            </div>
            {selectedSport && (
                <div className={styles.sportSection}>
                    <Section1 title={sportsData[selectedSport].title} data={sportsData[selectedSport]} />
                </div>
            )}

            <h2 className={styles.leisureNavigation}>Leisure</h2>
            <div className={styles.sportNavigation}>
                <button onClick={() => handleLeisureChange("drone")} className={styles.buttons}>Drone</button>
            </div>
            {selectedLeisure && (
                <div className={styles.sportSection}>
                    <Section1 title={leisureData[selectedLeisure].title} data={leisureData[selectedLeisure]} />
                </div>
            )}
        </div>
    );
}

export default function About() {
    return (
        <div className={styles.aboutMePage}>
            <Aboutme />
        </div>
    );
}