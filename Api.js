function prueba(){
    w3.getHttpObject("https://api.adviceslip.com/advice",
    function(data){
        ejemplo=data.slip.advice
        document.getElementById("mensaje").innerHTML='"'+ejemplo+'"';
        id=data.slip.id
        document.getElementById("id").innerHTML='#'+id;
    });
}