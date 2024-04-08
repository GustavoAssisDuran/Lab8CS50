    let resposta = "2"; // Resposta correta
$("input[name=choice]").on("click", function() {
    let value = $(this).val();
    let mensagem = "";
    let mensagens = "";
    resposta == value ? mensagem = 'Parabéns, Acertou!' : mensagens = 'Resposta errada, tente novamente';

    $("#message").html("<strong>" + mensagem + "</strong>");
    $("#messages").html("<strong>" + mensagens + "</strong>");
});

function check() {
    
    let B = document.getElementById('correct');
    let response = "";
    
    if(B.value == "Brasil") {
        response = 'Parabéns, Acertou!';
    } else if (B.value == "brasil") {
        response = 'Parabéns, Acertou!';
    } else if (B.value == "Brazil") {
        response = 'Parabéns, Acertou!';
    } else if (B.value == "brazil") {
        response = 'Parabéns, Acertou!';
    } else {
        response = 'Resposta errada, tente novamente';
    }

    document.getElementById('box').innerHTML = response;
}