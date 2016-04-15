angular.module("outfitInventory", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider
      .otherwise("/");

      $stateProvider
        .state("home", {
          url: "/",
          controller: "homeCtrl",
          templateUrl: "components/home/homeTmpl.html"
        })

        .state("about", {
          url: "/about",
          controller: "homeCtrl",
          templateUrl: "components/home/aboutTmpl.html"
        })

        .state("login", {
          url: "/login",
          controller: "loginCtrl",
          templateUrl: "components/login/loginTmpl.html"
        })

        .state("getstarted", {
          url: "/signup",
          controller: "signupCtrl",
          templateUrl: "components/signup/signupTmpl.html"
        })

        .state("signup", {
          url: "/signup",
          controller: "signupCtrl",
          templateUrl: "components/signup/signupTmpl.html"
        })

        .state("demo", {
          url: "/demo",
          // controller: "demoCtrl",
          templateUrl: "components/demo/demoTmpl.html"
        })


  });
