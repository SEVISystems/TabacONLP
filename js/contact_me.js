$(function() {

 $('#sendMessageButton').click(function () {

      event.preventDefault();

      emailjs.init("user_7dkF06ZityaunBjADBvN3");
   
      var name = $("input#name").val();
      var email = $("input#email").val();
      var message = $("textarea#message").val();
      $("input").removeClass('error');
      $("textarea").removeClass('error');

     if(name !== '' && email !== '' && phone !== '' && message !== ''){

         emailjs.send('service_y3f2hrw', 'template_xbmwatk', {from_mail: email , message_html: message, from_name: name, from_phone: phone});

         $('#email').val('');
         $('#message').val('');
         $('#name').val('');
         $('#phone').val('');

         swal("¡Gracias!", "Nos pondremos en contacto contigo lo más rápido posible", "success");

     }else{
         if(name === ''){
             $("input#name").addClass('error');
         }if(phone === ''){
             $("input#phone").addClass('error');
         }if(email === ''){
             $("input#email").addClass('error');
         }if(message === ''){
             $("textarea#message").addClass('error');
         }
     }

 });
});