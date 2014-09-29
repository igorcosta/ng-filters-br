/**
 * A collection of filters for Brazilian standards
 * @version v1.1.0 - 2014-09-29
 * @author Igor Costa
 * @link https://github.com/igorcosta/ng-filters-br
 * @license Apache License 2.0
**/

'use strict';
// Source: dist/.temp/brasil/filters/app.js
angular.module('brasil.filters', []);
// Source: dist/.temp/brasil/filters/cep.js
angular.module('brasil.filters').filter('cep', function () {
  return function (input) {
    var str = input + '';
    str = str.replace(/\D/g, '');
    str = str.replace(/^(\d{2})(\d{3})(\d)/, '$1.$2-$3');
    return str;
  };
});
// Source: dist/.temp/brasil/filters/cnpj.js
angular.module('brasil.filters').filter('cnpj', function () {
  return function (input) {
    // regex créditos Matheus Biagini de Lima Dias
    var str = input + '';
    str = str.replace(/\D/g, '');
    str = str.replace(/^(\d{2})(\d)/, '$1.$2');
    str = str.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    str = str.replace(/\.(\d{3})(\d)/, '.$1/$2');
    str = str.replace(/(\d{4})(\d)/, '$1-$2');
    return str;
  };
});
// Source: dist/.temp/brasil/filters/cpf.js
angular.module('brasil.filters', []).filter('cpf', function () {
  return function (input) {
    var str = input + '';
    str = str.replace(/\D/g, '');
    str = str.replace(/(\d{3})(\d)/, '$1.$2');
    str = str.replace(/(\d{3})(\d)/, '$1.$2');
    str = str.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return str;
  };
});
// Source: dist/.temp/brasil/filters/realbrasileiro.js
function formatReal(int) {
  var tmp = int.toString().indexOf('.') !== -1 ? int + '' : int + '.00';
  var res = tmp.replace('.', '');
  tmp = res.replace(',', '');
  var neg = false;
  if (tmp.indexOf('-') === 0) {
    neg = true;
    tmp = tmp.replace('-', '');
  }
  if (tmp.length === 1) {
    tmp = '0' + tmp;
  }
  tmp = tmp.replace(/([0-9]{2})$/g, ',$1');
  if (tmp.length > 6) {
    tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
  }
  if (tmp.length > 9) {
    tmp = tmp.replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, '.$1.$2,$3');
  }
  if (tmp.length > 12) {
    tmp = tmp.replace(/([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, '.$1.$2.$3,$4');
  }
  if (tmp.indexOf('.') === 0) {
    tmp = tmp.replace('.', '');
  }
  if (tmp.indexOf(',') === 0) {
    tmp = tmp.replace(',', '0,');
  }
  return neg ? '-' + tmp : tmp;
}
angular.module('brasil.filters').filter('realbrasileiro', function () {
  return function (input) {
    return 'R$ ' + formatReal(input);
  };
});
// Source: dist/.temp/brasil/filters/tel.js
angular.module('brasil.filters').filter('tel', function () {
  return function (input) {
    var str = input + '';
    str = str.replace(/\D/g, '');
    if (str.length === 11) {
      str = str.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
      str = str.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    return str;
  };
});