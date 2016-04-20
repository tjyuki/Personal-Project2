angular.module("outfitInventory")
  .controller("shoeSliderCtrl", function($scope){

    $scope.shoes = [
      { source: "../../view/img/black-boots.jpg",
        title: "Women's Black Leather Boots" },

      { source: "../../view/img/brown-dress-shoes.jpg",
        title: "Men's Brown Dress Shoes" },

      { source: "../../view/img/loafers.jpg",
        title: "Men's Comfy Slip-on Loafers" },

      { source: "../../view/img/cowboy-boots.jpg",
        title: "Women's Cowboy Boots" },

      { source: "../../view/img/skechers-shoes.jpg",
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
