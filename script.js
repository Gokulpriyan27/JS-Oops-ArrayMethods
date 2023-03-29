/* ------------------------------------------------------------------------------------------------------------------------*/


/*
The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

*/

class Movie{
    
    constructor(title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    
    getMovieTitle(){
        return this.title
    };
    
    getStudio(){
        return this.studio;
    }
    
    getMovieRating(){
        return this.rating;
    }
}


let movie1 = new Movie("Top Gun","Paramount");
let movie2 = new Movie("Bullet Train","Sony Pictures","PG13");
let movie3 = new Movie("John Wick","Lionsgate");
let movie4 = new Movie("Creed","MGM studios","PG13");
let movie5 = new Movie("Avengers Secret War","Marvel Studios");
let movie6 = new Movie("Minions","Universal pictures","R");
let movie7 = new Movie("Avatar","20th Century studios");
let movie8 = new Movie("Cinderella","Walt Disney","PG13");

let moviesArray = [movie1,movie2,movie3,movie4,movie5,movie6,movie7,movie8];

let pgRatedMovies = moviesArray.filter((movie)=>movie.getMovieRating()==="PG");

console.log("List of PG rated movies",pgRatedMovies);


let newInstance = new Movie("Casino Rayale","Eon Productions","PG13");

console.log(`Title of the movies is ${newInstance.getMovieTitle()}`);
console.log(`Studio of the movies is ${newInstance.getStudio()}`);
console.log(`Rating of the movies is ${newInstance.getMovieRating()}`);

/* ------------------------------------------------------------------------------------------------------------------------*/


/*Convert the UML diagram to Typescript class. - use number for double */

class Circle{

    constructor(radius=1.0,color="red"){
        this.radius = radius;
        this.color = color;
    }

    circle(){
        return (`Color of the circle is ${this.color} and Radius of the circle is ${this.radius}`);
    }

    circle(radius){
        this.radius=radius;
        return (`Radius of the circle ${this.radius}`);
    }

    circle(radius,color){
        this.radius=radius;
        this.color=color;
        return (`The radius of circle is ${this.radius} and color is ${this.color}`);
    }

    getRadius(){
        return (this.radius);
    }

    setRadius(radius){
        this.radius=radius;
    }

    setColor(color="red"){
        this.color=color;
    }

    getColor(){
        return this.color;
    }

    getArea(){
        return 3.14 *(this.radius)*(this.radius);
    }

    getCircumference(){
        return (this.radius)*2*3.14;
    }

}

let circleInstance = new Circle(7,"violet");

console.log(circleInstance);

console.log(circleInstance.circle()); 
console.log(circleInstance.circle(5)); 
console.log(circleInstance.circle(4,"white")); 
circleInstance.setRadius();
console.log("The radius is :",circ.getRadius()); 
circleInstance.setColor('Green');
console.log("The color is :",circleInstance.getColor());
console.log("The area of circle :",circleInstance.getArea()); 
console.log("The circumference of circle: ",circleInstance.getCircumference());

/* ------------------------------------------------------------------------------------------------------------------------*/

/*Write a "person" class to hold all the details */


class Person{

    constructor(personName,age,email,mobileNumber,address){
        this.name=personName;
        this.age=age;
        this.email=email;
        this.mobileNumber=mobileNumber;
        this.address=address;
    }

    getName()
    {
        return this.name;
    }
    getAge()
    {
        return this.age;
    }
    getEmail()
    {
        return this.email;
    }
    getMobileNumber()
    {
        return this.mobileNumber;
    }
    getAddress()
    {
        return this.address;
    }

}

let personInstance = new Person("John","27","john123@gmail.com","9876543211","Mumbai");

console.log('Name: ',personInstance.getName());
console.log('Age: ',personInstance.getAge());
console.log('Email: ',personInstance.getEmail());
console.log('Mobile_Number: ',personInstance.getMobileNumber());
console.log('Address: ',personInstance.getAddress());

/* ------------------------------------------------------------------------------------------------------------------------*/

/* // write a class to calculate uber price. */

class Uber{
    constructor(basePrice=20,costPerKm=15,costPerMinute=2,BookingCharges=10,time=1,kms=1){
        this.basePrice=basePrice;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
        this.BookingCharges =BookingCharges;
        this.time = time;
        this.kms = kms;
    }

    totalPrice(time=this.time,kms=this.kms){
        console.log(`Total price of your ride is Rs ${(this.basePrice)+(this.costPerKm*kms)+(this.costPerMinute*time)+(this.BookingCharges)}`);
    }
}

let ride = new Uber();

ride.totalPrice(25,250);
ride.totalPrice(10,8);

/* ------------------------------------------------------------------------------------------------------------------------*/