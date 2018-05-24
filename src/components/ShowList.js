import React from 'react';

const ShowList = ({ showArray }) => {

  // method to render list of shows //
  const listItems = showArray.map((show) => {
    return (
      <div
        key={show.node.id}
        css={{
          color: 'white',
          borderBottom: '2px solid white',
          padding: '12px 0'
        }}
      >
        <p>{show.node.date}</p>
        <p>{show.node.venue}</p>
        <p>{show.node.location}</p>
        <button>{show.node.rsvpLink}</button>
        <button>{show.node.ticketLink}</button>
      </div>
    );
  });

  const { tourContainerStyle } = styles;

  return (
    <div
      className="showList-container"
      css={tourContainerStyle}
    >
      {listItems}
    </div>
  );
};

export default ShowList;

const styles = {
  tourContainerStyle: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: '25px',

  }
}
