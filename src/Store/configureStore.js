import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';



const defaultState ={
    selectedType:"All",
    selectedLang:"All",
    searchQuery:"",
    typeValues: ["All","Sources","Fork","Archived","Mirrors"],
    LanguageValues: ["All", "HTML", "JavaScript","CSS"],
    userProfile: null,
    userRepos: [],
    userProfileFetchInProgress: true,
    userReposFetchInProgress: true
};

function newState(state = defaultState, action){
   console.log('action', action);
    if (action.type === 'UPDATE_TYPE') {
        return {
            ...state,
            selectedType: action.data.value
        }
    }

    if (action.type === 'UPDATE_LANG') {
        return {
            ...state,
            selectedLang: action.data.value
        }
    }

    if (action.type === 'UPDATE_SEARCH_QUERY') {
        return {
            ...state,
            searchQuery: action.data.value
        }
    }

    if (action.type === 'RECIVED_REPO_INFO') {
        return {
            ...state,
            userRepos: action.data.data,
            userReposFetchInProgress: false
        }
    }

    if (action.type === 'RECIVED_USER_INFO') {
        return {
            ...state,
            userProfile: action.data.data,
            userProfileFetchInProgress: false
        }
    }

    return state;
}

const store = createStore(newState, applyMiddleware(thunk));

export default store;