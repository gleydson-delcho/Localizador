function localization() {
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition((position) => {
           var latitude = position.coords.latitude
           var longitude = position.coords.longitude
        //    console.log(latitude, longitude)

           var map = L.map('localle', {
                center: [latitude, longitude],
                zoom: 15
            })
            
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var marker = L.marker([latitude, longitude]).addTo(map)

        var circle = L.circle([latitude, longitude],{
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 200
        }).addTo(map);
        }, (error) => console.log(error))
    }else{
        alert("Oops! Não foi possível acessar sua localização!")
    } 
}localization()