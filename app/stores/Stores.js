var AppDispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/Constants');
var _ = require('underscore');
var JsonData=require('../data/fakeData').fakeData;
var _searchMatch=[];


function searchContent (str) {
  _searchMatch=JsonData.filter(function(value,index,arr){
    if (arr[index].name.indexOf(str) !==-1) return true;
    else return false;
  })
}
// Extend ProductStore with EventEmitter to add eventing capabilities
var AppStores = _.extend({}, EventEmitter.prototype, {

  getSearchResult : function () {
    return _searchMatch;
  },
  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    case AppConstants.CHANGE_SEARCH:
      searchContent(action.searchValue);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  AppStores.emitChange();

  return true;

});

module.exports = AppStores;
