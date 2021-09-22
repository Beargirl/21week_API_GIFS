function searchGifs()

{ 
    fetch("https://api.giphy.com/v1/gifs/search?api_key=Io6y6lRwOPwkKnOhZ1oxsuaQTNZvt9Re&q=&limit=25&offset=0&rating=g&lang=en")
.then(response => response.json());
.then(gifs => { 
    
    document.getElementById ("search").src = gifs.search_url;
    document.getElementById ("gifs").innerText =  
    )

.catch(error => console.log(error));

});



