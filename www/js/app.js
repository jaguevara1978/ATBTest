    /**
     * @ngdoc overview
     * @name app
     * @author ALEXANDER GUEVARA http://arkeas.com
     * @description
     *
     * Main module of the application.

     1) Create a hybrid mobile app for iOS that:
     -Has two screens: a Login screen and screen for info
     The Login Screen:
     Has an ID field:
     ID has to be 3-10 characters
     The ID has to be a real name (i.e. "Abe" is OK but "Dog" is not)
     Need to be part of a set list of real names (feel free to set the names yourself)
     Has a password field:
     Password has to be 8-12 characters long
     Has to include Capital, lower case, and one of the following symbols: %#*&!@
     Cannot have more than 3 letters together (i.e. "Abe4" is OK, but "Abig!" is not)
     
     Note: Do not check the password against a record to see if the password is correct for that user, any password will be successful, as long as it complies with the above rules.
     
     Has a 'Login' button that reviews the above and if successful, takes you to the next screen.
     
     The Info screen:
     Has two fields:
     One to display the ID the person used to login
     One to retrieves the first 5 google results for that ID
     
     
     Pre-requisites:
     Screens should have the same style, so please use CSS
     The app should be ATB themed, or close to it, so please use graphics and styles that are close to what we use.

     */
    angular.module( 'app', [
        'ionic'
        ,'app.signin'
        ,'app.info'
    ] )
      
.run( function( $ionicPlatform ) {
  $ionicPlatform.ready(function( ) {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config( function ( $stateProvider, $urlRouterProvider ) {
    $stateProvider
        .state( 'tabs', {
            url: '/tabs',
            abstract: true,
            templateUrl: 'views/tabs.html'
        } )

        .state( 'tabs.signin', {
            url: '/signin',
            views: {
                'signin': {
                    templateUrl: 'views/signin.html',
                    controller: 'SignIn',
                    controllerAs: 'vm'
                }
            }
        } )

        .state( 'tabs.info', {
            url: '/info',
            views: {
                'info': {
                    templateUrl: 'views/info.html',
                    controller: 'Info',
                    controllerAs: 'vm'
                }
            }
        } )

    $urlRouterProvider.otherwise( '/tabs/signin' )
} );