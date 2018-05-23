import React from 'react';
import Link from 'gatsby-link';

const Tour = ({ data }) => {
  const { showArray } = data.shows;
  
  return (
    <div>
    </div>
  );
};

export default Tour;

export const query = graphql`
  query showQuery {
    shows: allContentfulShows {
      showArray: edges {
        node {
          id,
          date
        }
      }
    }
  }
`
