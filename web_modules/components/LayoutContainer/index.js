import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import styles from './index.css';

 // eslint-disable-next-line react/prefer-stateless-function
export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata;

    return (
      <div className={ styles.layout }>
        <Helmet
          meta={ [
            { property: 'og:site_name', content: pkg.name },
            { name: 'twitter:site', content: `@${pkg.twitter}` },
          ] }
        />
        { this.props.children }
      </div>
    );
  }
}
