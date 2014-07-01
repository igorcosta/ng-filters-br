'use strict';

angular.module('brasil.filters').filter('telefone_sp', function() {
  return function(input) {
  	var str = input+ '';
        str = str.replace(/\D/g,'');
        str=str.replace(/^(\d{2})(\d{5})(\d{4})/,"($1) $2-$3");
    return str;
  };
});