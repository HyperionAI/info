import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './index.css';
import SVG from 'react-svg-inline';
import twitterSVG from '../../icons/iconmonstr-twitter-1.svg';
import gitHubSVG from '../../icons/iconmonstr-github-1.svg';

 // eslint-disable-next-line react/prefer-stateless-function
export default class Header extends Component {

  render() {
    return (
      <header className={ styles.header }>
        <nav className={ styles.nav }>
          <div className={ styles.navPart1 }>
            <Link
              className={ styles.link }
              to="/"
            >
              { "Home" }
            </Link>
          </div>
          <div className={ styles.navPart2 }>
            <Link className= {styles.link } to="/experience">
              { "Experience" }
            </Link>
            <Link className= {styles.link } to="/products">
              { "Products" }
            </Link>
            <Link className= {styles.link } to="/integrations">
              { "Integrations" }
            </Link>
            <Link className= {styles.link } to="/pricing">
              { "Pricing" }
            </Link>
            <Link className= {styles.link } to="/products">
              { "Store" }
            </Link>
            <a
              href="https://twitter.com/Statinamic"
              className={ styles.link }
            >
              <SVG svg={ twitterSVG } />
            </a>
            <a
              href="https://github.com/MoOx/statinamic"
              className={ styles.link }
            >
              <SVG svg={ gitHubSVG } />
            </a>
          </div>
        </nav>
      </header>
    );
  }
}
