// Carrega os dados sobre as cestas 

let precos = [{"ano":1959,"custo":824.06},{"ano":1960,"custo":888.68},{"ano":1961,"custo":885.11},{"ano":1962,"custo":987.08},{"ano":1963,"custo":926.57},{"ano":1964,"custo":930.58},{"ano":1965,"custo":827.55},{"ano":1966,"custo":975.56},{"ano":1967,"custo":917.28},{"ano":1968,"custo":870.83},{"ano":1969,"custo":938.68},{"ano":1970,"custo":898.1},{"ano":1971,"custo":954.2},{"ano":1972,"custo":1037.78},{"ano":1973,"custo":1302.25},{"ano":1974,"custo":1353.15},{"ano":1975,"custo":1325.55},{"ano":1976,"custo":1361.16},{"ano":1977,"custo":1241.14},{"ano":1978,"custo":1234.95},{"ano":1979,"custo":1334.77},{"ano":1980,"custo":1285.04},{"ano":1981,"custo":1163.9},{"ano":1982,"custo":1054.28},{"ano":1983,"custo":1177.82},{"ano":1984,"custo":1089.76},{"ano":1985,"custo":991.3},{"ano":1986,"custo":1128.52},{"ano":1987,"custo":987.26},{"ano":1988,"custo":749.11},{"ano":1989,"custo":841.74},{"ano":1990,"custo":770.95},{"ano":1991,"custo":749.14},{"ano":1992,"custo":720.85},{"ano":1993,"custo":680.82},{"ano":1994,"custo":806.72},{"ano":1995,"custo":869.79},{"ano":1996,"custo":838.1},{"ano":1997,"custo":779.98},{"ano":1998,"custo":818.99},{"ano":1999,"custo":754.53},{"ano":2000,"custo":717.3},{"ano":2001,"custo":712.12},{"ano":2002,"custo":678.15},{"ano":2003,"custo":676.87},{"ano":2004,"custo":636.49},{"ano":2005,"custo":624.9},{"ano":2006,"custo":607.83},{"ano":2007,"custo":628.78},{"ano":2008,"custo":691.86},{"ano":2009,"custo":679.21},{"ano":2010,"custo":675.7},{"ano":2011,"custo":676.36},{"ano":2012,"custo":694.61},{"ano":2013,"custo":735.73},{"ano":2014,"custo":733.3},{"ano":2015,"custo":772.08},{"ano":2016,"custo":823.4},{"ano":2017,"custo":779.08},{"ano":2018,"custo":750.65},{"ano":2019,"custo":780.4},{"ano":2020,"custo":781.54},{"ano":2021,"custo":722.08}]

/* "precos" é uma array, em que cada item é um objeto do tipo:
{
   ano : valor_ano,
   custo : valor_cesta,
}
*/

// o método "map" abaixo vai percorre "precos", gerando outra array a partir dela, aplicando uma função para cada item da array preços. 
//No caso, a função vai extrair o valor da propriedade "ano" do objeto. 
//O resultado vai ser uma array com a lista de todos os anos presentes no dataset.
let anos = precos.map(
  function(item) {
    return item.ano
  }
)

// Seleciona o elemento <input>
let entrada = document.querySelector( 'input' )

// Seleciona o elemento que tem a classe "output"
let saida = document.querySelector( '.output' )

// Dispara a função validar cada vez que o usuário digitar
entrada.addEventListener( 'input', validar )

// Define função de validação
function validar() {

  // Pega a string que foi digitada
  let valor = entrada.value 
  
  // Força a conversão para número inteiro
  valor = parseInt( valor )

  // Se valor for maior que 0
  if ( valor > 0 ) {
    calcular( valor )
  }
  
  // Se não for um valor válido
  else {
    limpar()
  }

}

// Define função que encontra o custo
function calcular( valor ) {

  //vamos declarar a variável do resultado
  let resultado;
  //vamos incluir uma função para formatar o número
  let formatador = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  //aqui vamos testar se o ano digitado está naquela lista de anos que extraimos
  //se "valor" não estiver em "anos", o resultado de anos.indexOf(valor) é -1.

  if ( anos.indexOf(valor) >= 0 ) {

    //para cada o ano válido,faz o loop para encontrar o custo
    for ( let item of precos ) {

      // Se o ano digitado puder ser encontrado pela base, ou seja, se estiver entre 1959 e 2021
      if ( valor == item.ano ) {
  
        // Devolve o  custop da cesta básica referente àquele ano
        resultado = formatador.format(item.custo)
        // Encerra o loop
        break
      }
      
       // else>>>> valor não concidir com os anos da base OR estiver com preço anual NaN, 
       // show "desculpe, dados indisponíveis para este período."
  
    } 

  } else {

    resultado = ' >> Desculpe, dados indisponíveis para este período!'

  }

  mostrar( resultado )

}

//T definir a função mostrar
function mostrar(resultado) {

  saida.innerText = resultado;

}

