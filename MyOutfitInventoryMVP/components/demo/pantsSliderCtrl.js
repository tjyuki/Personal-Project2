angular.module("outfitInventory")
  .controller("pantsSliderCtrl", function($scope){

    $scope.pants = [
      { source: "../../view/img/brown-cordoroys.jpg",
        title: "Men's Brown Cordoroys"},

      { source: "../../view/img/buffalo.jpg",
        title: "Women's Buffalo Pajama Pants" },

      { source: "../../view/img/kitty-xmas.jpg",
        title: "Women's Holiday Kitten Leggings" },

      { source: "../../view/img/buffalo.jpg",
        title: "Women's Buffalo Pajama Pants" },

      { source: "../../view/img/pink-leopard.jpg",
        title: "Women's Pink Leopard Print Pajama Pants" },

      { source: "../../view/img/skinny-jeans.jpg",
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
