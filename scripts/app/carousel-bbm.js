// carousel module

define(['marionette'], function(Marionette){

    // create application object
    var frbCarousel = new Marionette.Application();

    // define display area
    frbCarousel.addRegions({
      carouselContainer: '#frb_carousel'
    });

    // create single image model
    frbCarousel.Pic = Backbone.Model.extend({});


    // create image collection using single image model
    frbCarousel.Pictures = Backbone.Collection.extend({
      model: frbCarousel.Pic
    });

    // create single image view
    frbCarousel.PicView = Marionette.ItemView.extend({
      tagName: 'li',
      className: 'carousel-item',
      template: '#item-template'
    });

    // create image collection view
    frbCarousel.PicturesView = Marionette.CollectionView.extend({
      tagName: 'ul',
      className: 'carousel-list',
      childView: frbCarousel.PicView

    });

    // create actual image content - more robust to generate this through JSON/separate content module/Backbone request/response etc
    var carouselImages = new frbCarousel.Pictures([
      {
        id : 1,
        src: 'images/frbImage1.jpg',
        alt: "Cloudscapes - John Hiemstra",
        title: 'Manhattan, Midtown - morning'
      },
      {
        id : 2,
        src: 'images/frbImage2.jpg',
        alt: "Cloudscapes - John Hiemstra",
        title: 'Manhattan, Gramercy - overcast'
      },
      {
        id : 3,
        src: 'images/frbImage3.jpg',
        alt: "Cloudscapes - John Hiemstra",
        title: 'Connecticut, Shoreline - storm coming'
      },
      {
        id : 4,
        src: 'images/frbImage4.jpg',
        alt: "Cloudscapes - John Hiemstra",
        title: 'Connecticut, Bethel - late afternoon'
      },
      {
        id : 5,
        src: 'images/frbImage5.jpg',
        alt: "Cloudscapes - John Hiemstra",
        title: 'Manhattan, Empire State - afternoon'
      },
      {
        id : 6,
        src: 'images/frbImage6.jpg',
        alt: "Cloudscapes - John Hiemstra",
        title: 'Manhattan, Midtown - morning'
      },
      {
        id : 7,
        src: 'images/frbImage7.jpg',
        alt: "Cloudscapes - John Hiemstra",
        title: 'Connecticut, Bethel - late afternoon'
      },
      {
        id : 8,
        src: 'images/frbImage8.jpg',
        alt: "Cloudscapes - John Hiemstra",
        title: 'Manhattan, Midtown - morning'
      }
    ]);

    var picsView = new frbCarousel.PicturesView({
      collection: carouselImages
    });


    // show actual content in Marionette view
    frbCarousel.carouselContainer.show(picsView);

    // load ui javascript
    require([
      'scripts/lib/TweenMax.min.js',
      'scripts/lib/jquery.gsap.min.js',
      'app/carousel-ui'
    ]);

    return frbCarousel;

});










