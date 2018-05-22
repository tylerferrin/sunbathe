import React from 'react';
import Link from 'gatsby-link';
import ListItem from './ListItem';

const NavList = () => (
  <ul
    css={styles.ulStyles}
  >
    <ListItem title="Tour" />
    <ListItem title="Music" />
    <ListItem title="About" />
    <ListItem title="Contact" />
    <ListItem title="Store" />
  </ul>
)

const styles = {
  ulStyles: {
    padding: '10vh 48px 0 0',
    margin: 0,
    listStyleType: 'none',
    width: '100%',
    transition: 'all .25s ease-in-out',
    '@media screen and (max-width: 768px)': {
      padding: '10vh 48px',
    }
  }
}

export default NavList;
