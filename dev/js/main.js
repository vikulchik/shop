;(function(){

  $('.filter__link').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('filter__link--active');
  });

  $('.filter__title').on('click', function(e){
    e.preventDefault();

    var $this = $(this),
        item = $this.closest('.filter__choose_item'),
        list = $this.closest('.filter__choose'),
        items = list.find('.filter__choose_item'),
        content = item.find('.filter__choose_list'),
        otherContent = list.find('.filter__choose_list'),
        duration = 200;


    if (!item.hasClass('active-class')) {
          items.removeClass('active-class');
          item.addClass('active-class');

          otherContent.stop(true, true).slideUp(duration);
          content.stop(true, true).slideDown(duration);
    } else {
          content.stop(true, true).slideUp(duration);
          item.stop(true, true).removeClass('active-class');
    }

  })

  $('.filter__reset').on('click', function(e){
    e.preventDefault();

    $('input[type=checkbox]').attr('checked', false);
  });

  $('.information__text').columnize({
    width: 531,
    columns: 2
  });

  $('.slideshow__link').on('click', function(e){
    e.preventDefault();

    var $this = $(this),
        item = $this.closest('.slideshow__item'),
        container = $this.closest('.slideshow'),
        display = container.find('.slide'),
        path = item.find('img').attr('src'),
        duration = 300;

    if (!item.hasClass('active-slide')){
      item.addClass('active-slide').siblings().removeClass('active-slide');

      display.find('img').fadeOut(duration, function(){
        $(this).attr('src', path).fadeIn(duration);
      })
    }


  });

  $('select').select2();

  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 13000,
    values: [ 100, 13000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val(ui.values[ 1 ] );
      $('.filter__slider_input').val( ui.values[ 0 ]);
    }
  });
  $( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) +
    " - " + $( "#slider-range" ).slider( "values", 1 ) );

}());


