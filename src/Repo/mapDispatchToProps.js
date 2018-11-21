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
   }
});

export default mapDispatchToProps;