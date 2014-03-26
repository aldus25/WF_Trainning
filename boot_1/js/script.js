$(document).ready(function(){

$('h1').fadeIn(3000, function(){
  $('.alias').focus();
});

$('button').on('click', function(){
  $.ajax({
  url: 'http://bootcamp.aws.af.cm/welcome/tunombre',
  dataType: 'json',
  success: function(data) {
    $('section').html(data);
  },
  error: function(req, status, err) {
    $('section').html( '<span>Aldo</span> something went wrong', status, err ).css({'color':'red'});
  }

  });
});


// $.ajax({
//   url: 'http://search.twitter.com/search.json?',
//   data : {q:'html5'},
//   dataType: 'jsonp',
//   success: function( data) {
//   	console.dir(data);
//   }
// });

});