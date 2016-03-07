var app = angular.module('noPostcards', ['contactsApiFactory']);

app.controller('contactsController', ['$scope', 'contactsApi', function($scope, contactsApi){

  $scope.contacts = [];

  $scope.newContact = {
    firstname: null,
    lastname: null,
    addressone: null,
    addresstwo: null,
    city: null,
    state: null,
    zipcode: null,
    countries: null
  };

  $scope.allContacts = function(){
    contactsApi.allContacts().then(function(response){
      $scope.contacts = response.data.contacts;
    });
  }

  $scope.post = function(){
    contactsApi.post($scope.newContact).then(function(){
      console.log($scope.newContact);
      $scope.allContacts();
    });
  }

}]);
