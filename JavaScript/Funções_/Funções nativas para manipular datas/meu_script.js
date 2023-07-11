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