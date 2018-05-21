import React, { Component } from 'react';
import Link from 'gatsby-link';
import NavList from './NavList';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      buttonText: 'Menu'
    }
  }

  buttonText = () => this.state.isOpen ? 'Close Menu' : 'Menu';

  navWidthToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  renderRightColumn() {
    const { rightColumnStyle } = styles;
    if (this.state.isOpen) {
      return (
        <div
          className="rightColumn"
          css={rightColumnStyle}
        >
          <NavList />
        </div>
      )
    }
  }

  render() {
    const { containerStyle, leftColumnStyle, buttonStyle } = styles;
    let isOpenOrClosed = this.state.isOpen ? '25vw' : '50px'
    return (
      <div
        className="navigation-container"
        css={containerStyle}
        style={{ width: isOpenOrClosed }}
      >
        <div
          className="leftColumn"
          css={leftColumnStyle}
        >
          <button
            css={buttonStyle}
            onClick={this.navWidthToggle.bind(this)}
          >
              {this.buttonText()}
          </button>
        </div>
        {this.renderRightColumn()}

      </div>
    )
  }
}

const styles = {
  containerStyle: {
    position: 'fixed',
    height: '100%',
    top: 0,
    right: 0,
    backgroundColor: 'white',
    transition: 'width .45s ease-in-out',
    display: 'flex',
    flexDirection: 'row'
  },
  leftColumnStyle: {
    display: 'inline-block',
    height: '100%',
    width: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  rightColumnStyle: {
    width: 'calc(25vw - 50px)',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  buttonStyle: {
    position: 'relative',
    right: '25px',
    backgroundColor: 'transparent',
    width: '100px',
    border: 0,
    fontFamily: 'Catamaran',
    fontWeight: '900',
    letterSpacing: '1px',
    transform: 'rotate(90deg)',
    cursor: 'pointer',
    '&:focus': {
      outline: 'none'
    }
  }
}

export default Navigation;
