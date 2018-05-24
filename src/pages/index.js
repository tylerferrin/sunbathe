import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { css } from 'glamor';

import IndexTitle from '../components/IndexTitle';
import BackgroundPanels from '../components/BackgroundPanels';

const IndexPage = ({ data }) => {
  return (
    <div
      className="index-page"
      css={styles.mainPageStyle}
    >
      <BackgroundPanels />
      <IndexTitle />
      <div
        className="image-wrapper"
        css={styles.imgWrapperStyle}
      >
        <Img
          title="Sunbathe"
          alt="Sunbathe Beauty Shot"
          sizes={data.indexImage.sizes}
          css={styles.imgStyle}
        />
      </div>
    </div>
  );
};

export default IndexPage;

export const indexImageQuery = graphql`
  query indexImageQuery {
    indexImage: imageSharp(id: { regex: "/sb_1/" }) {
      sizes(maxWidth: 1500 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

const styles = {
  mainPageStyle: {
    position: 'relative',
    backgroundColor: 'white',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgWrapperStyle: {
    position: 'relative',
    zIndex: 10,
    height: 'auto',
    width: '50vw',
    border: '2vw solid white',
    '@media screen and (max-width: 768px)': {
      width: '90vw',
    }
  },
  imgStyle: {
    height: '100%',
    width: '100%'
  }
}
