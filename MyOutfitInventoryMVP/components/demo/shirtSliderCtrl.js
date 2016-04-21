angular.module("outfitInventory")
  .controller("shirtSliderCtrl", function($scope){

    $scope.shirts = [
      { source: "http://s20.postimg.org/6ayzvcg65/adv_time.jpg",
        title: "Steam Punk Adventure Time Tee" },

      { source: "http://s20.postimg.org/60rhc01jx/alien.jpg",
        title: "Alien Invasion Black Women's Tee" },

      { source: "http://s20.postimg.org/mfq02b8wt/fallout.jpg",
        title: "Blue Fallout4 Tee" },

      { source: "http://s20.postimg.org/w2tic11wd/gotg.jpg",
        title: "Guardians of the Galaxy Tee" },

      { source: "http://s20.postimg.org/yvmpw228t/forest_spirit.jpg",
        title: "Purple Princess Mononoke Forest Spirit Tee" },

      { source: "http://s20.postimg.org/dv1q89525/pixel_xmas.jpg",
        title: "Pixel Christmas Women's Tee" },

      { source: "http://s20.postimg.org/djf7ydial/dress_shirt.jpg",
        title: "Men's Light Blue Dress Shirt" },

        { source: "http://s20.postimg.org/7p0a1ib4t/totoro_sweatshirt.jpg",
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
