

var moduleA = angular.module("Totolist", []);

moduleA.directive("toDoList", function ($http) {
    return {
        restrict: 'A',
        templateUrl: "/MyDeals/MyDeals",
        link: function ($scope, element) {
            // linking
        }
    };

});

moduleA.controller("HomeControllers", ['$scope', '$http', '$interval', '$timeout', 
function ($scope, $http, $interval, $timeout) {
    $scope.showError = false;
    $scope.email = {
        text: ''
    };
    $scope.todolistShow = false;
    $scope.password = "";
    //Sign up
    $scope.signup=function(){
        localStorage.setItem('name', $scope.email.text);
        localStorage.setItem('password', $scope.password);
    }
    $scope.login = function () {
        if (localStorage.getItem("name") == $scope.email.text && localStorage.getItem("password") == $scope.password) {
            $scope.showError = false;
            $scope.todolistShow = true;
            //hide the login model
            $('.modal-backdrop.in').css("display", "none");
        } else {
            $scope.todolistShow = false;
            $scope.showError = true;
        }
    }


    $scope.todos = [
  { text: 'Clean Home', done: false },
  { text: 'Take Id Card', done: false }
    ];

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };


    $scope.addTodo = function () {
        $scope.todos.push({ text: $scope.formTodoText, done: false });
        $scope.formTodoText = '';
    };

    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function (todo) {
            return !todo.done;
        });
    };
    $scope.logout = function () {
        localStorage.clear();
        $scope.todolistShow = true;
        $scope.logoutTrue = true;
    }

}]);




