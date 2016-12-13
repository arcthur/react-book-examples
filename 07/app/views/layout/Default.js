import React, { Component, PropTypes } from 'react';

class Default extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    children: PropTypes.object,
    title: PropTypes.string,
    scriptUrls: PropTypes.array,
  };

  renderScripts() {
    const {scriptUrls} = this.props;
    let items = [];

    scriptUrls.map((url, i) => {
      items.push(<script key={i} src={url} />);
    });

    return items;
  }

  render() {
    const { microdata, title, children } = this.props;

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta httpEquiv='Cache-Control' content='no-siteapp' />
          <meta name='renderer' content='webkit' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>{title}</title>
        </head>
        <body>
          {children}
          {this.renderScripts()}
        </body>
      </html>
    );
  }
};
module.exports = Default;
