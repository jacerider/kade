(function() {
  'use strict';

  angular.module('app.core', [
    /*
     * Angular modules
     */
    'ui.router', 'ngAnimate', 'ngSanitize',
    /*
     * Our reusable cross app code modules
     */
    'blocks.exception', 'blocks.logger', 'blocks.router'
    /*
     * 3rd Party modules
     */
    // 'ngplus'
  ]);
})();
