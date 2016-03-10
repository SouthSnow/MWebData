var arr = [1,2,3,4,5,6,7,8,9,0];
var arr1 = arr.slice(3);
// console.log(arr1);

var string = 'hkafkh,hheh,123,54,huej,guo';
var strings = string.split(',');
// console.log(strings);

var string2 = '/controller/action/a/b/c';
var strings2 = string2.split('/');
// console.log(strings2);

var arr2 = arr.reduce(function(x){
	return x + 2;
},2);
console.log(arr2);
console.log(arr.toString());

var obj = {
	o:1,
	r:2,
	person:'pangfuli'
}

console.log(obj.person);
