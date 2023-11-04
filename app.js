const weather = require('./utils.js')

const address = process.argv[2]

if(address){
    weather.geocode(address,(error,data)=>{
        if(error){
            console.log("Error: ",error)
        }
        else{
            weather.weatherforecast(data.latitude,data.longitude,(error,forecastdata)=>{
                if(error){
                    console.log("Error: ",error)
    
                }
                else{
                    console.log(data.location)
                    console.log("It is "+forecastdata.temperature+" with "+forecastdata.description +". It feels like "+forecastdata.feelslike)
    
                }
            })
        }
    })

} else{
    console.log("Please provide an address!")
}


