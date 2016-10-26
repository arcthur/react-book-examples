import AppDispatcher from '../dispatcher/AppDispatcher';
import CommentConstants from '../constants/CommentConstants';
import { ReduceStore } from 'flux/utils';
import { Action } from '../actions/CommentActions';

class CommentStore extends ReduceStore {
  getInitialState() {
    return {
      comment: [],
      err: null,
    };
  }

  reduce (state, action) {
    switch (action.type) {
      case CommentConstants.LOAD_COMMENT_SUCCESS:
        return {
          comment: action.payload.comment.commentList,
          err: null,
        };

      case CommentConstants.LOAD_COMMENT_ERROR:
        return {
          ...this.state,
          err: null,
        };

      default:
        return state;
    }
  }
}

export default new CommentStore(AppDispatcher);
