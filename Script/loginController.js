
app.controller("loginController", ['$scope', '$localStorage', '$state', function ($scope, $localStorage, $state) {
  $scope.user = {};
  $scope.submit = function (formName) {
    if (formName.$valid) {
      if ($localStorage.user.email == $scope.user.email && $localStorage.user.pwd == $scope.user.pwd) {
        // window.location.href = '#/success';
        $state.go('success state');
      } else {
        alert('Please enter registered email and password.');
      }
    } else {
      alert('Form values are not valid');
    }
  }
}]);  



