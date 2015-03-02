## Image carousel exploration using Backbone.js, Marionette.js & Require.js
- view demo at http://johnhiemstra.com/carousel-prototype/

### Requirements
- Create a simple browser-based image carousel that will allow users to cycle through a set of images.
- Leverage requireJS and Backbone.Marionette. 
- HTML file should contain minimal markup, with only one script tag in the file to call the requireJS library. 
- All other JavaScript dependencies will be loaded via requireJS.
- Backbone.Marionette must have access to Backbone, Underscore, and Jquery libraries prior to instantiating the Backbone.Marionette.Application object. 
- Free to use any 3rd party CSS or JS libraries in your solution.
- Code should be structured so that new features to the carousel could be added (ex: pagination, transition effects between slides, etc) in the future with no to minimal impact on the carousel component

### Notes

- All 'custom' Backbone logic for carousel is in scripts/app/carousel-bbm.js, including content definition, with comments indiciating my thought process.
- If project were to scale, I would originate content in its own module using another require of JSON style data or similar.
- Similarly, lone template definition leverages primitive one-line jQuery selection from index.html, which would move to own file at scale.
- Carousel UI components load via nested require statement in carousel-bbm.js file, including GSAP animation library.
- New features common to most carousels prepared for in content definition and ui: 
  - Image info as originating ID, 'alt' and 'title' information in content definition in carousel-bbm.js
  - Independent numbering for scalable pagination, sample transition structure using GSAP, etc in carousel-ui.js
- Example insertion point for new features as views noted with comments in index.html


### References
- Architecture choices researched and based on work by David Sulq in two latest additions to my own reference library: 
  - Backbone.Marionette.js: A Gentle Introduction (http://leanpub.com/marionette-gentle-introduction)
  - Structuring Backbone Code with RequireJS and Marionette Modules (http://leanpub.com/structuring-backbone-with-requirejs-and-marionette)
