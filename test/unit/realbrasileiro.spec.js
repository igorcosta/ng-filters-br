/*global beforeEach, describe, it, inject, expect, module */
'use strict';

describe('realbrasileiro', function() {

  var realbrasileiro;

  beforeEach(module('brasil.filters'));

  beforeEach(inject(function($filter){
    realbrasileiro = $filter('realbrasileiro');
  }));

  describe('default functionality', function() {

    it('should do basic currency filtering', function() {
      expect(realbrasileiro(0)).toEqual('R$ 0,00');
      expect(realbrasileiro(99)).toEqual('R$ 0,99');
      expect(realbrasileiro(999)).toEqual('R$ 9,99');
      expect(realbrasileiro(1231)).toEqual('R$ 12,31');
      expect(realbrasileiro(12311.23)).toEqual('R$ 12.311,23');
      expect(realbrasileiro(12.31123)).toEqual('R$ 12.311,23');
    });

  });

});