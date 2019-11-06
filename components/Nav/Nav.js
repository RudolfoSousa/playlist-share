import React from 'react';
import Link from 'next/link';
import styles from './Nav.css';
import NavWrapper from './NavWrapper';
import NavItem from './NavItem';
import NavLink from './NavLink';

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav className={styles.Nav}>
    <NavWrapper>
      <NavItem>
        <NavLink link="/" label="Home"/>
      </NavItem>
      {links.map(({ key, href, label }) => (
        <NavItem key={key}>
          <NavLink link={href} label={label} />
        </NavItem>
      ))}
    </NavWrapper>
  </nav>
)

export default Nav;
