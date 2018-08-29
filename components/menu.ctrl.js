'use strict';

(function() {
  angular.module('MenuModule').controller('MenuCtrl', [
    '$location',
    function($location) {
      let vm = this;

      vm.listaMenu = [
        {
          codigo: 'servicos',
          nome: 'SERVIÇOS',
          icon: 'fi-shopping-cart',
        },
        {
          codigo: 'prazos',
          nome: 'PRAZOS',
          icon: 'fi-clock',
        },
        {
          codigo: 'faq',
          nome: 'FAQ',
          icon: 'fi-info',
        },
        {
          codigo: 'adesao',
          nome: 'ADESÃO',
          icon: 'fi-check',
        },
      ];

      vm.isAtivo = pagina => {
        return '/' + pagina === $location.path();
      };

      vm.navegar = para => {
        $location.path(para);
      };
    },
  ]);
})();
