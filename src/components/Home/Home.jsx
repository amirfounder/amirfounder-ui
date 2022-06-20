import React from 'react'
import styles from './Home.module.css'


export const Home = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={`${styles.headerContainer} ${styles.contained}`}>
          <div className={styles.headerColumn} style={{userSelect: 'none'}}>
            <div style={{fontWeight: '600', fontSize: '20px'}}>
              <span style={{color: '#38B6FF', fontWeight: '800'}} >&#60;</span>
              <span style={{color: '#333'}}>Amir</span>
              <span style={{color: '#5271FF', fontWeight: '800'}}>/</span>
              <span style={{color: '#5E17EB', fontWeight: '800'}}>&#62;</span>
            </div>
          </div>
          <div className={styles.headerColumn}>
            Software Engineer II
          </div>
        </div>
      </div>
      <div className={styles.hero}>
        <div style={{padding: '100px 0px 0px 0px'}} className={`${styles.heroContainer} ${styles.contained}`}>
          <h1>Amir Sharapov - Backend Software Engineer</h1>
          <p>
            My name is Amir Sharapov and I am a Software Engineer II with <strong>1+ years of industry experience developing full-stack and backend software</strong>.
            My goal is to develop ML / NN embedded applications to solve global problems.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.contained}>
          <h2>For Recruiters / Hiring Managers...</h2>
          <ul>
            <li><a target='_blank' href="/go/resume-final-pdf">Resume - PDF</a></li>
            <li><a target='_blank' href="/go/resume-final-docx">Resume - DOCX</a></li>
            <li><a target='_blank' href="/go/resume-source">Source</a></li>
          </ul>
        </div>
        <div className={styles.containd}>
          <h2>Connect</h2>
          <ul>
            <li><a target='_blank' href="/go/linkedin">LinkedIn</a></li>
            <li><a target='_blank' href="/go/github">GitHub</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
