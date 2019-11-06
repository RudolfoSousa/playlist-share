import Link from 'next/link';
import styles from './NavLink.css';

const NavLink = ({link, label}) => {
    return(
        <Link href={link}>
            <a className={styles.NavLink}>{label}</a>
        </Link>
    )
}

export default NavLink;