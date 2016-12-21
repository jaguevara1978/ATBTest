( function ( ) {
'use strict';

/**
 * @ngdoc service
 * @name app.CommonService
 * @author ALEXANDER GUEVARA http://arkeas.com
 * @description
 * # CommonService, must be used by all the controllers to establish connection to the API
 * Factory in the app.
 */
angular.module('app').factory( 'ApiService', [ '$http', ApiService ] );

    function ApiService( $http ) {
        var service = {};

        // This is temp ID list, in real production app, this should be safely 
        // kept inside a DB
        var ids = [
            { "uid": "rafael" },
            { "uid": "dave" },
            { "uid": "alexander" },
            { "uid": "john" },
            { "uid": "jody" }
        ];
        var vals = [];
        getVals( );

        service.get = get;
        service.post = post;

        return service;

/**********************************/
        function get( endpoint, id ) {
            if ( endpoint == 'search' ) {
                return $http.get( 'https://www.googleapis.com/customsearch/v1?q='+ id +'&cx=014314335327711448976%3A1rmwejio4g4&num=5&key=AIzaSyDMCz80wZneE1CAu5tL6D0FGCeCCoP7KZQ' ).then( handleSuccess, handleErrorResponse );
            }
        }

        function post( endpoint, data ) {
            var response = { error: false, msg: '' };
            var filteredId;
            // Simulate an API's endpoint
            if ( endpoint == 'signin' ) {
                var uidSearch = data.uid;
                filteredId = ids.filter( function( obj ) {
                    var actualUid = obj.uid;
                    // Compare strings using RegEx to avoid upper and lower case issues
                    // Using 'i' to make it case insesitive
                    var regex = new RegExp('^' + actualUid + '$', 'i');
                    if ( regex.test( uidSearch ) ) {
                        return obj;
                    }
                } ) [ 0 ];

                response.error = filteredId == undefined;
                if ( response.error ) {
                    response.msg = '&#9679; Sorry this ID does not exist. Please try one of these: <br>(' + vals + ')<br><br>';
                }

                //Password validation
                // Password has to be 8-12 characters long
                // Has to include Capital, lower case, and one of the following symbols: %#*&!@
                // Cannot have more than 3 letters together (i.e. "Abe4" is OK, but "Abig!" is not)
                // (?=.*[a-z]): At least one lower case character
                // (?=.*[A-Z]): At least one upper case character
                // (?=.*[%#\*&!@]): At least one of the following: %#*&!@
                var regexPwd = new RegExp( "^(?=.*[a-z])(?=.*[A-Z])(?=.*[%#\*&!@])(?=.{8,12})" );
                if ( !regexPwd.test( data.pwd ) ) {
                    response.msg += '&#9679; The password is invalid<br>';
                    response.error = true;
                } 
                // Now Validate > Cannot have more than 3 letters together (i.e. "Abe4" is OK, but "Abig!" is not)
                var regexAlpha = new RegExp( "^[A-Za-z]$" );
                var alphaCounter = 0;
                data.pwd.split( '' ).forEach( function( character ) {
                    // If more than 3 characters in a row then no more validations needed
                    if ( alphaCounter > 3 ) return;

                    //If character is a alpha then validate the next one till maximum 3
                    if ( regexAlpha.test( character ) ) {
                        alphaCounter ++;
                    } else {
                        // If does not match then counter goes back to zero
                        alphaCounter = 0;
                    }

                    // If we have more than 3 characters in a row then the password is not valid
                    if ( alphaCounter > 3 ) {
                        response.msg += '&#9679; The password Cannot have more than 3 letters together';
                        response.error = true;
                    }
                    
                });

                // For Loop approach, decided to go for .filter to try ad improve 
                //performance; though, now that is not too important.
                /*
                var obj;
                for ( var i = 0; i < ids.length; i++ ) { 
                    var tmpObj = ids[i];
                    var actualUid = tmpObj.uid;
                    // Compare strings using RegEx to avoid upper and lower case issues
                    // Using 'i' to make it case insesitive
                    //console.log( 'match: ', actualUid );
                    var regex = new RegExp('^' + actualUid + '$', 'i');
                    if ( regex.test( uidSearch ) ) {
                        obj = tmpObj;
                    }
                    
                }
                */
    
                if ( !response.error ) {
                    response.data = {
                        uid: data.uid,
                        //Just for testing
                        //pwd: data.pwd
                    };
                    response.msg = 'Authentication Successful';
                }

                return response;
            } else {
                response.error = true;
                response.msg = 'The endpoint is not defined in the API: '+ endpoint;
            }

        }

/**********************************/
        function getVals( ) {
            ids.forEach( function( obj ) {
                vals.push( obj.uid );
            });
            return vals;
        }

        // Private functions
        function handleSuccess( data ) {
            data.success = true;
            return data;
        }

        function handleErrorResponse( data ) {
            return { success: false, message: data.data.msg, data: data.data };
        }

        function handleError( error ) {
            return function ( ) {
                return { success: false, message: error };
            };
        }
    }

})();