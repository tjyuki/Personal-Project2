angular.module("outfitInventory")
  .controller("pantsSliderCtrl", function($scope){

    $scope.pants = [
      { source: "http://s20.postimg.org/iaf3geb4t/brown_cordoroys.jpg",
        title: "Men's Brown Cordoroys"},

      { source: "http://s20.postimg.org/f8td3k4bh/buffalo.jpg",
        title: "Women's Buffalo Pajama Pants" },

      { source: "http://s20.postimg.org/i2rgjw065/kitty_xmas.jpg",
        title: "Women's Holiday Kitten Leggings" },

      { source: "http://s20.postimg.org/gqetf4925/pink_leopard.jpg",
        title: "Women's Pink Leopard Print Pajama Pants" },

      { source: "http://s20.postimg.org/3v6tsctst/skinny_jeans.jpg",
        title: "Women's Skinny Jeans" }
    ];

    $scope.currentIndex = 0;

    $scope.goToNext = function() {
      $scope.currentIndex++;
      if($scope.currentIndex <= $scope.pants.length - 1) {
        return;

      }
      if($scope.currentIndex === $scope.pants.length) {
        $scope.currentIndex = 0;
      }
    };

    $scope.goToPrevious = function() {
      $scope.currentIndex--;
      if($scope.currentIndex > -1) {
        return;
      }
      if($scope.currentIndex === -1) {
        $scope.currentIndex = $scope.pants.length - 1;
      }
    };

    $scope.$watch("currentIndex", function() {
      $scope.pants.forEach(function(pant) {
        pant.visible = false;
      });

      $scope.pants[$scope.currentIndex].visible = true;
    });

    // $scope.addShirt = function($event) {
    //   if($event.keyCode === 13) {
    //     $scope.shirts.push($scope.shirtUrl[source]);
    //     $scope.shirtUrl = "";
    //   }
    // }

  });
