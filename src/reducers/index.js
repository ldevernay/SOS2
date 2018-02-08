import { combineReducers } from 'redux';
import ActiveProjectReducer from './reducer_active_project';
import ActiveProjectLanguagesReducer from './reducer_active_project_languages';
import ActiveProjectTopicsReducer from './reducer_active_project_topics';
import ProjectsReducer from './reducer_projects';

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  activeProject: ActiveProjectReducer,
  activeProjectLanguages: ActiveProjectLanguagesReducer,
  activeProjectTopics: ActiveProjectTopicsReducer
});

export default rootReducer;
