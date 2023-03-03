let movieData = {
    "<h1>The Darjeeling Limited</h1>": {
        plot: "<p> A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other. </p>",
        cast: ["<p>Jason Schwartzman, Owen Wilson, Adrien Brody</p>"],
        runtime: "<p>151</p>",
        rating: "<p>7.2<p>",
        year: "<p>2007</p>",
        genres: "<p>Adventure Comedy Drama</p>"
    },
    "<h1>The Royal Tenenbaums</h1>": {
        plot: "<p>The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons</p>",
        cast: ["<p>Gene Hackman, Gwnyeth Paltrow, Anjelica Huston</p>"],
        runtime: "<p>170</p>",
        rating: "<p>7.6</p>",
        year: "<p>2001</p>",
        genres: "<p>Comedy Drama</p>"
    },
    "<h1>Fantastic Mr. Fox</h1>": {
        plot: "<p>An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.</p>",
        cast: ["<p>George Clooney, Meryl Streep, Bill Murray, Jason Schwartzman</p>"],
        runtime: "<p>147</p>",
        rating: "<p>7.9</p>",
        year: "<p>2009</p>",
        genres: "<p>Animation Adventure Comedy Crime Drama Family</p>"
    },
    "<h1>The Grand Budapest Hotel</h1>": {
        plot: "<p>A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.</p>",
        cast: ["<p>Ralph Fiennes, F. Murray Abraham, Mathieu Amalric</p>"],
        runtime: "<p>159</p>",
        rating: "<p>8.1</p>",
        year: "<p>2014</p>",
        genres: "<p>Adventure Comedy Crime</p>"
    },
};

// movieData["The Darjeeling Limited"].plot
// movieData["Fantastic Mr. Fox"].runtime
// movieData["antastic Mr. Fox"].cast[1]

//querySelector()


function adventure() {


    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";


    for (let movie in movieData) {

        console.log(movie);


        if (movieData[movie].genres.includes("Adventure")) {


            const movieDiv = document.createElement("div");
            movieDiv.className = "movieDiv";


            const title = document.createElement("p");
            const plot = document.createElement("p");
            const cast = document.createElement("p");
            const runtime = document.createElement("p");
            const rating = document.createElement("p");
            const year = document.createElement("p");
            const genres = document.createElement("p");


            title.innerHTML = movie;
            plot.innerHTML = "<strong>Plot: </strong>" + movieData[movie].plot;
            cast.innerHTML = "<strong>Cast: </strong>" + movieData[movie].cast;
            runtime.innerHTML = "<strong>Runtime: </strong>" + movieData[movie].runtime;
            rating.innerHTML = "<strong>Rating: </strong>" + movieData[movie].rating;
            year.innerHTML = "<strong>Year: </strong>" + movieData[movie].year;
            genres.innerHTML = "<strong>Genres: </strong>" + movieData[movie].genres;


            movieDiv.appendChild(title);
            movieDiv.appendChild(plot);
            movieDiv.appendChild(cast);
            movieDiv.appendChild(runtime);
            movieDiv.appendChild(rating);
            movieDiv.appendChild(year);
            movieDiv.appendChild(genres);

            movieList.appendChild(movieDiv);

            document.body.appendChild(document.createElement("br"));

        }
    }

}

function comedy() {

    const movieList = document.getElementById("movieList");

    movieList.innerHTML = "";

    for (let movie in movieData) {

        if (movieData[movie].genres.includes("Comedy")) {

            const movieDiv = document.createElement("div");
            movieDiv.className = "movieDiv";

            const title = document.createElement("p");
            // title.className = "title";
            const plot = document.createElement("p");
            // plot.className = "plot";
            const cast = document.createElement("p");
            const runtime = document.createElement("p");
            const rating = document.createElement("p");
            const year = document.createElement("p");
            const genres = document.createElement("p");


            title.innerHTML = movie;
            plot.innerHTML = "<strong>Plot: </strong>" + movieData[movie].plot;
            cast.innerHTML = "<strong>Cast: </strong>" + movieData[movie].cast;
            runtime.innerHTML = "<strong>Runtime: </strong>" + movieData[movie].runtime;
            rating.innerHTML = "<strong>Rating: </strong>" + movieData[movie].rating;
            year.innerHTML = "<strong>Year: </strong>" + movieData[movie].year;
            genres.innerHTML = "<strong>Genres: </strong>" + movieData[movie].genres;


            movieDiv.appendChild(title);
            movieDiv.appendChild(plot);
            movieDiv.appendChild(cast);
            movieDiv.appendChild(runtime);
            movieDiv.appendChild(rating);
            movieDiv.appendChild(year);
            movieDiv.appendChild(genres);

            movieList.appendChild(movieDiv);

            document.body.appendChild(document.createElement("br"));

        }
    }
}

function drama() {



    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";


    for (let movie in movieData) {

        console.log(movie);


        if (movieData[movie].genres.includes("Drama")) {


            const movieDiv = document.createElement("div");
            movieDiv.className = "movieDiv";


            const title = document.createElement("p");
            const plot = document.createElement("p");
            const cast = document.createElement("p");
            const runtime = document.createElement("p");
            const rating = document.createElement("p");
            const year = document.createElement("p");
            const genres = document.createElement("p");


            title.innerHTML = movie;
            plot.innerHTML = "<strong>Plot: </strong>" + movieData[movie].plot;
            cast.innerHTML = "<strong>Cast: </strong>" + movieData[movie].cast;
            runtime.innerHTML = "<strong>Runtime: </strong>" + movieData[movie].runtime;
            rating.innerHTML = "<strong>Rating: </strong>" + movieData[movie].rating;
            year.innerHTML = "<strong>Year: </strong>" + movieData[movie].year;
            genres.innerHTML = "<strong>Genres: </strong>" + movieData[movie].genres;


            movieDiv.appendChild(title);
            movieDiv.appendChild(plot);
            movieDiv.appendChild(cast);
            movieDiv.appendChild(runtime);
            movieDiv.appendChild(rating);
            movieDiv.appendChild(year);
            movieDiv.appendChild(genres);

            movieList.appendChild(movieDiv);

            document.body.appendChild(document.createElement("br"));

        }
    }

}

function crime() {



    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";


    for (let movie in movieData) {

        console.log(movie);


        if (movieData[movie].genres.includes("Crime")) {


            const movieDiv = document.createElement("div");
            movieDiv.className = "movieDiv";


            const title = document.createElement("p");
            const plot = document.createElement("p");
            const cast = document.createElement("p");
            const runtime = document.createElement("p");
            const rating = document.createElement("p");
            const year = document.createElement("p");
            const genres = document.createElement("p");


            title.innerHTML = movie;
            plot.innerHTML = "<strong>Plot: </strong>" + movieData[movie].plot;
            cast.innerHTML = "<strong>Cast: </strong>" + movieData[movie].cast;
            runtime.innerHTML = "<strong>Runtime: </strong>" + movieData[movie].runtime;
            rating.innerHTML = "<strong>Rating: </strong>" + movieData[movie].rating;
            year.innerHTML = "<strong>Year: </strong>" + movieData[movie].year;
            genres.innerHTML = "<strong>Genres: </strong>" + movieData[movie].genres;


            movieDiv.appendChild(title);
            movieDiv.appendChild(plot);
            movieDiv.appendChild(cast);
            movieDiv.appendChild(runtime);
            movieDiv.appendChild(rating);
            movieDiv.appendChild(year);
            movieDiv.appendChild(genres);

            movieList.appendChild(movieDiv);

            document.body.appendChild(document.createElement("br"));

        }
    }

}

