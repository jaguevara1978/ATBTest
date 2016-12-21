( function ( ) {    'use strict';    /**     * @ngdoc function     * @name app.controller:SignIn     * @author ALEXANDER GUEVARA http://arkeas.com     * @description     * # SignIn     */    angular.module('app.signin', [ ] );    angular.module( 'app.signin' ).controller( 'SignIn', [ '$scope', 'ApiService', '$location', '$rootScope' , '$timeout', SignIn ] );    function SignIn( $scope, ApiService, $location, $rootScope, $timeout ) {        var vm = this;                vm.loading = false;        vm.error = false;        // Testing only, must be commented        /*        vm.data = {            uid: 'alexander',            pwd: 'Alexander@'        };        */        // Password has to be 8-12 characters long        // Has to include Capital, lower case, and one of the following symbols: %#*&!@        // Cannot have more than 3 letters together (i.e. "Abe4" is OK, but "Abig!" is not)        // (?=.*[a-z]): At least one lower case character        // (?=.*[A-Z]): At least one upper case character        // (?=.*[%#\*&!@]): At least one of the following: %#*&!@        vm.regex = new RegExp( "^(?=.*[a-z])(?=.*[A-Z])(?=.*[%#\*&!@])(?=.{8,})" );        vm.signin = signin;        init( );                function init( ) {            // this is just to emulate the status of the user after signed in            $rootScope.signedIn = false;        };            function signin( ) {            if ( !vm.loading ) {                vm.loading = true;                //console.log( 'SignIn Method' );                var response = ApiService.post( 'signin', vm.data );                // A couple of seconds to emulate an API request. Just for fun!                $timeout( function( ) {                    vm.msg = response.msg;                    vm.error = response.error;                    if ( !response.error ) {                        vm.data = response.data;                        $rootScope.signedIn = true;                        $rootScope.uid = vm.data.uid;                        $location.path( '/tabs/info' );                    }                    vm.loading = false;                    console.log( response );                },  2000 );            }        };    }})();