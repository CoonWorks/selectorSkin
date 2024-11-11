import Cookies from "https://cdn.skypack.dev/js-cookie@3.0.1";

$('#btnCambio').click(function(){
  $('.doge').toggleClass('skin1 skin2');
});

var valorSkin = $('body').attr('class');

Cookies.set('skinSelect', valorSkin, {expires:365});
Cookies.get('skinSelect');
