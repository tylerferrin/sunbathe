import React from 'react';
import Link from 'gatsby-link';

const ListItem = (props) => (
  <li css={styles.listItemStyle}>
    <a
      css={styles.linkStyles}
      href="/"
    >
      {props.title}
    </a>
  </li>
);

const styles = {
  listItemStyle: {
    width: '100%',
    borderBottom: '2px solid black',
    '@media screen and (max-width: 768px)': {
      padding: '10px 0'
    }
  },
  linkStyles: {
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Catamaran',
    fontWeight: '500',
    fontSize: '20px'
  }
}

export default ListItem;
