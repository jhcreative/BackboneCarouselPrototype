# BackboneCarouselPrototype

## Image carousel exploration using Backbone.js, Marionette.js & Require.js

### Requirements
- Create a simple browser-based image carousel that will allow users to cycle through a set of images.
- Leveraging requireJS and Backbone.Marionette. 
- HTML file should contain minimal markup, with only one script tag in the file to call the requireJS library. 
- All other JavaScript dependencies will be loaded via requireJS.
- Backbone.Marionette must have access to Backbone, Underscore, and Jquery libraries prior to instantiating the Backbone.Marionette.Application object. 
- Free to use any 3rd party CSS or JS libraries in your solution.
- Code should be structured so that new features to the carousel could be added (ex: pagination, transition effects between slides, etc) in the future with no to minimal impact on the carousel component

### Notes

- All 'custom' Backbone logic for carousel is in scripts/app/carousel-bbm.js, including content definition.
- If project were to scale, I would originate content in its own file.
- Similarly, template definition leverages one-line jQuery selection from index.html, which would move to own file at scale.
- Carousel UI components load via nested require statement in bbm file, including GSAP animation library.
- Architecture choices researched and based on work by David Sulq in two latest additions to my own reference library: 
-- Backbone.Marionette.js: A Gentle Introduction (http://leanpub.com/marionette-gentle-introduction)
-- Structuring Backbone Code with RequireJS and Marionette Modules (http://leanpub.com/structuring-backbone-with-requirejs-and-marionette)
