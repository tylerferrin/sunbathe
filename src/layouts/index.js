import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navigation from '../components/Navigation'

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: null
    }
  }

  innerWidth = () =>  window.innerWidth < 768 ? true : false;

  checkForMobile = () => {
    if (this.state.isMobile !== this.innerWidth()) {
      this.setState({ isMobile: this.innerWidth() });
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.checkForMobile);
    this.checkForMobile();
  }

  render() {
    return (
      <div
        css={{
          height: '100vh'
        }}
      >
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Navigation isMobile={this.state.isMobile} />
        <div>
          {this.props.children()}
        </div>
      </div>
    );
  }
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
