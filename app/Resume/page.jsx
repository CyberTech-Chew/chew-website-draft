//Resume Page

import React from 'react';
import styles from "./page.module.css"


// Used for Experience & Education section
function Section({ title, data }) {
    return (
        <div className={styles.section}>
            <h3>{title}</h3>
            {data.map((item, index) => (
                <div key={index} className={styles.box}>
                    <div className={styles.content1}>
                        <h3 className={styles.durations}><strong>{item.duration}</strong></h3>
                        <p className={styles.name}>{item.name}</p>
                        <p className={styles.title}>{item.title}</p>
                        <p className={styles.location}>{item.location}</p>
                    </div>
                    <div className={styles.content2}>
                        <p>
                            {item.description}
                            <br></br>
                            <br></br>
                            {item.addDescription}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

// Used for Achievements section
function Section2({ title, data }) {
    return (
        <div className={styles.section2}>
            <h3>{title}</h3>
            {data.map((item, index) => (
                <div key={index} className={styles.box}>
                    <div className={styles.contentAchievement}>
                        <ul>
                            {item.duration.map((year, index) => (
                                <li key={index}>
                                    <div className={styles.yearTitleContainer}>
                                        <p className={styles.yearHeld}><strong>{year}</strong></p>
                                        <p className={styles.awardType}>{item.title[index]}</p>
                                    </div>
                                    <p className={styles.description}>{item.description[index]}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}




// Used for Skills section
function Section3({ title, data }) {
    return (
        <div className={styles.section3}>
            <h3>{title}</h3>
            {data.map((category, index) => (
                <div key={index} className={styles.skillBox}>
                    <p className={styles.skillTitle}>{category.title}</p>
                    <ul className={styles.skillsList}>
                        {category.items.map((item, index) => (
                            <li key={index} className={styles.skill}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}



// DataSet
function Myresume() {
    const experienceData = [
        {
            duration: "Aug 2023 - Oct 2023",
            name: "Human Resource Coordinator",
            title: "MCI Group of Companies",
            location: "80 Jurong East Street 21",
            description: "During my 3 months in the company, I have been assigned with a team to do back-end work for 2023 presidential events.",
            addDescription: "Had the privilege of working with ST Logistics in executing the election smoothly."
        }
        // Add more experience items as time goes on...
    ];

    const educationData = [
        {
            duration: "2022 - 2026",
            name: "Ngee Ann Polytechnic",
            title: "Diploma in Cybersecurity & Digital Forensic",
            location: "535 Clementi Rd, Singapore 599489",
            description: "Enrolled in 2022 my year 0 as PFP student. Currently a year 2 student pursuing the diploma in Cybersecurity & Digital Forensic.",
            addDescription: "It is equipping me with the knowledge and skills to navigate the complexities of our digital world."
        },
        {
            duration: "2018 - 2021",
            name: "Westwood Secondary School",
            title: "O/N Level",
            location: "11 Jurong West Street 25, Singapore 648350",
            description: "Westwood Secondary School was more than just an institution; it was a crucible where I forged the fundamentals of my educational journey.",
            addDescription: "Here, I laid the groundwork for my academic pursuits and embraced the challenges that would shape my future endeavors."
        },
        {
            duration: "2012 - 2017",
            name: "Corporation Primary School",
            title: "PSLE",
            location: "31 Jurong West St. 24, Singapore 648347",
            description: "Primary School provided me with the nurturing environment and foundational education that ignited my passion for learning.",
            addDescription: "This is where I began exploring the vast realms of knowledge, setting the stage for my academic journey ahead"
            
        }
        // Add more when go uni...
    ];

    const awardData = [
        {
            duration: [
                "2022",
                "2023",
                "2018 - 2023",
                "2024"

            ],
            title:[
                "Mr and Mrs Ho Choy Shing Memorial Prize",
                "Student Excellence Award",
                "Edusave Scholarship",
                "Student Excellence Award",
            ],
            description:[
                "The most outstanding academic performance in the Technology Cluster",
                "Full Colours Award - Taekwondo",
                "For achieving excellent academic performance and demonstrating good conduct",
                "Half Colours Award - Taekwondo"
            ]
            
        }
        // Add more when receive more awards...
    ]

    const skillsData = [
        {
            title: "Technical",
            items: [
                "Python",
                "C#",
                "HTML & CSS",
                "JavaScript",
                "Kali Linux",
                "Windows Server Security",
                "Palo Alto Firewall",
                "Network Infrasture",
                "Ethical Hacking",
                "Malware Analysis",
                "Web Application Pen Testing",
                "Data Analytics",
                "Canva",
                "Adobe Photoshop",
                "Microsoft Office",
                "Digital Forensic",
                "Cloud Architecture"
            ]
        },
        {   title: "Personal",
            items: [
                "Critical Thinking",
                "Time Management",
                "Effective Commucation",
                "Teamwork & Collaboration",
                "Strategic Planner"
            ]},
        {
            title: "Language",
            items: [
                "English (Writen & Fluent)",
                "Chinese (Fluent)"
            ]
        }
        // Add more accordingly when got more skills...
    ];
    

    return (
        <div>
            <h1 className={styles.header}><strong>Resume</strong></h1>
            <Section title="Experience" data={experienceData} />
            <Section title="Education Journey" data={educationData} />
            <Section2 title ="Achievements"data={awardData} />
            <Section3 title ="Skillset"data={skillsData} />
            {/* Add more sections if have more next time */}
        </div>
    );
}


export default function Resume() {
    return(
        <div className={styles.resumePage}>
            <Myresume />
        </div>
    );
}