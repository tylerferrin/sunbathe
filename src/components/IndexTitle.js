import React, { Component } from 'react';
import { css } from 'glamor';

class IndexTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      s: {
        top: '-13%',
        opacity: 0
      },
      u: {
        top: '-13%',
        opacity: 0
      },
      n: {
        top: '-13%',
        opacity: 0
      },
      b: {
        top: '100%',
        opacity: 0
      },
      a: {
        top: '100%',
        opacity: 0
      },
      t: {
        top: '100%',
        opacity: 0
      },
      h: {
        top: '100%',
        opacity: 0
      },
      e: {
        top: '100%',
        opacity: 0
      }
    }
  }

  runLetterAnimation() {
    const that = this;
    setTimeout(() => {
      that.setState({
        s: {
          top: '10%',
          opacity: 1
        },
        u: {
          top: '15%',
          opacity: 1
        },
        n: {
          top: '5%',
          opacity: 1
        },
        b: {
          top: '55%',
          opacity: 1
        },
        a: {
          top: '58%',
          opacity: 1
        },
        t: {
          top: '54%',
          opacity: 1
        },
        h: {
          top: '50%',
          opacity: 1
        },
        e: {
          top: '60%',
          opacity: 1
        }
      })
    }, 1000);
  }

  render() {
    this.runLetterAnimation();
    return (
      <div>
        <p {...css(styles.letterStyle, styles.s, this.state.s)}>S</p>
        <p {...css(styles.letterStyle, styles.u, this.state.u)}>U</p>
        <p {...css(styles.letterStyle, styles.n, this.state.n)}>N</p>
        <p {...css(styles.letterStyle, styles.b, this.state.b)}>B</p>
        <p {...css(styles.letterStyle, styles.a, this.state.a)}>A</p>
        <p {...css(styles.letterStyle, styles.t, this.state.t)}>T</p>
        <p {...css(styles.letterStyle, styles.h, this.state.h)}>H</p>
        <p {...css(styles.letterStyle, styles.e, this.state.e)}>E</p>
      </div>
    );
  }
}

export default IndexTitle;

const bounce = css.keyframes({
  '0%': { transform: 'translate3d(0,0,0)' },
  '50%': { transform: 'translate3d(0,5px,0)' },
  '100%': { transform: 'translate3d(0,-5px,0)'  }
});

const styles = {
  letterStyle: {
    display: 'inline-block',
    fontFamily: 'Catamaran',
    fontWeight: '900',
    fontSize: '7vw',
    color: '#FB7C13',
    margin: 0,
    position: 'absolute',
    zIndex: '12',
    transition: 'all .55s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    animation: `${bounce}`,
    animationDuration: '2.5s',
    animationTimingFunction: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate'
  },
  s: {
    left: '28.5%',
    transitionDelay: '.25s',
    animationDelay: '0s'
  },
  u: {
    left: '36.5%',
    transitionDelay: '.3s',
    animationDelay: '.25s'
  },
  n: {
    left: '45%',
    transitionDelay: '.35s',
    animationDelay: '.5s'
  },
  b: {
    left: '39%',
    transitionDelay: '.4s',
    animationDelay: '.75s'
  },
  a: {
    left: '46%',
    transitionDelay: '.4s',
    animationDelay: '1s'
  },
  t: {
    left: '54%',
    transitionDelay: '.35s',
    animationDelay: '1.25s'
  },
  h: {
    left: '60%',
    transitionDelay: '.3s',
    animationDelay: '1.5s'
  },
  e: {
    left: '66%',
    transitionDelay: '.25s',
    animationDelay: '1.7s'
  }
}
let box = css({
  animation: `${bounce} 2s`,
})
