import styles from './NavWrapper.css';

const NavWrapper = ({children}) => {
    return(
        <ul className={styles.NavWrapper}>
            {children}
        </ul>
    )
}

export default NavWrapper;