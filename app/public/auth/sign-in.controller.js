(function (ng) {
  'use strict';

  var inject = [];

  var signinController = function () {
    var vm = this;
    vm.username = '';
    vm.password = '';
  };

  signinController.$inject = inject;

  ng.module('dlx.goozele')
    .controller('SignIn', signinController)
})(window.angular);