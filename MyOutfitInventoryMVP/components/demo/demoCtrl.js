angular.module("outfitInventory")
  .controller("demoCtrl", function($scope){

    $scope.shirts = [
      { source: "../../view/img/Shirt1.jpg",
        title: "Yellow turtleneck" },

      { source: "../../view/img/Shirt2.jpg",
        title: "Gray sweatshirt" },

      { source: "../../view/img/Shirt5.jpg",
        title: "Pink short-sleeve" }
    ];

    $scope.currentIndex = 0;

    $scope.goToNext = function() {
      $scope.currentIndex++;
      if($scope.currentIndex <= $scope.shirts.length - 1) {
        return;

      }
      if($scope.currentIndex === $scope.shirts.length) {
        $scope.currentIndex = 0;
      }
    };

    $scope.goToPrevious = function() {
      $scope.currentIndex--;
      if($scope.currentIndex > -1) {
        return;
      }
      if($scope.currentIndex === -1) {
        $scope.currentIndex = $scope.shirts.length - 1;
      }
    };

    $scope.$watch("currentIndex", function() {
      $scope.shirts.forEach(function(shirt) {
        shirt.visible = false;
      });

      $scope.shirts[$scope.currentIndex].visible = true;
    });

  });
