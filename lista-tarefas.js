(function () {
  "use strict";

  //MODUL
  angular.module('listaMateriaisApp', []);

  //COMPONENT
  angular.module('listaMateriaisApp')
    .controller('listaMateriaisController', listaMateriaisController);

  listaMateriaisController.$inject = ['$scope'];

  function listaMateriaisController($scope) {

    var vm = this;

    vm.materiais = [
      { text: 'Tijolo', feito: false },
      { text: 'Cimento', feito: false }
    ];

    vm.restam = restam;
    vm.addMaterial = addMaterial;
    vm.arquivar = arquivar;

    function restam() {
      var count = 0;
      angular.forEach(vm.materiais, function (mtr) {
        if (!mtr.feito) count++;
      });
      return count;
    }

    function addMaterial() {
      vm.materiais.push({ text: vm.materialText, feito: false });
      vm.materialText = '';
    }

    function arquivar() {
      // var oldMaterial = vm.materiais;
      // vm.materiais = [];
      //angular.forEach(oldMaterial, function (mtr) {
      //  if (!mtr.feito) {
      //     vm.materiais.push(mtr);
      //  }
      // });

      vm.materiais = vm.materiais.filter(function (mtr) {
        return !mtr.feito
      });
    }

  }

})();