// configure image carousel application dependencies
requirejs.config({

  // set base url for clarity
  baseUrl: 'scripts',

  // define required library scripts
  paths: {
    jquery: 'lib/jquery',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    marionette: 'lib/backbone.marionette',
  },

  // for 'AMD-incompatible' scripts
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    marionette: {
      deps: ['backbone'],
      exports: 'Marionette'
    }
  }

});



// load carousel backbone.marionette & start the app
require(['app/carousel-bbm'], function(frbCarousel){
  frbCarousel.start();
})











