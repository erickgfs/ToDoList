import styles from './Header.module.css';

import logoRocket from '../assets/Logo-Rocket.svg';


export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <img src={logoRocket} alt="" />
                <strong>
                    <span>
                        to
                    </span>
                    <span>
                        do
                    </span>
                </strong>
            </div>
        </header>
    )
}