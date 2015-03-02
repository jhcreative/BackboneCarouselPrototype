// jQuery based carousel user interactions
// 'separation of concerns' approach chosen because user interactions don't change the model... yet

$(document).ready(function() {

  var slides = $('.carousel-image'),
      count = slides.length,
      setupCount = count;

  // setup : adds image sequence data to each parent li, set initial 'current' li
  // use native JS as fastest loop
  while (setupCount --){
    var thisImage = slides[setupCount],
        thisLi = $(thisImage).parent('.carousel-item'),
        thisSeq = setupCount + 1;
    thisLi.attr('data-seq', thisSeq);
    if (thisSeq === 1){
      thisLi.addClass('current');
    }
  }


  // setup: click events using event delegation
  $('.carousel-container').on('click', function(e){

    var thisClick = $(e.target);

    // setup: control clicks
    if (thisClick.hasClass('control')){

      var nowShowing = $('.current'),
          nowShowingSeq = parseInt(nowShowing.attr('data-seq'), 10),
          nextUp = {}, // decide below
          nextUpSeq = 0,
          showHide = new TimelineMax();

      if (thisClick.hasClass('prev')){
      // previous item .control logic

        if (nowShowingSeq === 1){
          // we're already at the beginning of sequence, so loop to the end
          nextUpSeq = count;
        } else {
          // get the previous item in sequence
          nextUpSeq = nowShowingSeq - 1;
        }

      } else if (thisClick.hasClass('next')){
      // next item .control logic

        if (nowShowingSeq === count){
          // we're already at the end of sequence, so loop to the beginning
          nextUpSeq = 1;
        } else {
          // get the previous item in sequence
          nextUpSeq = nowShowingSeq + 1;
        }

      } else {
      // open for future .control element logic
      }

      // now safely select nextUp element in DOM
      nextUp = $('.carousel-item[data-seq = "' + nextUpSeq + '"]');

      // show/hide with gsap js animation

      // if 'prev' direction
      if (thisClick.hasClass('prev')){

        showHide.to(nowShowing, 0.25, {
          'transform' : 'perspective(900px) rotateY(-90deg)',
          'opacity' : 0,
          'z-index' : -1,
           ease:Cubic.easeInOut
        })
        .to(nextUp, 0.25, {
          'transform' : 'perspective(900px) rotateY(0deg)',
          'opacity' : 1,
          'z-index' : 10,
           ease:Cubic.easeInOut,
          onComplete: function(){
            nowShowing.removeClass('current');
            TweenMax.to(nowShowing, 0, {
              // resets newly hidden image to standard 'reverse' position
              'transform' : 'perspective(900px) rotateY(90deg)'
            });
            nextUp.addClass('current');

          }
        }, '-=0.125');
      }

      // if 'next' direction
      if (thisClick.hasClass('next')){
        TweenMax.to(nextUp, 0, {
          // preps default(hidden) image transform to 'forward' position
          'transform' : 'perspective(900px) rotateY(-90deg)'
        });

        showHide.to(nowShowing, 0.25, {
          'transform' : 'perspective(900px) rotateY(90deg)',
          'opacity' : 0,
          'z-index' : -1,
           ease:Cubic.easeInOut
        })
        .to(nextUp, 0.25, {
          'transform' : 'perspective(900px) rotateY(0deg)',
          'opacity' : 1,
          'z-index' : 10,
           ease:Cubic.easeInOut,
          onComplete: function(){
            nowShowing.removeClass('current');
            nextUp.addClass('current');
          }
        }, '-=0.125');
      }

    } else {
    // open for future carousel click events

    }

  });

});







