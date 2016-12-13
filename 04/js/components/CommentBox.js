import React, { Component } from 'react';
import { Container } from 'flux/utils';
import CommentStore from '../stores/CommentStore';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends Component {
  static getStores() {
    return [CommentStore];
  }

  static calculateState(prevState) {
    return {
      comment: CommentStore.getState().comment,
    };
  }

  render() {
    return (
      <div>
        <CommentList comment={this.state.comment} />
        <CommentForm />
      </div>
    );
  }
}

export default Container.create(CommentBox);
