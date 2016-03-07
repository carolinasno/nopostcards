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
    countries: []
  };

  $scope.allContacts = function(){
    contactsApi.allContacts().then(function(response){
      $scope.contacts = response.data.contacts;
    });
  }

  $scope.countryCheck = function(country){
    var index = $scope.newContact.countries.indexOf(country);
    if (index > -1){
      $scope.newContact.countries.splice(index, 1);
    } else {
      $scope.newContact.countries.push(country);
    }
    console.log('countries ' + $scope.newContact.countries);
  }

  $scope.post = function(){
    contactsApi.post($scope.newContact).then(function(){
      console.log($scope.newContact);
      $scope.allContacts();
    });
  }

}]);
