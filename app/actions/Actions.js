var AppDispatcher = require('../dispatcher/Dispatcher');
var AppConstants = require('../constants/Constants');

// Define action methods
var AppActions = {

  changeSearch: function(searchValue) {
    AppDispatcher.handleAction({
      actionType: AppConstants.CHANGE_SEARCH,
      searchValue: searchValue
    })
  }

};

module.exports = AppActions;
