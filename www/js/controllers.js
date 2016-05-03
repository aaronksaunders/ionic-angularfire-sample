angular.module('starter.controllers', [])
    //
    // A simple controller that logs in a user
    //
    .controller('LoginCtrl', [
        '$scope', '$firebaseAuth', 'AUTHREF', '$state',
        function LoginCtrl($scope, $firebaseAuth, AUTHREF, $state) {
            console.log("Login Controller");

            /**
             * 
             */
            $scope.doLoginAction = function (_credentials) {

                $firebaseAuth(AUTHREF).$authWithPassword(_credentials)
                    .then(function (authData) {
                        console.log("Logged in as:", authData.uid);
                        $state.go('home', {})
                    }).catch(function (error) {
                        console.error("Authentication failed:", error);
                    });
            }
        }])
    //
    // A simple controller that fetches a list of data from a service
    //
    .controller('HomeCtrl', [
        '$scope', '$firebaseArray', 'user', '$firebaseAuth', '$state', 'AUTHREF', 'TEXT_ITEMS_REF',
        function HomeCtrl($scope, $firebaseArray, user, $firebaseAuth, $state, AUTHREF, TEXT_ITEMS_REF) {
            console.log("Home Controller", user);

            $scope.textItems = $firebaseArray(TEXT_ITEMS_REF);

            /**
             *  example of how to do nested queries with angularFire
             */
            $scope.getUsersAndMessages = function () {

                var userRef = new Firebase("https://clearlyinnovative-firebasestarterapp.firebaseio.com/users");

                // get all the users...
                $firebaseArray(userRef).$loaded()
                    .then(function (_allUsers) {

                        // now loop thru and get the messages
                        $scope.users = _allUsers.map(function (_user) {
                            var msgRef = new Firebase("https://clearlyinnovative-firebasestarterapp.firebaseio.com/userObjects/public-messages/" + _user.$id);

                            // get the user's messages
                            _user.msgs = $firebaseArray(msgRef)

                            // return the user object
                            return _user;
                        })
                        console.log($scope.users)
                    })
                    .catch(function (error) {
                        console.log("Error:", error);
                    });
            }

            /**
             * 
             */
            $scope.doLogoutAction = function () {
                $firebaseAuth(AUTHREF).$unauth()
                $state.go('login', {})
            }
        }]);