angular.module("outfitInventory")
  .controller("shoeSliderCtrl", function($scope){

    $scope.shoes = [
      { source: "http://s20.postimg.org/wyzn2c7a5/black_boots.jpg",
        title: "Women's Black Leather Boots" },

      { source: "http://s20.postimg.org/lxq98pty5/brown_dress_shoes.jpg",
        title: "Men's Brown Dress Shoes" },

      { source: "http://s20.postimg.org/f7edd0w65/loafers.jpg",
        title: "Men's Comfy Slip-on Loafers" },

      { source: "http://s20.postimg.org/lavxwxmfx/cowboy_boots.jpg",
        title: "Women's Cowboy Boots" },

      { source: "http://s20.postimg.org/kbaoycdlp/skechers_shoes.jpg",
        title: "Women's Purple and Silver Skecher Sneakers" }
    ];

    $scope.currentIndex = 0;

    $scope.goToNext = function() {
      $scope.currentIndex++;
      if($scope.currentIndex <= $scope.shoes.length - 1) {
        return;

      }
      if($scope.currentIndex === $scope.shoes.length) {
        $scope.currentIndex = 0;
      }
    };

    $scope.goToPrevious = function() {
      $scope.currentIndex--;
      if($scope.currentIndex > -1) {
        return;
      }
      if($scope.currentIndex === -1) {
        $scope.currentIndex = $scope.shoes.length - 1;
      }
    };

    $scope.$watch("currentIndex", function() {
      $scope.shoes.forEach(function(pair) {
        pair.visible = false;
      });

      $scope.shoes[$scope.currentIndex].visible = true;
    });

    // // $scope.addShirt = function($event) {
    // //   if($event.keyCode === 13) {
    // //     $scope.shirts.push($scope.shirtUrl[source]);
    // //
    // //   }
    //       $scope.shirtUrl = "";
    // // }

  });
