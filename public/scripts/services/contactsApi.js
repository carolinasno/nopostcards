var api = angular.module('contactsApiFactory', []);

api.factory('contactsApi', ['$http', function($http){

  var baseUrl = 'api/contacts';

  var contactsInterface = {};

  contactsInterface.allContacts = function(){
    return $http.get(baseUrl);
  }

  contactsInterface.post = function(newContact){
    var payload = {contact: newContact};
    // console.log(payload);
    return $http.post(baseUrl, payload);
  }

  return contactsInterface;

}]);
