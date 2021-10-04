      const api_key = `09e4da8147bef7c7062e66d5eb44e20c`;
        const searchTemperature = () => {
            const city = document.getElementById('city-name').value;
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
            fetch(url)
                .then(res => res.json())
                .then(data => displayTemperature(data));
        }
        const setInnerText = (id, text) => {
    document.getElementById(id).innerText=text;
}
        const displayTemperature = temperature => {
            setInnerText('city', temperature.name);
            setInnerText('temperature', temperature.main.temp);
            setInnerText('condition', temperature.weather[0].main);
            // set weather icon
            const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
            const imgIcon = document.getElementById('weather-icon');
            imgIcon.setAttribute('src', url);
        }