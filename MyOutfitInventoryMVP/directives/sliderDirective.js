angular.module("outfitInventory")
  .directive("sliderDirective", function(){
    return {
      restrict: "EA",
      replace: true,
      scope: {
        shirts: "=",
      },
      // link: function(scope, element, attribute) {
      //   scope.currentIndex = 0;
      //
      //   scope.goToNext = function() {
      //     if(scope.currentIndex < scope.shirts.length - 1) {
      //       scope.currentIndex++;
      //       scope.currentIndex = 0;
      //     }
      //   };
      //
      //   scope.goToPrevious = function() {
      //     if(scope.currentIndex > 0) {
      //       scope.currentIndex--;
      //       scope.currentIndex = scope.shirts.length - 1;
      //     }
      //   };
      //
      //   scope.$watch("currentIndex", function() {
      //     scope.shirts.forEach(function(shirt) {
      //       shirt.visible = false;
      //     });
      //
      //     scope.shirts[scope.currentIndex].visible = true;
      //   });
      //
      // },
      template: `<div><div class="slider-shirts" ng-repeat="shirt in shirts" ng-show="shirt.visible">
              <img src="{{shirt.source}}" />
            </div>
            <div class="arrows">
              <a href="#" ng-click="goToPrevious()">
                <img src="../../view/img/Arrowprev.png" />
              </a>
              <a href="#" ng-click="goToNext()">
                <img src="../../view/img/Arrownext.png" />
            </div></div>`,
      controller: "demoCtrl"
    };

  });
