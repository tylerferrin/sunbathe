import React, { Component } from 'react';
import Link from 'gatsby-link';
import NavList from './NavList';
import { withRouter } from 'react-router-dom'

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      buttonText: 'Menu',
      isMobile: null,
      location: null
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isMobile !== state.isMobile) {
      return {
        isMobile: props.isMobile,
        location: props.location.pathname
      }
    } else if (props.location !== state.location) {
      return {
        isMobile: props.isMobile,
        location: props.location.pathname,
        isOpen: false
      }
    }
    return null;
  }

  buttonText = () => this.state.isOpen  ? 'Close Menu' : 'Menu';

  navStateToggle() {
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
      return { width: '22vw' }
    } else {
      return { width: '50px' }
    }
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
            onClick={this.navStateToggle.bind(this)}
          >
              {this.buttonText()}
          </button>
        </div>
        {this.renderRightColumn()}

      </div>
    )
  }
}

export default withRouter(Navigation);

const styles = {
  containerStyle: {
    position: 'fixed',
    zIndex: 999,
    height: '100%',
    top: 0,
    right: 0,
    backgroundColor: 'white',
    transition: 'width .5s cubic-bezier(0.215, 0.61, 0.355, 1)',
    display: 'flex',
    flexDirection: 'row',
    '@media screen and (max-width: 768px)': {
      height: '48px',
      width: '100vw',
      top: 0,
      left: 0,
      flexDirection: 'column',
      justifyContent: 'flexStart',
      transition: 'height .25s cubic-bezier(0.215, 0.61, 0.355, 1)'
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
      height: '48px !important'
    }
  },
  rightColumnStyle: {
    display: 'inline-block',
    width: 'calc(22vw - 50px)',
    transition: 'all 1s ease-in-out',
    '@media screen and (max-width: 768px)': {
      width: '100%',
      height: '100%'

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
      right: 0,
      height: '24px'
    }
  }
}
