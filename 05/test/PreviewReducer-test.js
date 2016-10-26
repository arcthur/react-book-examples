import PreviewReducer, { LOAD_ARTICLES_SUCCESS } from '../src/components/Home/PreviewListRedux';
import expect from 'expect.js';

describe('Home', () => {
  it('PreviewReducer should propagate articles when loaded', () => {
    const articles = [{
      title: '测试内容1'
    }, {
      title: '测试内容2'
    }];

    // 第一个参数为初始化状态
    expect(PreviewReducer({}, {
      type: LOAD_ARTICLES_SUCCESS,
      payload: articles
    }).articleList).to.equal(articles);
  });
});
