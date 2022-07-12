var a = 10 - Math.random() * 20;
var b = 10 - Math.random() * 20;
var c = 10 - Math.random() * 20;


var d = Math.pow(b, 2) - 4*a*c;

if(d > 0){
   console.log("Imame dva (2) korena");
   console.log("x1 = "+ ( ( -b+Math.sqrt(d))/(2*a) ));
   console.log("x2 = "+ ( ( -b-Math.sqrt(d))/(2*a) ));
} else if(d === 0) {
   console.log("Imame edin (1) koren");
   console.log("x1 = x2 = "+ ( ( -b)/(2*a) ));
} else {
   console.log("Nqmame koreni");
}