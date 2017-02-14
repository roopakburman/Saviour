var saviour = angular.module('ionicApp', ['ionic', 'ngCordova'])
saviour.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(navigator.splashscreen) {
      navigator.splashscreen.hide();
    }
    // if(window.cordova && window.cordova.plugins.Keyboard) {
    //   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    // }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $stateProvider
    .state('menu', {
      url: "/menu",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'MenuCtrl'
    })
    .state('menu.tabs', {
      url: "/tab",
      views: {
        'menuContent' :{
          templateUrl: "templates/tabs.html"
        }
      }
    })
	.state('menu.tabs.slidebox', {
      url: "/slidebox",
      views: {
        'slide-tab': {
          templateUrl: "templates/slidebox.html",
          controller: ''
        }
      }
    })
	.state('menu.tabs.saviours', {
      url: "/saviours",
      views: {
        'slide-tab': {
          templateUrl: "templates/yourSaviours.html",
          controller: 'historyController'
        }
      }
    })
    .state('menu.tabs.contactUs', {
        url: "/contactUs",
        views: {
          'contactUs-tab': {
            templateUrl: "templates/contactUs.html",
            controller: ''
          }
        }
      })
  	// .state('menu.tabs.pollingPhoto', {
   //      url: "/pollingPhoto",
   //      views: {
   //        'slide-tab': {
   //          templateUrl: "templates/pollingPhoto.html"
   //        }
   //      }
   //    })

    .state('menu.login', {
      url: "/login",
      views: {
        'menuContent': {
          templateUrl: "templates/login.html",
  	  controller: "loginController"
        }
      }
    })
    .state('menu.tabs.buttons', {
      url: "/buttons",
      views: {
        'buttons-tab': {
          templateUrl: "templates/buttons1.html",
          controller: 'buttonController'
        }
      }
    })
//<<-- Landing Page Routes Start here -->
    .state('menu.tabs.buttonsDiv1', {
      url: "/buttonsDiv1",
      views: {
        'buttons-tab': {
          templateUrl: "templates/landing2.html",
          controller: 'landingPageCtrl1'
        }
      }
    })

//<<-- Landing Page Routes End here -->


$urlRouterProvider.otherwise("/menu/login");
})


.controller('loginCtrl', function($ionicSideMenuDelegate){
  //
  $ionicSideMenuDelegate.canDragContent(false);
})
// .controller('userProfileCtrl', function($scope, $http){
  // 	// $scope.nameFilter = currentUser;
  // 	// $http.get('json/userData.json')
  // 	// .then(function(res){
  // 	// 	$scope.userData = res.data;
  // 	// });

  // 	// if(currentUser == 'simplelogin:14'){
  // 	// 		$scope.userName = "Price Jett";
  // 	// 		$scope.userEmail = "jettp@cebglobal.com";
  // 	// 		$scope.userPhone = "571-303-4772";
  // 	// 	}
  // 	// 	else if(currentUser == 'simplelogin:15'){
  // 	// 		$scope.userName = "Tom Monahan";
  // 	// 		$scope.userEmail = "monahant@cebglobal.com";
  // 	// 		$scope.userPhone = "571-303-4013";
  // 	// 	}
  // 	// 	else if(currentUser == 'simplelogin:16'){
  // 	// 		$scope.userName = "Melody Jones";
  // 	// 		$scope.userEmail = "melodyjones@cebglobal.com";
  // 	// 		$scope.userPhone = "571-303-4003";
  // 	// 	}
  // 	// 	else if(currentUser == 'simplelogin:17'){
  // 	// 		$scope.userName = "Warren Thune";
  // 	// 		$scope.userEmail = "thunew@cebglobal.com";
  // 	// 		$scope.userPhone = "571-303-4613";
  // 	// 	}
  // 	// 	else if(currentUser == 'simplelogin:18'){
  // 	// 		$scope.userName = "Haniel Lynn";
  // 	// 		$scope.userEmail = "lynnh@cebglobal.com";
  // 	// 		$scope.userPhone = "571-303-4015";
  // 	// 	}
  // 	// 	else if(currentUser == 'simplelogin:19'){
  // 	// 		$scope.userName = "The Asgardians";
  // 	// 		$scope.userEmail = "garage@cebglobal.com";
  // 	// 		$scope.userPhone = "571-303-6666";
  // 	// 	}
  // 	// 	else if(currentUser == 'simplelogin:22'){
  // 	// 		$scope.userName = "Rob Chen";
  // 	// 		$scope.userEmail = "robchen@cebglobal.com";
  // 	// 		$scope.userPhone = "571-303-6666";
  // 	// 	}
  // 	// 	else if(currentUser == 'simplelogin:23'){
  // 	// 		$scope.userName = "Andrea Birdsong";
  // 	// 		$scope.userEmail = "abirdsong@cebglobal.com";
  // 	// 		$scope.userPhone = "571-303-6666";
  // 	// 	}
  // 	// 	else if(currentUser == 'simplelogin:24'){
  // 	// 		$scope.userName = "Aaron Myers";
  // 	// 		$scope.userEmail = "amyers@cebglobal.com";
  // 	// 		$scope.userPhone = "571-303-6666";
  // 	// 	}
  // 	// 	else if(currentUser == 'simplelogin:25'){
  // 	// 		$scope.userName = "Eve Koopmann";
  // 	// 		$scope.userEmail = "ekoopmann@cebglobal.com";
  // 	// 		$scope.userPhone = "571-303-6666";
  // 	// 	}
  // 	// 	else if(currentUser == 'simplelogin:26'){
  // 	// 		$scope.userName = "Julie Donahue";
  // 	// 		$scope.userEmail = "jdonahue@cebglobal.com";
  // 	// 		$scope.userPhone = "571-303-4756";
  // 	// 	}
  // 	// 	else if(currentUser == 'simplelogin:27'){
  // 	// 		$scope.userName = "Matthew King";
  // 	// 		$scope.userEmail = "matt@king.com";
  // 	// 		$scope.userPhone = "571-303-4756";
  // 	// 	}

  // 	// $scope.contactJames = function(){
  // 	// 	alert('Thanks for your message. James would reach out to you shortly.');

  // 	// 	window.location.href = '#menu/tab/userProfile';
  // 	// }
  // })
  // .controller('tickerCtrl',function($scope, $http){
  // 	$http.get('json/iTicker.json').then(function(res){
  // 		$scope.iTicker = res.data;
  // 	});
  // })
  // .controller('dataCtrl', function($scope, $http){
  // 	$scope.nameFilter = '';
  // 	$http.get('json/data.json').then(function(res){
  // 		$scope.data = res.data;
  // 	});
  // function PeopleCtrl($scope, $http) {

  //     $scope.people = [];

  //     $scope.loadPeople = function() {
  //         var httpRequest = $http({
  //             method: 'POST',
  //             url: '/echo/json/',
  //             data: mockDataForThisTest

  //         }).success(function(data, status) {
  //             $scope.people = data;
  //         });

  //       };
  //     }
// })
// .controller('ListCtrl', function ($scope) {

//   $scope.data = {
//     showDelete: false
//   };

//   $scope.itemButtons = [
//     {
//       text: 'Delete',
//       type: 'button-assertive',
//       onTap: function (item) {
//         alert('Delete Item: ' + item.id + ' ?');
//       }
//     }
//   ];

//   $scope.onItemDelete = function (item) {
//     $scope.items.splice($scope.items.indexOf(item), 1);
//   };

//   $scope.items = [
//     {
//       id: 1
//     },
//     {
//       id: 2
//     },
//     {
//       id: 3
//     },
//     {
//       id: 4
//     },
//     {
//       id: 5
//     },
//     {
//       id: 6
//     },
//     {
//       id: 7
//     },
//     {
//       id: 8
//     },
//     {
//       id: 9
//     },
//     {
//       id: 10
//     }
//   ];
// })

.controller('loginController', function($scope, $state, $ionicModal, $ionicPopup, $ionicSideMenuDelegate) {
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.doLogin = function() {
      $scope.showModal('templates/login-popover.html');
  }

  $scope.doSignUp = function() {
      $scope.showModal('templates/signUp-popover.html');
  }

  $scope.showModal = function(templateUrl) {
      $ionicModal.fromTemplateUrl(templateUrl, {
          scope: $scope,
          animation: 'slide-in-right'
      }).then(function(modal) {
          $scope.modal = modal;
          $scope.modal.show();
      });
  } //slide-in-up
  // Close the modal
  $scope.closeModal = function() {
      $scope.modal.hide();
      $scope.modal.remove()
  };

  $scope.login = function(usr){
    // alert("Welcome back " + usr);
    console.log('Success!');
  };
  $scope.signup = function(usr){
    // alert(usr + ", welcom to Saviour!");
    console.log('Success!');
  };

  $scope.showConfirm = function(usr) {
    var alert = $ionicPopup.alert({
      title: usr + ': My Saviour',
      template: '<center><img src="img/logo.png"/></center> <br>' + usr + ', Welcome to My Saviour!.'
    });
    alert.then(function(res) {
      if(res) {
        console.log(usr + ' You clicked Ok');
        $state.go('menu.tabs.buttons');
      } else {
        console.log(usr + ' You Cancelled!');
      }
    });
  };


  })

.controller('buttonController', function($scope, $ionicPopup, $ionicLoading, $ionicSlideBoxDelegate){
  $scope.initialise = function() {
    // console.log("In Google.maps.event.addDomListener");
    var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
    var mapOptions = {
      center: myLatlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      };
    // console.log(mapOptions);
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    navigator.geolocation.getCurrentPosition(function(pos) {
      // console.log(pos);
      map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      var myLocation = new google.maps.Marker({
        position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        map: map,
        title: "My Location"
        });
      });
    $scope.map = map;
    ////////////////
    var input = /** @type {HTMLInputElement} */ (document.getElementById('pac-input'));
    // Create the autocomplete helper, and associate it with
    // an HTML text input box.
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
      map: map
      });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
      });
    // Get the full place details when the user selects a place from the
    // list of suggestions.
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
      infowindow.close();
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        return;
        }
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }
      // Set the position of the marker using the place ID and location.
      marker.setPlace( /** @type {!google.maps.Place} */ ({
        placeId: place.place_id,
        location: place.geometry.location
        }));
      marker.setVisible(true);
      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
      // 'Place ID: ' + place.place_id + '<br>' +
      place.formatted_address + '</div>');
      infowindow.open(map, marker);
      });
      ////////////////
  };
  google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialise());

  //To get the Auto complete working on Android devices
  $scope.disableTap = function() {
    var container = document.getElementsByClassName('pac-container');
    angular.element(container).attr('data-tap-disabled', 'true');
    var backdrop = document.getElementsByClassName('backdrop');
    angular.element(backdrop).attr('data-tap-disabled', 'true');
    angular.element(container).on("click", function() {
      document.getElementById('pac-input').blur();
    });
  };

  $scope.slide = function(index) {
    $ionicSlideBoxDelegate.slide(index);
  };



  $scope.callOne = function(){
    $scope.showConfirm('Service One');
    };
  $scope.callTwo = function(){
    $scope.showConfirm('Service Two');
    };
  $scope.callThree = function(){
    $scope.showConfirm('Service Three');
    };
  $scope.callFour = function(){
    $scope.showConfirm('Service Four');
    };
  $scope.callFive = function(){
    $scope.showConfirm('Service Five');
    };
  $scope.callSix = function(){
    $scope.showConfirm('Service Six');
    };
  $scope.callSeven = function(){
    $scope.showConfirm('Service Seven');
    };
  $scope.callEight = function(){
    $scope.showConfirm('Service Eight');
    };
  $scope.callNine = function(){
    $scope.showConfirm('Service Nine');
    };
  $scope.callTen = function(){
    $scope.showConfirm('Service Ten');
    };

  $scope.showConfirm = function(activity) {
    var alert = $ionicPopup.alert({
      title: 'My Saviour: ' + activity,
      template: '<center><img src="img/logo.png"/></center> <br>Welcome to My Saviour!.'
    });
    alert.then(function(res) {
      if(res) {
        console.log('You clicked Ok');

      } else {
        console.log('You Cancelled!');
      }
    });
  };
})

.controller('historyController', function($scope, $http){
  var users = [];
  var url = 'json/userData.json';
  $http.get(url).success( function(response) {
        $scope.users = response;
  });
})


.controller('feedCtrl', function($scope, $http){
	// $http.get('json/feed.json').then(function(res){
	// 	$scope.feed = res.data;
	// });
	$http.get('json/iNew.json').then(function(res){
		$scope.iNew = res.data;
	});
})
.controller('emailCtrl', function($scope, $http){
    $scope.sendEmail = function(){
      console.log('activated');
        if(window.plugins && window.plugins.emailComposer){
            window.plugins.emailComposer.showEmailComposerWithCallback(function(result){
            },
            "Saviour Mobile App!", //Subject line
            "",                 //Email Body
            ["roopak.burman@gmail.com"],    //To email
            null,               // CC
            null,               //BCC
            false,              //isHTML
            null,               //Attachments
            null);              //Attachments data
        }
    }
    // $http.get('/json/iNew.json').success(function (data) {

    //             $scope.MyRecCollection = data;
    //             console.table(data);
    //     })
})


.controller('shareCtrl', function($scope, $http){
  // $scope.gridOptions1 = {};
  // $scope.gridOptions2 = {};
  // $http.get('json/railroad/railroad.json').success(function(data){
		// $scope.chkdr = data;
  //   $scope.gridOptions1.data = $scope.chkdr[0].councellor;
  //   // $scope.gridOptions1.data = data;
  //   // console.table(gridOptions1.data);
  // });
})
.controller('SlideboxCtrl', function($scope, $ionicSlideBoxDelegate) {
      // $scope.nextSlide = function() {
      //   $ionicSlideBoxDelegate.next();
      // }
      // $scope.contactAM = function() {
      //    $scope.data = {}
      //    // An elaborate, custom popup
      //    var myPopup = $ionicPopup.show({
      //      template: '<textarea ng-model="data.wifi">',
      //      title: 'Contact your Account Manager',
      //      subTitle: 'Please type in your question and we will get back to you.',
      //      scope: $scope,
      //      buttons: [
      //        { text: 'Cancel'},
      //        {
      //          text: '<b>Contact AM</b>',
      //          type: 'button-assertive',
      //          onTap: function(e) {
      //            if (!$scope.data.wifi) {
      //              //don't allow the user to close unless he enters text
      //              e.preventDefault();
      //            } else {
      //              return $scope.data.wifi;
      //            }
      //          }
      //        },
      //      ]
      //    });
      //   };
})
.controller('MenuCtrl', function($scope, $ionicSideMenuDelegate) {

});
// .controller('AppCtrl', function() {
//
//   ionic.Platform.ready(function() {
//
//   });
//
//  });
