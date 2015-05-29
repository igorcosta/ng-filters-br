/*global module */
module.exports = function ( config ) {
  'use strict';

  var files = [
    '../bower_components/angular/angular.js',
    '../bower_components/angular-mocks/angular-mocks.js',
    '../src/brasil/filters/realbrasileiro.js',
    '../test/unit/realbrasileiro.spec.js'
  ];

  config.set({
    files : files,
    basePath: '',
    frameworks: ['jasmine'],
    reporters: ['progress'],
    browsers: ['PhantomJS'],
    autoWatch: true,
    singleRun: false,
    colors: true
  });
}