import AppDispatcher from '../dispatchers/AppDispatcher';

var AuthAction = {

  login: function() {
  	  console.log("Entro 1");
      console.log(AppDispatcher);
      AppDispatcher.dispatch({
        actionName: 'login',
        newItem: { name: 'Marco' } // example data
      });
  }

}

module.exports = AuthAction;