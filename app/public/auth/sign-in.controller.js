(function (ng) {
  'use strict';

  var inject = ['User'];

  var signinController = function (User) {
    var vm = this;
    vm.username = '';
    vm.password = '';
    vm.signedIn = false;

    vm.signIn = signIn;

    function signIn(){
      var result = User.signin(vm.username, vm.password);
      vm.signedIn = result;
    }
  };

  signinController.$inject = inject;

  ng.module('dlx.goozele')
    .controller('SignIn', signinController);
})(window.angular);