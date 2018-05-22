import React, { Component } from 'react';
import Link from 'gatsby-link';
import NavList from './NavList';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      buttonText: 'Menu',
      isMobile: null,
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isMobile !== state.isMobile) {
      return {
        isMobile: props.isMobile
      }
    }
    return null;
  }

  buttonText = () => this.state.isOpen  ? 'Close Menu' : 'Menu';

  navWidthToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  containerWidth() {
    if (this.state.isMobile && this.state.isOpen) {
      return {
        width: '100vw',
        height: '100vh'
      };
    } else if (this.state.isMobile && !this.state.isOpen) {
      return {
        width: '100vw'
      };
    } else if (this.state.isOpen && !this.state.isMobile) {
      return { width: '25vw' }
    } else {
      return { width: '50px' }
    }
  }

  renderRightColumn() {
    const { rightColumnStyle } = styles;
    return (
      <div
        className="rightColumn"
        css={rightColumnStyle}
      >
        <NavList />
      </div>
    )
  }

  render() {
    const { containerStyle, leftColumnStyle, buttonStyle } = styles;
    let isOpenOrClosed = this.containerWidth();

    return (
      <div
        className="navigation-container"
        css={containerStyle}
        style={isOpenOrClosed}
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
    right: 0,
    backgroundColor: 'white',
    transition: 'all .5s cubic-bezier(0.215, 0.61, 0.355, 1)',
    transformOrigin: 'top 0 right 0',
    display: 'flex',
    flexDirection: 'row',
    '@media screen and (max-width: 768px)': {
      height: '48px',
      width: '100vw',
      top: 0,
      left: 0,
      flexDirection: 'column',
      justifyContent: 'flexStart'
    }
  },
  leftColumnStyle: {
    display: 'inline-block',
    height: '100%',
    width: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media screen and (max-width: 768px)': {
      width: '100vw',
      flexDirection: 'row',
      height: '48px'
    }
  },
  rightColumnStyle: {
    display: 'inline-block',
    width: 'calc(25vw - 50px)',
    '@media screen and (max-width: 768px)': {
      width: '100vw'
    }
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
    },
    '@media screen and (max-width: 768px)': {
      transform: 'rotate(0deg)',
      top: 16,
      right: 0
    }
  }
}

export default Navigation;
