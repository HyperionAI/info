import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import invariant from 'invariant';
import ProductLight from '../../components/Product/ProductLight';

import Header from '../../components/Header';

// eslint-disable-next-line react/prefer-stateless-function
export default class StandardPlan extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    __filename: PropTypes.string.isRequired,
    __url: PropTypes.string.isRequired,
    head: PropTypes.object.isRequired,
    body: PropTypes.string.isRequired,
  };

  render() {
    const {
      __filename,
      __url,
      head,
    } = this.props;

    invariant(
      typeof head.title === 'string',
      `Your page '${__filename}' needs a title`
    );

    const metaTitle = head.metaTitle ? head.metaTitle : head.title;

    const meta = [
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: metaTitle },
      { property: 'og:url', content: __url },
      { property: 'og:description', content: head.description },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: metaTitle },
      { name: 'twitter:creator', content: `@${head.twitter}` },
      { name: 'twitter:description', content: head.description },
      { name: 'description', content: head.description },
    ];
    return (
      <div>
      <Helmet
        title= { metaTitle }
        meta = { meta }
      />
      <Header />
      <ProductLight />
      </div>
    );
  }
}
