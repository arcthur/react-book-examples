import React, { Component } from 'react';
import CommentActions from '../actions/CommentActions';
import { dispatch } from '../dispatcher/AppDispatcher';

class CommentList extends Component {
  componentDidMount() {
    CommentActions.loadComment();
  }

  render() {
    const list = this.props.comment;

    return (
      <ul className="comment-box">
        {list.map((entry, i) => (
          <li key={`reponse-${i}`} className="comment-item">
            <p className="comment-item-name">{entry.name}</p>
            <p className="comment-item-content">{entry.content}</p>
          </li>
         ))}
      </ul>
    );
  }
}

export default CommentList;
