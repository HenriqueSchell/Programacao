
// Calculando datas

/*Quantos dias existem entre essas duas datas?
05/05/1925
23/09/2025
precisamos passar os parâmetros mas existem pré-definições que precisam ser seguidas:
var data = new Date(year, month, day, hours, minutes, seconds, milliseconds)
*/
//Lembrando que os meses vão de 0 a 11, janeiro sendo 0.

//05/05/1925
var data1 = new Date(1925, 4, 5)

//23/09/2025

var data2 = new Date(2025, 8, 23)

document.write(data1.toString())
document.write('<hr>')
document.write(data2.toString())
document.write('<hr>')


//precisamos converter as datas para algo que possamos calcular
//Usamos então o método getTime(), esse método recupera os milissegundos da data 1 de janeiro de 1970 até a data designada.

document.write(data1.getTime())
document.write('<hr>')
document.write(data2.getTime())
document.write('<hr>')

//Precisamos encontrar a quantidade de milissegundos que tem da data1 até a data2
//Podemos ver que o valor que é dado é um valor negativo, para resolver isso usamos o objeto Math.abs(), esse objeto retorna o valor absoluto de um valor.

var milissegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())
document.write(milissegundos_entre_datas)
document.write('<hr>')



//Precismaos descobrir a quantidade de dias que esses milissegundos representam.

//para isso precisamos saber quantos milissegundos tem um dia
/*
1 dia - 24 horas
1 hora - 60 minutos
1 minuto - 60 segundos
1 segundo - 1000 milissegundos
*/ 
//Essa conta por extenso seria assim: 24horas*60minutos*60segundos*1000milissegundos

var milissegundos_por_dia = (1*24*60*60*1000)
document.write('1 dia tem: ' + milissegundos_por_dia + ' Milissegundos' )
document.write('<hr>')
//Agora dividimos a diferença de milissegundos entre as datas pelos milissegundos de um dia.
document.write('A diferença de dias entre as datas é de: ' + milissegundos_entre_datas / milissegundos_por_dia + ' Dias')
//Vimos então que entre 05-05-1925 até 23-09-2025 temos 36.666 dias






