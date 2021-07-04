$('.owl-carousel').owlCarousel({
    center:true,
    loop:true,
    margin:10,
    stagePadding: 110, 
    nav:false,
    autoHeight:true,
    dots:false,
    responsive:{
        0:{
        items:1,
        stagePadding: 10, 
        },
        400:{
            items:1
        },
        1000:{
            items: 2
        }
    }
});




$(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('DD-MM-YYYY') + ' to ' + end.format('DD-MM-YYYY'));
    });
  });








  function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  };
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  };



  function increaseValue2() {
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number2').value = value;
  }
  
  function decreaseValue2() {
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number2').value = value;
  }