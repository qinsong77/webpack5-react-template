import logo from '@/assets/logo.svg'

import styles from './Home.module.css'

export const Home = () => {
  return (
    <div className={styles.Home}>
      <article className={styles.HomeHeader}>
        <img
          src={logo}
          className={styles.HomeLogo}
          alt="logo"
        />
        <p>
          Edit <code>src/Home.tsx</code> and save to reload.
        </p>
        <a
          className={styles.HomeLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </article>
    </div>
  )
}
