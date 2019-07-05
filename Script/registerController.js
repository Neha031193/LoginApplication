// var register=angular.module("register",['ngStorage']);  

app.controller("registerController", ['$scope', '$localStorage', '$state', function ($scope, $localStorage, $state) {
  $scope.user = {};
  $localStorage.user = {};  
  $scope.submit = function (formName) {
    if (formName.$valid) {
      //  alert('form is valid');
      // $scope.submit = function () {
      $localStorage.user = $scope.user
      // alert(JSON.stringify($localStorage.user));
      // }
      $state.go('login');
      // window.location.href = '#/login';
    } else {
      alert('Form values are not valid');
    }
  };

}]);  
