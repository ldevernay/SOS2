import { combineReducers } from 'redux';
import ActiveProjectReducer from './reducer_active_project';
import ProjectsReducer from './reducer_projects';

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  activeProject: ActiveProjectReducer
});

export default rootReducer;
