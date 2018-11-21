import axios from "axios";

const mapDispatchToProps = dispatch => ({
   getProfileData() {
      dispatch(function(dispatch){    
        axios.get('https://api.github.com/users/supreetsingh247')
        .then(function (response) {
            console.log(response);
            dispatch({type: "RECIVED_USER_INFO", data: response});
        })
        .catch(function (error) {
            console.log(error);
        });
      });  
   }
});

export default mapDispatchToProps;