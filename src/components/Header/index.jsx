import styles from './style.module.css'

import igniteLogo from '../../assets/ignite-logo.svg'

function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Ignite logo" />
            <strong>Ignite Feed</strong>
        </header>
    )
}

export { Header }