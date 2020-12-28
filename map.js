// itera por itens dentro de um objeto - map
 const names = ['Erick','Thais','Bob']

 //itera o array c o valor especifico
const namesWithIndex = names.map((name,index)=> {
    console.log(name,index)
    return name + index
 })

 console.log(namesWithIndex)