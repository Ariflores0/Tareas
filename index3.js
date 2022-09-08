function tareaEliminada(element){
    // console.log(element.parentNode)
    // console.log(element.parentNode.parentNode)
     element.parentNode.parentNode.removeChild(element.parentNode)
     LIST[element.id].eliminado = true
     console.log(LIST)
 }
