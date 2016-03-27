(function (ng) {
  'use strict';

  var inject = [];

  var userService = function () {
    this.signin = trySignIn;
    this.signout = signOut;

    function trySignIn(username, password) {
      console.log('Signing user in...');
      console.log('Username: ' + username);
      console.log('Password: ' + password);

      return true;
    }

    function signOut() {

    }
  };

  userService.$inject = inject;

  ng.module('dlx.goozele')
    .service('User', userService);
})(window.angular);