import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import $ from "jquery";

var CHANGE_EVENT = 'change';

var _message = '';

var AuthStore = assign({}, EventEmitter.prototype, {
  
  getMessage: function() {
    return _message;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }


});

AppDispatcher.register( function( payload ) {
    
    switch( payload.actionName ) {

        // Do we know how to handle this action?
        case 'login':

            // We get to mutate data!
            var jsonStr = {
                "email":"user1",
                "password":"user1"
            };
            $.post('/auth/login', jsonStr , function(response) {
                // Do something with the request
                console.log(response);
                if(response.error != undefined){
                  _message = response.error;
                } else {
                  window.location.href = "/";
                }
                
                AuthStore.emitChange();

            }, 'json');

            
            break;

    }

});

module.exports = AuthStore;