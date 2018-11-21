import axios from "axios";

const mapDispatchToProps = dispatch => ({
   updateType(data) {
       dispatch({
           type: 'UPDATE_TYPE',
           data: data
       });
   }, 

   updateLanguage(data) {
    dispatch({
        type: 'UPDATE_LANG',
        data: data
    });
   }, 

   updateSearchQuery(data) {
    dispatch({
        type: 'UPDATE_SEARCH_QUERY',
        data: data
    });
   },

   getRepoData() {
      dispatch(function(dispatch){
        dispatch({type: "REQUESTED_REPO_INFO", data: true});
        
        axios.get('https://api.github.com/users/supreetsingh247/repos')
        .then(function (response) {
            console.log(response);
            dispatch({type: "RECIVED_REPO_INFO", data: response});
        })
        .catch(function (error) {
            console.log(error);
        });

        // setTimeout(function() {
        //     dispatch({type: "CHANGED", data: "ANSHU"});    
        // }, 4000);
      });  
   }
});

export default mapDispatchToProps;