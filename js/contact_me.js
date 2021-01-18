$(function() {

 $('#sendMessageButton').click(function () {
      emailjs.init("user_7dkF06ZityaunBjADBvN3");

      var name = $("input#name").val();
      var email = $("input#email").val();
      var message = $("textarea#message").val();
      $("input").removeClass('error');
      $("textarea").removeClass('error');
      console.log("ENVIANDO MAIL")
     if(name !== '' && email !== '' && message !== ''){
         emailjs.send('service_y3f2hrw', 'template_xbmwatk', {from_mail: email , message_html: message, from_name: name});
         $('#email').val('');
         $('#message').val('');
         $('#name').val('');
         Swal.fire({
             title: "<i>¡Mensaje enviado!</i>",
             html: "Muchas gracias por ponerte en contacto con nosotros. <br><b>Te responderemos con la máxima brevedad posible</b>",
             confirmButtonText: "Continuar",
         });

     }else{
         Swal.fire({
             title: "<i>¡Error al enviar el mensaje!</i>",
             confirmButtonText: "Continuar",
         });
         if(name === ''){
             $("#name").addClass('error');
         }if(email === ''){
             $("#email").addClass('error');
         }if(message === ''){
             $("#message").addClass('error');
         }
     }
 });
});