var  a = [1,2,3,4,5,6,7,8,9,0];
var  a1 = a.filter(function(x){
	return x < 5;
});

// console.log(a1);

var a2 = a.slice(2,10);
// console.log(a2);
// console.log(a);

a.push(2);
// console.log(a);

a.push(1,2,3,4,5,6);
// console.log(a);


// a.forEach(function(x,index, a) {
// 	console.log(x);
// 	console.log(index);
// 	console.log(a.toString());
// })

var b = a.map(function(value){
	return value * value;
})
console.log(b);


function constfuncs() {
	var funcs = [];
	for (var i = 0 ; i < 10; i++) {
		funcs[i] = function(){
			return i;
		}
	}
	return funcs;
}

var funcs = constfuncs();
var va = funcs[5]();
console.log(va);