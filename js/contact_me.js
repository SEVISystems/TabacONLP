$(function () {

    $('#sendMessageButton').click(function () {

        let name = $("input#name").val();
        let email = $("input#email").val();
        let message = $("textarea#message").val();
        $("input").removeClass('error');
        $("textarea").removeClass('error');

        if (name !== '' && email !== '' && message !== '') {

            //Set button ton disabled, add background and make loader visible
            $('#sendMessageButton').attr("disabled", true);
            $('#contact-button-icon').addClass('custom-hidden');
            $('#contact-spinner').removeClass('custom-hidden');

            emailjs.init("user_7dkF06ZityaunBjADBvN3");

            emailjs.send('service_y3f2hrw', 'template_wxgjtbd', {
                from_mail: email,
                message_html: message,
                from_name: name
            }).then(function (response) {
                Swal.fire({
                    title: "<i>¡Mensaje enviado!</i>",
                    html: "Gracias por ponerte en contacto con nosotros. <br><b>Nos tomamos muy enserio tu mensaje y responderemos con la máxima brevedad posible</b>",
                    icon: 'success',
                    background: '#fff url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' version=\'1.1\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' xmlns:svgjs=\'http://svgjs.com/svgjs\' width=\'600\' height=\'600\' preserveAspectRatio=\'none\' viewBox=\'0 0 600 600\'%3e%3cg mask=\'url(%26quot%3b%23SvgjsMask1057%26quot%3b)\' fill=\'none\'%3e%3cpath d=\'M220 321L-40 61\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1058)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M5 479L-188 286\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1059)\' stroke-linecap=\'round\' class=\'BottomRight\'%3e%3c/path%3e%3cpath d=\'M468 523L734 789\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1059)\' stroke-linecap=\'round\' class=\'BottomRight\'%3e%3c/path%3e%3cpath d=\'M468 588L760 880\' stroke-width=\'6\' stroke=\'url(%23SvgjsLinearGradient1058)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M329 481L657 809\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1058)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M98 159L-351 -290\' stroke-width=\'6\' stroke=\'url(%23SvgjsLinearGradient1059)\' stroke-linecap=\'round\' class=\'BottomRight\'%3e%3c/path%3e%3cpath d=\'M183 528L-9 336\' stroke-width=\'10\' stroke=\'url(%23SvgjsLinearGradient1059)\' stroke-linecap=\'round\' class=\'BottomRight\'%3e%3c/path%3e%3cpath d=\'M515 317L247 49\' stroke-width=\'6\' stroke=\'url(%23SvgjsLinearGradient1058)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M554 463L881 790\' stroke-width=\'6\' stroke=\'url(%23SvgjsLinearGradient1058)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M98 300L-62 140\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1058)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M561 174L297 -90\' stroke-width=\'6\' stroke=\'url(%23SvgjsLinearGradient1058)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M298 541L503 746\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1059)\' stroke-linecap=\'round\' class=\'BottomRight\'%3e%3c/path%3e%3cpath d=\'M93 138L-322 -277\' stroke-width=\'10\' stroke=\'url(%23SvgjsLinearGradient1058)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M498 598L895 995\' stroke-width=\'6\' stroke=\'url(%23SvgjsLinearGradient1059)\' stroke-linecap=\'round\' class=\'BottomRight\'%3e%3c/path%3e%3cpath d=\'M586 44L989 447\' stroke-width=\'6\' stroke=\'url(%23SvgjsLinearGradient1058)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M317 424L753 860\' stroke-width=\'6\' stroke=\'url(%23SvgjsLinearGradient1059)\' stroke-linecap=\'round\' class=\'BottomRight\'%3e%3c/path%3e%3cpath d=\'M65 455L-133 257\' stroke-width=\'10\' stroke=\'url(%23SvgjsLinearGradient1059)\' stroke-linecap=\'round\' class=\'BottomRight\'%3e%3c/path%3e%3cpath d=\'M38 460L275 697\' stroke-width=\'6\' stroke=\'url(%23SvgjsLinearGradient1058)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M382 166L180 -36\' stroke-width=\'10\' stroke=\'url(%23SvgjsLinearGradient1058)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M397 562L193 358\' stroke-width=\'10\' stroke=\'url(%23SvgjsLinearGradient1058)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M449 379L154 84\' stroke-width=\'6\' stroke=\'url(%23SvgjsLinearGradient1059)\' stroke-linecap=\'round\' class=\'BottomRight\'%3e%3c/path%3e%3cpath d=\'M107 403L-133 163\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1059)\' stroke-linecap=\'round\' class=\'BottomRight\'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id=\'SvgjsMask1057\'%3e%3crect width=\'600\' height=\'600\' fill=\'white\'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1=\'100%25\' y1=\'100%25\' x2=\'0%25\' y2=\'0%25\' id=\'SvgjsLinearGradient1058\'%3e%3cstop stop-color=\'rgba(38%2c 183%2c 184%2c 0)\' offset=\'0\'%3e%3c/stop%3e%3cstop stop-color=\'rgba(38%2c 183%2c 184%2c 0.27)\' offset=\'1\'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\' id=\'SvgjsLinearGradient1059\'%3e%3cstop stop-color=\'rgba(38%2c 183%2c 184%2c 0)\' offset=\'0\'%3e%3c/stop%3e%3cstop stop-color=\'rgba(38%2c 183%2c 184%2c 0.27)\' offset=\'1\'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")',
                    confirmButtonText: "Continuar",
                    confirmButtonColor: '#26B7B8'
                });
                $('#email').val('');
                $('#message').val('');
                $('#name').val('');
                $('#sendMessageButton').attr("disabled", false);
                $('#contact-button-icon').removeClass('custom-hidden');
                $('#contact-spinner').addClass('custom-hidden');
            }, function (error) {
                Swal.fire({
                    title: "<i>Error al enviar el mensaje</i>",
                    html: "Prueba otra vez en unos minutos.",
                    icon: 'error',
                    background: '#fff url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' version=\'1.1\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' xmlns:svgjs=\'http://svgjs.com/svgjs\' width=\'600\' height=\'600\' preserveAspectRatio=\'none\' viewBox=\'0 0 600 600\'%3e%3cg mask=\'url(%26quot%3b%23SvgjsMask1087%26quot%3b)\' fill=\'none\'%3e%3cpath d=\'M536 316L190 -30\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1088)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M451 14L847 410\' stroke-width=\'6\' stroke=\'url(%23SvgjsLinearGradient1089)\' stroke-linecap=\'round\' class=\'BottomRight\'%3e%3c/path%3e%3cpath d=\'M60 178L236 354\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1089)\' stroke-linecap=\'round\' class=\'BottomRight\'%3e%3c/path%3e%3cpath d=\'M335 181L758 604\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1089)\' stroke-linecap=\'round\' class=\'BottomRight\'%3e%3c/path%3e%3cpath d=\'M75 283L-294 -86\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1088)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M329 535L145 351\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1089)\' stroke-linecap=\'round\' class=\'BottomRight\'%3e%3c/path%3e%3cpath d=\'M488 245L727 484\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1088)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M216 210L-207 -213\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1088)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M39 467L-368 60\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1088)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M105 435L-322 8\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1088)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M387 14L645 272\' stroke-width=\'10\' stroke=\'url(%23SvgjsLinearGradient1088)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M321 469L-74 74\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1088)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M55 139L-208 -124\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1089)\' stroke-linecap=\'round\' class=\'BottomRight\'%3e%3c/path%3e%3cpath d=\'M285 571L564 850\' stroke-width=\'10\' stroke=\'url(%23SvgjsLinearGradient1088)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M259 488L38 267\' stroke-width=\'6\' stroke=\'url(%23SvgjsLinearGradient1088)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M184 44L7 -133\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1088)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M375 511L771 907\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1088)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M501 459L856 814\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1088)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M291 280L489 478\' stroke-width=\'10\' stroke=\'url(%23SvgjsLinearGradient1088)\' stroke-linecap=\'round\' class=\'TopLeft\'%3e%3c/path%3e%3cpath d=\'M585 471L228 114\' stroke-width=\'8\' stroke=\'url(%23SvgjsLinearGradient1089)\' stroke-linecap=\'round\' class=\'BottomRight\'%3e%3c/path%3e%3cpath d=\'M579 559L340 320\' stroke-width=\'10\' stroke=\'url(%23SvgjsLinearGradient1089)\' stroke-linecap=\'round\' class=\'BottomRight\'%3e%3c/path%3e%3cpath d=\'M2 550L-272 276\' stroke-width=\'10\' stroke=\'url(%23SvgjsLinearGradient1089)\' stroke-linecap=\'round\' class=\'BottomRight\'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id=\'SvgjsMask1087\'%3e%3crect width=\'600\' height=\'600\' fill=\'white\'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1=\'100%25\' y1=\'100%25\' x2=\'0%25\' y2=\'0%25\' id=\'SvgjsLinearGradient1088\'%3e%3cstop stop-color=\'rgba(184%2c 38%2c 38%2c 0)\' offset=\'0\'%3e%3c/stop%3e%3cstop stop-color=\'rgba(184%2c 38%2c 38%2c 0.15)\' offset=\'1\'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\' id=\'SvgjsLinearGradient1089\'%3e%3cstop stop-color=\'rgba(184%2c 38%2c 38%2c 0)\' offset=\'0\'%3e%3c/stop%3e%3cstop stop-color=\'rgba(184%2c 38%2c 38%2c 0.15)\' offset=\'1\'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")',
                    confirmButtonText: "Entendido",
                    confirmButtonColor: '#26B7B8'
                });
                $('#sendMessageButton').attr("disabled", false);
                $('#contact-button-icon').removeClass('custom-hidden');
                $('#contact-spinner').addClass('custom-hidden');
            });

        }
    });
});


