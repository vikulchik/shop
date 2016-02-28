;(function(){

  //Выбор цветов

  $('.filter__link').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('filter__link--active');
  });

  //Аккордеон

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

  });

  //Сброс фильтров

  $('.filter__reset').on('click', function(e){
    e.preventDefault();

    $('input[type=checkbox]').attr('checked', false);
  });

  //Columnize

  if($(".information__block").length){
    $('.information__block p').addClass('dontsplit');
    $('.information__block').columnize({ columns: 2 });
  }

  //Slideshow

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

  //Селект

  $('select').select2();

  //Ползунок цен

  var slider = $( "#slider-range"),
      minField = $( ".filter__slider_first"),
      maxField = $( ".filter__slider_second"),
      minVal = +minField.attr('data-min'),
      maxVal = +maxField.attr('data-max');

  slider.slider({
    range: true,
    min: minVal,
    max: maxVal,
    values: [ 1300, 8000 ],
    slide: function( event, ui ) {
      minField.val(ui.values[ 0 ]);
      maxField.val(ui.values[ 1 ]);
    }
  });

  minField.val(slider.slider( "values", 0 ));
  maxField.val(slider.slider( "values", 1 ));



  //Переключатель блоков с товарами

  $('.container__link--first').on('click', function(e){

    e.preventDefault();

    var wrap = $('section');
    wrap.removeClass().addClass('products__first');
  });

  $('.container__link--second').on('click', function(e){

    e.preventDefault();

    var wrap = $('section');
    wrap.removeClass().addClass('products__second');
  });

  $('.container__link--third').on('click', function(e){

    e.preventDefault();

    var wrap = $('section');
    wrap.removeClass().addClass('products__third');
  });


  //---------------------//

  $('.container__item').on('click', function(){
    $(this).addClass('container__item--active').siblings().removeClass('container__item--active');
  })

}());


