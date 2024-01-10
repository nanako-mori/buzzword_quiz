'use strict';

$(document).ready(function(){
  $.ajax({ url: 'data.json', dataType: 'json' })
  .done(function(data){
    data.forEach(function(item, index){
      const idName = '#' + item.id;
      const thisYear = item.year;
      $(idName).find('.check').each(function(i, elem){
        const targetYear = $(elem).attr('data-year');
        if(thisYear === targetYear) {
          $(this).addClass('ok');
        }
      });
    });
  })
  .fail(function(){
    window.alert('読み込みエラー');
  })

  $('.check').on('click', function(){
    if($(this).hasClass('ok')) {
      $(this).text('あたり！').addClass('red');
      $(this).parent('.btn-group').prev('.answer').removeClass('d-none');
    } else {
      $(this).text('はずれ‥').addClass('gray');
    }
  });
});
