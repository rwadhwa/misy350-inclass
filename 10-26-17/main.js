console.log('hello');

// array

let bucket_list = ["learn to fly", "go to africa", "go to japan",788];
console.log(bucket_list[3]);

// for loop

for (let i = 0; i < bucket_list.length; i++){
  console.log("-"+bucket_list[i]);
}

//nested for loop
let movie_list1 = [
  "1movie",
  "2movie",
  "3movie",
];

let movie_list2 = [
  "12movie",
  "24movie",
  "2movie",
  "6movie",
  "3movie"
];

for (let i = 0; i < movie_list1.length; i++) {
  for (let j=0; j <movie_list2.length; j++) {
    if (movie_list1[i]==movie_list2[j]){
      console.log(movie_list1[i]);
    }
  }
}

// iterator

movie_list1.forEach(movie => console.log(">>" + movie));
let new_movie_list = movie_list2.filter(movie => movie.slice(0,1) != "2");
console.log(new_movie_list);
