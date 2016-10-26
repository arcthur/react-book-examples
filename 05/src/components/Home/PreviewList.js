import React from 'react';
import Preview from './Preview';

class PreviewList extends React.Component {
  static propTypes = {
    loading: React.PropTypes.bool,
    error: React.PropTypes.bool,
    articleList: React.PropTypes.arrayOf(React.PropTypes.object),
    loadArticles: React.PropTypes.func,
    push: React.PropTypes.func,
  };

  componentDidMount() {
    this.props.loadArticles();
  }

  render() {
    const { loading, error, articleList } = this.props;

    if (error) {
      return <p className="message">Oops, something is wrong.</p>;
    }

    if (loading) {
      return <p className="message">Loading...</p>;
    }

    return (
      <div>
        {articleList.map(item => {
          return <Preview {...item} key={item.id} push={this.props.push} />
        })}
      </div>
    );
  }
}

export default PreviewList;
