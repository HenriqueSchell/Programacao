


/*Para manipular datas usamos o objeto date que deve ser estanciado, veja os exemplos:*/
       
var data = new Date()
//Para recuperar a data do dia usamos o data.getDate()
document.write(data.getDate())

document.write('<hr>')

//Para recuperar a data do mês usamos o get.Month(), porém o JS considera janeiro como 0 então o ano seria de 0 a 11, para resolver isso basta somar 1 como no exemplo abaixo:
document.write(data.getMonth() + 1)

document.write('<hr>')

//Para recuperar o ano basta usar o método get.FullYear().
document.write(data.getFullYear())
 document.write('<hr>')

//E para recuperar a data completa basta concatenar todos os métodos, veja a a baixo:
document.write(data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear() )

document.write('<hr>')
//---------------------------------------------------------------------------------

//Praticando mais com datas

var data = new Date()

//Adicionar ou remover dias da data
//para adicionar dias precisamos usar o comando set.date(recuperar a variável da data e adicionar quantos dias queremos), mesma coisa para diminuir dias.
document.write(data.toString())
document.write('<br>')
data.setDate(data.getDate() - 2)
document.write(data)

document.write('<hr>')

//Adicionar ou remover meses da data
document.write(data.toString())
data.setMonth(data.getMonth() - 2 )
document.write('<br>')
document.write(data)

document.write('<hr>')

//Adicionar ou remover anos da data
document.write(data.toString())
data.setFullYear(data.getFullYear() + 2)
document.write('<br>')
document.write(data)
