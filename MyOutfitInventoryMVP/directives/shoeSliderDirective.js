angular.module("outfitInventory")
  .directive("shoeSliderDirective", function(){
    return {
      restrict: "EAC",
      replace: true,
      controller: "shoeSliderCtrl",
      scope: {
        shoes: "=",
      },
      template: `<div class="item-inventory">

                  <div class="slider">

                  <div class="arrows">
                    <a href="#" ng-click="goToPrevious()">
                      <img src="http://s20.postimg.org/l9w3xqx99/Arrowprev.png" />
                    </a>
                  </div>

                  <div class="slider-shoes" ng-repeat="pair in shoes" ng-show="pair.visible">
                    <img src="{{pair.source}}" />
                  </div>

                  <div class="arrows">
                    <a href="#" ng-click="goToNext()">
                      <img src="http://s20.postimg.org/5a8v0gbtp/Arrownext.png" />
                  </div>

                  </div>



                </div>`

    };

  });

// <input class="clothesInput" ng-model="shirtUrl" ng-keydown="pushedEnter($event)" type="url" placeholder="  Add a shirt (type the url)"></input>
