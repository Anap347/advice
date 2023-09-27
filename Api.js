function prueba(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(function(data) {
        let ejemplo = data.results;
        ejemplo=data.slip.advice
        document.getElementById("mensaje").innerHTML='"'+ejemplo+'"';
        id=data.slip.id
        document.getElementById("id").innerHTML='#'+id;
    })
    .catch(err=>console.log(err))
}

