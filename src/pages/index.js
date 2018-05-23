import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const IndexPage = ({ data }) => {
  const { titleStyle, imgStyle, imgWrapperStyle, mainPageStyle } = styles;
  return (
    <div
      className="index-page"
      css={mainPageStyle}
    >
      <div
        className="image-wrapper"
        css={imgWrapperStyle}
      >
        <Img
          title="Sunbathe"
          alt="Sunbathe Beauty Shot"
          sizes={data.indexImage.sizes}
          css={imgStyle}
        />
        <p
          css={titleStyle}
        >SUNBATHE</p>
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
    backgroundColor: 'black',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgWrapperStyle: {
    position: 'relative',
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
  },
  titleStyle: {
    position: 'absolute',
    bottom: -18,
    right: 24,
    margin: 0,
    fontFamily: 'Catamaran',
    fontSize: '48px',
    fontWeight: '500',
    color: 'white'
  }
}
