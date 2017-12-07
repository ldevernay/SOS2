import { combineReducers } from 'redux';
import ActiveProjectReduxer from './reducer_active_project';
import ProjectsReducer from './reducer_projects';

const rootReducer = combineReducers({
  active_project: ActiveProjectReduxer,
  projects: ProjectsReducer
});

export default rootReducer;
