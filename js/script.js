let mobile = document.querySelector(".checkboxtoggler")
let navbar = document.getElementById("navbar")

mobile.addEventListener("click",function(){
    if(navbar.style.display=="block"){
        navbar.style.display="none"
    }else {
        navbar.style.display="block";
    }
})

const apikey = 'd5d94ed72919557e5e6645d4a9b403df';
const apiaxis = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWQ5NGVkNzI5MTk1NTdlNWU2NjQ1ZDRhOWI0MDNkZiIsInN1YiI6IjY1YzRjYjU5NmRjNTA3MDE2M2ZjODg1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AHBYRneAwJEGQVlF96w-U54Y_ZgBsVJE1w218ajUa78';
const baseurl = 'https://api.themoviedb.org/3';
const apimovie = '/discover/movie';
const apitv = '/movie/top_rated'
const poprar = '/movie/popular'
const upcome = '/movie/upcoming'
const apiimge = 'https://image.tmdb.org/t/p/w500';

async function fetchmovie(api) {
    const res = await fetch(api);
    const data = await res.json();
    console.log(data.results); // Corrected property name
    printmovie(data.results);
}

async function printmovie(movies) {
    const owl_carousel = document.querySelector('.owl-carousel')
     await movies.map((movies)=>{
        owl_carousel.innerHTML +=`
        <div class="owl-carousel-info-wrap item card">
        <img src="${apiimge}${movies.poster_path}" class="owl-carousel-image img-fluid" alt="">

        <div class="owl-carousel-info">
            <h4 class="mb-2">${movies.original_title}</h4>
        </div>
    </div>
        `
        console.log(movies.original_title)
    })
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        autoplay: true,
        responsiveClass: true,
        responsive:{
            0:{
                items: 2,
            },
            767:{
                items: 3,
            },
            1200:{
                items: 4,
            }
        }
    });
}
const apiUrl = `${baseurl}${apimovie}?api_key=${apikey}&${apiaxis}`;

fetchmovie(apiUrl);


async function fetchtv(apit) {
    const res = await fetch(apit);
    const data = await res.json();
    console.log(data.results); // Corrected property name
    printtv(data.results);
}

async function printtv(films) {
    const topmoviecard = document.querySelector('.topmoviecard')
   
     await films.map((films)=>{
        const porptitle1 = (films.original_title).split(" ").slice(0,3).join(' ')  ;
        topmoviecard.innerHTML +=`
                    <div class="moviecar">
                        <img src="${apiimge}${films.poster_path}" alt="Movie Image" id="moviefoto"/>
                        <h3>${porptitle1}</h3>
                    </div>
        `
        // console.log(movies.original_title)
    })
}

const apiUrl2 = `${baseurl}${apitv}?api_key=${apikey}&${apiaxis}`

fetchtv(apiUrl2)


async function fetchPopular(pop) {
    const res = await fetch(pop);
    const data = await res.json();
    console.log(data.results); // Corrected property name
    Popular(data.results);
}

async function Popular(poper) {
    const lastmoviecard = document.querySelector('.lastmoviecard')
     await poper.map((poper)=>{
        const porptitle = (poper.original_title).split(" ").slice(0,3).join(' ')  ;
        lastmoviecard.innerHTML +=`
        <div class="moviecar2 col-lg-3 col-md-6 col-sm-12">
        <img src="${apiimge}${poper.poster_path}" alt="Movie Image" id="moviefoto"/>
        <h3>${porptitle}</h3>
        </div>
        `
        // console.log(movies.original_title)
    })
}

const apiUrl3 = `${baseurl}${poprar}?api_key=${apikey}&${apiaxis}`

fetchPopular(apiUrl3)


async function fetchUpcoming(up) {
    const res = await fetch(up);
    const data = await res.json();
    console.log(data.results); // Corrected property name
    Upcoming(data.results);
}

async function Upcoming(upc) {
    const lastmoviecard2 = document.querySelector('.lastmoviecard2')
     await upc.map((upc)=>{
        const porptitle = (upc.original_title).split(" ").slice(0,3).join(' ')  ;
        lastmoviecard2.innerHTML +=`
        <div class="moviecar2 col-lg-3 col-md-6 col-sm-12">
        <img src="${apiimge}${upc.poster_path}" alt="Movie Image" id="moviefoto"/>
        <h3>${porptitle}</h3>
        </div>
        `
        // console.log(movies.original_title)
    })
}

const apiUrl4 = `${baseurl}${upcome}?api_key=${apikey}&${apiaxis}`

fetchUpcoming(apiUrl4)


const searchbar = document.getElementById("searchbar")

const searchresult = document.querySelector(".searchresult")

// searchbar.addEventListener("keyup", function () {
//     const searchQuery = this.value; // Assuming "this" refers to the searchbar element

//     const url = `${baselink}/search/movie?api_key=${this.search.value}&query=${searchQuery}`;
    
//     const options = {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     };

//     fetch(url, options)
//         .then((response) => response.json())
//         .then((json) => {
//             searchresult.innerHTML = ""; // Clear previous search results
//             json.results.forEach((result) => {
//                 searchresult.innerHTML += `
//                     <div id="card">
//                         <img src="${apiimge}${result.poster_path}">
//                         <h4>${result.original_title}</h4>
//                     </div>
//                 `;
//             });
//         })
//         .catch((error) => {
//             console.error('Error fetching data:', error);
//         });
// });



// searchbar.addEventListener("keyup",function () {
//     const url =  `${baselink}/search/movie?api_key=${this.search.value}&language=en-US`

//         fetch (url,option)
//         .then((response) => response.json())
//          .then((json) =>{
//             (json.results).map((results)=>{
//                 searchresult.innerHTML += `
//             <div id="card">
//             <img src="${apiimge}${results.poster_path}">
//             <h4>${results.original_title}</h4>
//             </div>
//             `
//          })

//             })
            

    
// })

searchbar.addEventListener("keyup", function () {
    const searchQuery = this.value; // Assuming "this" refers to the searchbar element
    const url = `${baseurl}/search/movie?api_key=${apikey}&language=en-US&query=${searchQuery}`;

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    fetch(url, options)
        .then((response) => response.json())
        .then((json) => {
            // searchresult.innerHTML = ""; // Clear previous search results
            json.results.map((result) => {
                searchresult.innerHTML += `
                    <div id="card">
                        <img src="${apiimge}${result.poster_path}">
                        <h4>${result.original_title}</h4>
                    </div>
                `;
            });
        })
      
});


