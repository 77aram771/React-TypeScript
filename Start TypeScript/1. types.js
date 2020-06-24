var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = 'Hello TS';
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ['Hello', 'Typescript'];
// Tuple
var contact = ['Aram', 99431612];
// Any
var variable = 42;
//...
variable = 'String';
variable = [];
// ====
function sayMyName(name) {
    console.log(name);
}
sayMyName('Aram');
// Never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
//const id3: ID = true
