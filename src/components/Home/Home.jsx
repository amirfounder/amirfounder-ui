import React from 'react'
import styles from './Home.module.css'


export const Home = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={`${styles.headerContainer} ${styles.contained}`}>
          <div className={styles.headerColumn} style={{userSelect: 'none'}}>
            <img
              draggable={false}
              src='../../assets/favicon.png'
              alt='logo'
              style={{
                width: '60px'
              }}
            />
          </div>
          <div className={styles.headerColumn}>
            <div style={{fontSize: '24px', fontWeight: 300}}>
              Software Engineer II
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div style={{padding: '100px 0px 0px 0px'}} className={`${styles.heroContainer} ${styles.contained}`}>
          <h1>Amir Sharapov - Backend Software Engineer</h1>
          <p>
            My name is Amir Sharapov and I am a Software Engineer II with 1+ years of industry experience developing full-stack and backend software.
            My goal is to lead teams developing AI-based applications to solve global problems.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.contained}>
          <h2>For Recruiters / Hiring Managers...</h2>
          <ul>
            <li><a className={styles.a} target='_blank' href="/go/resume-final-pdf">Resume - PDF</a></li>
            <li><a className={styles.a}target='_blank' href="/go/resume-final-docx">Resume - DOCX</a></li>
            <li><a className={styles.a}target='_blank' href="/go/resume-source">Source</a></li>
          </ul>
        </div>
        <div className={styles.containd}>
          <h2>Connect</h2>
          <ul>
            <li><a className={styles.a} target='_blank' href="/go/linkedin">LinkedIn</a></li>
            <li><a className={styles.a} target='_blank' href="/go/github">GitHub</a></li>
            <li><a className={styles.a} target='_blank' href="/go/twitch">Twitch</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
