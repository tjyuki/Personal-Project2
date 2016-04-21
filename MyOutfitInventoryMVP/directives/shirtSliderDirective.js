angular.module("outfitInventory")
  .directive("shirtSliderDirective", function(){
    return {
      restrict: "EAC",
      replace: true,
      controller: "shirtSliderCtrl",
      scope: {
        shirts: "=",
      },
      template: `<div class="item-inventory">

                  <div class="slider">

                    <div class="arrows">
                      <a href="#" ng-click="goToPrevious()">
                        <img src="http://s20.postimg.org/l9w3xqx99/Arrowprev.png" />
                      </a>
                    </div>

                    <div class="slider-items" ng-repeat="shirt in shirts" ng-show="shirt.visible">
                      <a href="#" ng-click="displayItem()">
                        <img src="{{shirt.source}}" />
                      </a>
                    </div>

                    <div class="arrows">
                      <a href="#" ng-click="goToNext()">
                        <img src="http://s20.postimg.org/5a8v0gbtp/Arrownext.png" />
                      </a>
                    </div>



                  </div>



                </div>`

    };

  });

// <input class="clothesInput" ng-model="shirtUrl" ng-keydown="pushedEnter($event)" type="url" placeholder="  Add a shirt (type the url)"></input>
