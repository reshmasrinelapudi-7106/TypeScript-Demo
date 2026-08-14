var movie = "Seeta Ramam";
var rating = 5;
var isBlockBuster = true;
function movieDetails(movie, rating, isBlockBuster) {
    return "".concat(movie, " has rating ").concat(rating, " and it is BlockBuster movie.");
}
var MainActors = ["Dulquer Salman", "Mrunal Thakur"];
var movieInfo = movieDetails(movie, rating, isBlockBuster);
console.log(movieInfo);
console.log("Main actors of the ".concat(movie, " are : ").concat(MainActors.join(",")));
