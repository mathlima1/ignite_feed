import { PencilLine } from 'phosphor-react'

import styles from './style.module.css'


function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.coverImg}
                src='https://images.unsplash.com/photo-1552309665-816699467c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50' />

            <div className={styles.profile}>
                <img src="https://github.com/mathlima1.png" />

                <strong> Nome</strong>
                <span>Cargo</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}

export { Sidebar }