const initialState = {
  articles: [],
  loading: true,
  error: false,
};

export function loadArticles() {
  return {
    url: '/api/articles.json',
    types: ['LOAD_ARTICLES', 'LOAD_ARTICLES_SUCCESS', 'LOAD_ARTICLES_ERROR']
  };
}

export function changeQuery(e) {
  return {
    type: 'CHANGE_QUERY',
    payload: {
      query: e.target.value.trim()
    }
  };
}

export function search() {
  return (dispatch, getState) => {
    const { query } = getState().articles.table;
    return dispatch(loadArticles(query));
  }
}

export default function articles(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_QUERY': {
      return {
        ...state,
        query: action.payload.query
      };
    }

    case 'LOAD_ARTICLES': {
      return {
        ...state,
        loading: true,
        error: false
      };
    }

    case 'LOAD_ARTICLES_SUCCESS': {
      return {
        ...state,
        articles: action.payload,
        loading: false,
        error: false
      };
    }

    case 'LOAD_ARTICLES_ERROR': {
      return {
        ...state,
        loading: false,
        error: true
      };
    }

    case 'CHANGE_QUERY': {
      return {
        ...state,
        query: action.payload.query
      };
    }

    default:
      return state;
  }
}
