import config from './Modal.config';
import { bindRedux } from 'redux-form-utils';

const { state: formState, reducer: formReducer } = bindRedux(config);

const initialState = {
  visible: false,
  ...formState,
};

export function addArticle() {
  return (dispatch, getState) => {
    const { title, desc, date } = getState().article.dialog.form;
    return dispatch({
      url: '/api/article.json',
      method: 'POST',
      params: {
        title: title.value,
        desc: desc.value,
        date: date.value
      }
    });
  };
}

export function showModal() {
  return {
    type: 'SHOW_MODAL'
  };
}

export function hideModal() {
  return {
    type: 'HIDE_MODAL'
  };
}

export default function modal(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_MODAL': {
      return {
        ...state,
        visible: true,
      };
    }

    case 'HIDE_MODAL': {
      return {
        ...state,
        visible: false,
      };
    }

    default:
      return formReducer(state, action);
  }
}
