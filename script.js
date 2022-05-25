// fetch api
let res = fetch("https://restcountries.com/v3.1/all");
res.then((data)=>data.json()).catch((error)=> console.log(error))
.then(function(countryData){

    // Create Element Function
    function foo (ele,value){
        let divTag = document.createElement(ele);
        divTag.className = value;
        return divTag;
    }
    // Container
        let Container = foo("div","container");
        document.body.append(Container);

    // row
        let Row = foo("div","row");
        Container.append(Row);

    // Create Cards
        countryData.forEach(function(country) {
            let col = foo("div","col-lg-3 col-sm-12 col-md-6")
            col.innerHTML = `<div class=" z m-3 card border-success mb-3 shadow-lg  bg-dark " style="max-width: 18rem;">
            <div class="card-header bg-secondary border-success text-center fw-bolder text-white ">${country.name.common}</div>
            <div class="card-body text-success ">
              <img height="160" src="${country.flags.png}" class="card-img-top" alt="...">
            </div>
            <div class="card-footer text-center  border-success fw-bolder">
            <p >Capital : ${country.capital}</p>
            <P>Region : ${country.region}</P>
            </div>
          </div>`
          Row.append(col);
            
        });
});



