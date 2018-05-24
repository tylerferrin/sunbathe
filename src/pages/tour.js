import React from 'react';
import Link from 'gatsby-link';

import PageTitle from '../components/PageTitle';
import ShowList from '../components/ShowList';

const Tour = ({ data }) => {
  const { showArray } = data.shows;
  const { containerStyle } = styles;
  return (
    <div
      className="tour-container"
      css={containerStyle}
    >
      <PageTitle />
      <ShowList showArray={showArray} />
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
          date,
          venue,
          location,
          rsvpLink,
          ticketLink
        }
      }
    }
  }
`

const styles = {
  containerStyle: {
    position: 'fixed',
    width: '75vw',
    minHeight: '75vh',
    margin: '12.5vh 12.5vw 0',
    backgroundColor: 'transparent',
    overflow: 'scroll'
  }
}
