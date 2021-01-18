$(function() {

 $('#sendMessageButton').click(function () {
      emailjs.init("user_7dkF06ZityaunBjADBvN3");

      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
      $("input").removeClass('error');
      $("textarea").removeClass('error');
      console.log("ENVIANDO MAIL")
     if(name !== '' && email !== '' && message !== ''){
         emailjs.send('service_y3f2hrw', 'template_xbmwatk', {from_mail: email , message_html: message, from_name: name});
         $('#email').val('');
         $('#message').val('');
         $('#name').val('');
         alert("MAIL ENVIADO")
     }else{
         alert("MAIL NO ENVIADO")
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