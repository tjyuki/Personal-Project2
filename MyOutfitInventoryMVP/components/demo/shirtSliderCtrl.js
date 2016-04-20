angular.module("outfitInventory")
  .controller("shirtSliderCtrl", function($scope){

    $scope.shirts = [
      { source: "../../view/img/adv-time.jpg",
        title: "Steam Punk Adventure Time Tee" },

      { source: "../../view/img/alien.jpg",
        title: "Alien Invasion Black Women's Tee" },

      { source: "../../view/img/fallout.jpg",
        title: "Blue Fallout4 Tee" },

      { source: "../../view/img/gotg.jpg",
        title: "Guardians of the Galaxy Tee" },

      { source: "../../view/img/forest-spirit.jpg",
        title: "Purple Princess Mononoke Forest Spirit Tee" },

      { source: "../../view/img/pixel-xmas.jpg",
        title: "Pixel Christmas Women's Tee" },

      { source: "../../view/img/dress-shirt.jpg",
        title: "Men's Light Blue Dress Shirt" },

        { source: "../../view/img/totoro-sweatshirt.jpg",
          title: "Women's Totoro Sweatshirt" }
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

    // // $scope.addShirt = function($event) {
    // //   if($event.keyCode === 13) {
    // //     $scope.shirts.push($scope.shirtUrl[source]);
    // //
    // //   }
    //       $scope.shirtUrl = "";
    // // }

    $scope.displayItem = function() {
      
    }

  });
