'use strict';

(function() {
  angular
    .module('MenuModule', [])
    .component('menuApp', {
      templateUrl: './components/menu.tpl.html',
      controller: 'MenuCtrl',
      controllerAs: 'vm',
    })
    .component('menuMobile', {
      templateUrl: './components/menu-mobile.tpl.html',
      controller: 'MenuCtrl',
      controllerAs: 'vm',
    })
    .component('menuRodape', {
      templateUrl: './components/menu-rodape.tpl.html',
      controller: 'MenuCtrl',
      controllerAs: 'vm',
    })
    .component('menuScroll', {
      templateUrl: './components/menu-scroll.tpl.html',
      controller: 'MenuCtrl',
      controllerAs: 'vm',
    });
})();
