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
    padding: '0 32px',
    margin: 0,
    listStyleType: 'none',
    width: '100%'
  }
}

export default NavList;
