
const loader = document.getElementById('loader')
const request = new XMLHttpRequest()
request.addEventListener('readystatechange', () => {
    if (request.readyState === request.DONE){
        loader.classList.remove('loader_active')
        let data = JSON.parse(request.responseText)
        // console.log(data.response.Valute)
        const item = document.querySelector('.item')
        Object.keys(data.response.Valute).forEach(function(key) {
            // console.log(key + " " + data.response.Valute[key].CharCode + " " + data.response.Valute[key].Value)

            item.innerHTML +=
            `<div class="item__code">
                ${data.response.Valute[key].CharCode}
            </div>
            <div class="item__value">
                ${data.response.Valute[key].Value}
            </div>
            <div class="item__currency">
               руб.
            </div>`
        })
    }
})
request.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
request.send()