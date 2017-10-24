var app = angular.module('app');
app.controller("HelloController", ['$scope', '$rootScope', function ($scope, $rootScope) {
    //Package Info
    $scope.Broadband = "Broadband";
    $scope.hvp = "High Value Products";
    $scope.video = "Video";
    $scope.voice = "Voice";
    $scope.showVoice = false;
    $scope.showVideo = false;
    $scope.showBroadband = false;
    $scope.$on("myFirstBraodcast", function (b, data) {
        console.log("listining broadcasr fsdsd");
    })
}]);
