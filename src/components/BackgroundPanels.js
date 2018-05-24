import React, { Component } from 'react';
import { css } from 'glamor';

class BackgroundPanels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelWidth: {
        width: '0%'
      }
    };
  }

  startPanelAnimation() {
    const that = this;
    setTimeout(() => {
      that.setState({
        panelWidth: {
          width: '50%'
        }
      });
    }, 500);
  }

  render() {
    this.startPanelAnimation();

    return (
      <div
        css={styles.containerStyle}
      >
        <div
          className="left-panel"
          {...css(styles.leftPanel, this.state.panelWidth)}
        >
        </div>
        <div
          className="right-panel"
          {...css(styles.rightPanel, this.state.panelWidth)}
        >
        </div>
      </div>
    );
  }
}

export default BackgroundPanels;

const styles = {
  containerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: '10'
  },
  rightPanel: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    backgroundColor: 'rgb(7, 135, 121)',
    transition: 'width 1s cubic-bezier(0.215, 0.61, 0.355, 1)'
  },
  leftPanel: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    backgroundColor: 'rgb(79, 19, 147)',
    transition: 'width 1s cubic-bezier(0.215, 0.61, 0.355, 1)'
  }
}
