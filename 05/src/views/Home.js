import React from 'react';
import { connect } from 'react-redux';
import PreviewList from '../components/Home/PreviewList';
import { actions } from './HomeRedux';
import { push } from 'react-router-redux';

@connect(state => {
  return {
    articleList: state.home.list.articleList,
  };
}, {
  push,
  ...actions,
})
class Home extends React.Component {
  render() {
    const { loadArticles, articleList, push } = this.props;

    return (
      <div>
        <h1>Home</h1>
        <PreviewList {...this.props} />
      </div>
    );
  }
}

export default Home;
