function Calcular_engajamento(){
  var curtidas = parseInt(document.getElementById("curtidas").value);
  var comentarios = parseInt(document.getElementById("comentarios").value);
  var compartilhamentos = parseInt(document.getElementById("compartilhamentos").value);
  var salvos = parseInt(document.getElementById("salvos").value);
  var seguidores = parseInt(document.getElementById("seguidores").value) || 1; // Evita divisão por zero

  // Verifica se os valores inseridos são numéricos
  if (isNaN(curtidas) || isNaN(comentarios) || isNaN(compartilhamentos) || isNaN(salvos) || isNaN(seguidores)) {
    document.getElementById("resposta").innerHTML = "Por favor, insira valores numéricos válidos.";
    return;
  }

  var medida = (curtidas + comentarios + compartilhamentos + salvos) / seguidores * 100;

  if (medida < 1.0){
    document.getElementById("resposta").innerHTML = "Baixo ";
  } else if (medida >= 1.0 && medida <= 3.5){
    document.getElementById("resposta").innerHTML = "Médio ";
  } else {
    document.getElementById("resposta").innerHTML = "Alto ";
  }

  document.getElementById("resposta").innerHTML += " " ;
}

function limparInputs() {
    document.getElementById("curtidas").value = "";
    document.getElementById("comentarios").value = "";
    document.getElementById("compartilhamentos").value = "";
    document.getElementById("salvos").value = "";
    document.getElementById("seguidores").value = "";
}
