import { combineReducers } from 'redux';

// 引入 reducer 及 actionCreator
import table from '../components/Home/TableRedux';
import modal from '../components/Home/ModalRedux';

export default combineReducers({
  table,
  modal,
});

export * as tableActions from '../components/Home/TableRedux';
export * as modalActions from '../components/Home/ModalRedux';

