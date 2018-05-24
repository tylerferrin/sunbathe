import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { css } from 'glamor';

class PageTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleExtender: {
        '&::after': {
          width: '0%'
        }
      }
    }
  }

  runTitleExtender() {
    const that = this;
    setTimeout(() => {
      that.setState({
        titleExtender: {
          '&::after': {
            width: '100%'
          }
        }
      })
    }, 250)
  }

  render() {
    const title = this.props.location.pathname.replace("/", "").toUpperCase();
    const { titleExtender } = this.state;
    this.runTitleExtender();


    return (
      <div className="title-wrap">
        <h1
          {...css(styles.titleStyle, this.state.titleExtender)}
        >
          {title}
        </h1>
      </div>
    );
  }
}

export default withRouter(PageTitle);

const styles = {
  titleStyle: {
    position: 'relative',
    fontFamily: 'Catamaran',
    fontWeight: '900',
    fontSize: '32px',
    color: 'black',
    paddingBottom: '4px',
    '&::after': {
      position: 'absolute',
      top: 36,
      left: 0,
      content: `''`,
      height: '2px',
      backgroundColor: 'black',
      transition: 'width 1s cubic-bezier(0.215, 0.61, 0.355, 1)',
    }
  }
}
