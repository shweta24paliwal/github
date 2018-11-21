import { createStore } from 'redux'

const defaultState ={
    selectedType:"All",
    selectedLang:"All",
    searchQuery:"",
    typeValues: ["All","Sources","Forks","Archived","Mirrors"],
    LanguageValues: ["All", "HTML", "JavaScript","CSS"]
};

function newState(state = defaultState, action){
   
    if (action.type === 'UPDATE_TYPE') {
        return {
            ...state,
            selectedType: action.data.value
        }
    }

    if (action.type === 'UPDATE_LANG') {
        return {
            ...state,
            selectedType: action.data.value
        }
    }

    if (action.type === 'UPDATE_SEARCH_QUERY') {
        return {
            ...state,
            searchQuery: action.data.value
        }
    }

    return state;
}
const store = createStore(newState);

export default store;