var botaoCalcular = document.getElementById("btn-calcular");
var areaUsuario = document.getElementById("area-usuario");
var resultado = document.getElementById("area-resultado");
var sobreCalculo = document.getElementById("area-sobre-calculo");
var numeroGotaInterno = document.getElementById("num-gotas-arredondado"); 
var resultadoDetalhado = document.getElementById("resultado-detalhado");

var input_MlOleoVegetal = document.getElementById("input-ml-oleo-vegetal");
var input_PorctOleoEssencial = document.getElementById("input-pctg-oleo-essencial");

function formatarNumero(input){ return input.value.replace(",", ".") }
function ehNumero(input){ return isNaN(Number(formatarNumero(input))) ? false : true; }
function novoCalculo(){ location.reload() }
function mostrarSobreCalculo(){
	areaUsuario.style.display = "none";
	sobreCalculo.style.display = "block";
}


botaoCalcular.addEventListener("click", function(){

	if ((input_MlOleoVegetal.value != "") && (input_PorctOleoEssencial.value != "")) {

		if ((ehNumero(input_MlOleoVegetal) == true) && (ehNumero(input_PorctOleoEssencial)) == true) {
			
			var mlOleoVegetal = formatarNumero(input_MlOleoVegetal);
			var porctOleoEssencial = formatarNumero(input_PorctOleoEssencial);
			
			var qtdGotas = parseFloat((mlOleoVegetal * porctOleoEssencial * 0.25)).toFixed(1);
			var qtdGotasArredondada = Math.round(qtdGotas);

			areaUsuario.style.display = "none";
			resultado.style.display = "block";

			numeroGotaInterno.innerHTML = qtdGotasArredondada;

			resultadoDetalhado.innerHTML = "Para uma concentração de <b>" 
			+ porctOleoEssencial 
			+ "%</b><br> em <b>" 
			+ mlOleoVegetal 
			+ "ml</b> de óleo vegetal, <br> você deve diluir <b>" 
			+ qtdGotas + " gota(s)</b> <i>(valor não arredondado)</i> do óleo essencial em seu frasco!"

			
		
		} else { alert("São aceitos apenas números! Verifique o que foi digitado.") }

	} else { alert("Você precisa preencher os dois campos!") }
}) 





