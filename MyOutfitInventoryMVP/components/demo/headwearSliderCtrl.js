angular.module("outfitInventory")
  .controller("headwearSliderCtrl", function($scope){

    $scope.headwear = [
      { source: "../../view/img/sunglasses.jpg",
        title: "Super Villain Sunglasses" },
      { source: "../../view/img/sunglasses2.jpg",
        title: "Sunglasses" }
    ];

    $scope.currentIndex = 0;

    $scope.goToNext = function() {
      $scope.currentIndex++;
      if($scope.currentIndex <= $scope.headwear.length - 1) {
        return;

      }
      if($scope.currentIndex === $scope.headwear.length) {
        $scope.currentIndex = 0;
      }
    };

    $scope.goToPrevious = function() {
      $scope.currentIndex--;
      if($scope.currentIndex > -1) {
        return;
      }
      if($scope.currentIndex === -1) {
        $scope.currentIndex = $scope.headwear.length - 1;
      }
    };

    $scope.$watch("currentIndex", function() {
      $scope.headwear.forEach(function(accessory) {
        accessory.visible = false;
      });

      $scope.headwear[$scope.currentIndex].visible = true;
    });

    // // $scope.addShirt = function($event) {
    // //   if($event.keyCode === 13) {
    // //     $scope.shirts.push($scope.shirtUrl[source]);
    // //
    // //   }
    //       $scope.shirtUrl = "";
    // // }

  });
