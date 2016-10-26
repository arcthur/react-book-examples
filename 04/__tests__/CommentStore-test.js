jest.unmock('../js/stores/CommentStore');
jest.unmock('../js/constants/CommentConstants');
jest.unmock('object-assign');

import AppDispatcher from '../js/dispatcher/AppDispatcher';
import CommentConstants from '../js/constants/CommentConstants';
import CommentStore from '../js/stores/CommentStore';

describe('CommentStore', () => {
  it('should propagate comments when loaded successfully', () => {
    const commentList = [{
      name: 'John',
      content: 'It looks good!'
    }, {
      name: 'Jane',
      content: 'Good job, dude!'
    }];
    const listener = AppDispatcher.register.mock.calls[0][0];

    listener({
      type: CommentConstants.LOAD_COMMENT_SUCCESS,
      payload: {
        comment: {
          commentList,
        }
      }
    });

    expect(CommentStore.getComment()).toEqual(commentList);
  });
});
