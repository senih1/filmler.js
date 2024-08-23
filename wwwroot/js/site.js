let movies = [
    {
        name: "Inception",
        plot: "Bir grup hırsız, insanların rüyalarına girip bilinçaltına fikirler yerleştirme işini yapmaktadır. Ancak son görevleri, bir fikri “farklı bir yere” yerleştirmek zorunda oldukları bir durum yaratır.",
        category: "Bilim Kurgu, Aksiyon, Gizem",
        rating: 8,
        image: "https://flxt.tmsimg.com/assets/p7825626_p_v8_af.jpg"
    },
    {
        name: "The Shawshank Redemption",
        plot: "Suçsuz yere hapse düşen bir adamın, Shawshank Hapishanesi'nde geçirdiği yıllar boyunca umut, dostluk ve özgürlük arayışını anlatır.",
        category: "Dram, Suç",
        rating: 9,
        image: "https://irs.www.warnerbros.com/gallery-jpeg/the_shawshank_redemption_posterlarge_0-675188670.jpg"
    },
    {
        name: "The Grand Budapest Hotel",
        plot: "Bir otelin eksantrik yöneticisi ve onun genç asistanının, otelin ünlü bir tablosunu çalmakla suçlanan bir misafirle yaşadığı olayları konu alır.",
        category: "Komedi, Macera, Suç",
        rating: 7,
        image: "https://image.tmdb.org/t/p/original/vuanO9HGCCllmOpTemtSguLevnq.jpg"
    },
    {
        name: "The Matrix",
        plot: "Bilgisayar programcısı Neo, dünyamızın aslında bir yapay gerçeklik olduğunu keşfeder ve gerçek dünyayı kurtarmak için savaşır.",
        category: "Bilim Kurgu, Aksiyon, Gerilim",
        rating: 8,
        image: "https://picfiles.alphacoders.com/385/385304.jpg"
    },
    {
        name: "Spirited Away",
        plot: "Genç bir kız, ailesinin tuhaf bir dünyaya çekilmesinin ardından, kendisini bu büyülü dünyada kaybolmuş ve kurtulmaya çalışırken bulur.",
        category: "Animasyon, Fantastik, Macera",
        rating: 7,
        image: "https://image.tmdb.org/t/p/original/yA6TbjztJtop9sqNkZjhsUDq2Uy.jpg"
    },
    {
        name: "Interstellar",
        plot: "Dünya'nın yaşanabilirliğini kaybetmesiyle, bir grup astronot, yeni gezegenler bulmak için bir solucan deliğinden geçerek uzak bir galaksiye keşif yapar.",
        category: "Bilim Kurgu, Dram, Macera",
        rating: 9,
        image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    },
    {
        name:"Pulp Fiction",
        plot:"Tarantino'nun yazıp yönettiği bu film, çeşitli karakterlerin iç içe geçmiş hikayelerini ve karmaşık anlatım tarzını konu alır.",
        category:"Suç, Dram",
        rating: 9,
        image:"https://picfiles.alphacoders.com/371/371109.jpg",
    },
    {
        name: "The Godfather",
        plot: "Corleone ailesinin başkanı olan Don Vito Corleone'nin ve ailesinin suç dünyasındaki hakimiyetini ve zorluklarını konu alır.",
        category: "Suç, Dram",
        rating: 10,
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
        name: "Parasite",
        plot: "Sosyoekonomik farkların dramatik bir şekilde ele alındığı bu Güney Kore filmi, zengin bir aileye sızan yoksul bir ailenin hikayesini anlatır.",
        category: "Dram, Komedi, Gerilim",
        rating: 8,
        image: "https://1.bp.blogspot.com/-RYy5gjK6Pm8/X-2Y_e7JggI/AAAAAAAAONA/6-kOiNUVv44mO_yoO7rj2qk1yeGMT4FAwCLcBGAsYHQ/s2048/Parasite.jpg",
    },
    {
        name: "The Silence of the Lambs",
        plot: "Genç bir FBI ajanı, seri katil Buffalo Bill'i yakalamak için hapisteki başka bir seri katil olan Hannibal Lecter'dan yardım alır.",
        category: "Gerilim, Suç, Dram",
        rating: 7,
        image: "https://posterspy.com/wp-content/uploads/2022/02/245644052_318688550062995_8148643643221859134_n.jpg",
    },
];

function handleSubmit(e) {
    e.preventDefault();
    let movieFormData = new FormData(movieInputForm);
    let movieFormObj = Object.fromEntries(movieFormData);
    pushMovie(movieFormObj);
    movieInputForm.reset();
}

movieInputForm.addEventListener("submit", handleSubmit);

function pushMovie(movie) {
    movies.push(movie)
    render();
}

function render() {
    movieList.innerHTML = ``
    for (let movie of movies) {
        movieList.innerHTML += `<tr>
        <td><img src="${movie.image}" alt="${movie.name}" style="width: 150px; height: 200px;"></td>
        <td>${movie.name}</td>
        <td>${movie.plot}</td>
        <td>${movie.category}</td>
        <td>${movie.rating}/10</td>
        </tr>`;
    }
}

render();