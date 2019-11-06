import styles from './NavItem.css'

const NavItem = ({children}) => {
    return(
        <li className={styles.NavItem}>
            {children}
        </li>
    )
}

export default NavItem;