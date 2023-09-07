const array1=[12,123,1234,1223455];
const array2=[1,2,3,4,5];
array1.push(123456);
console.log(array1);

const array3=array2.map(Element=>Element*2)
console.log(array3);

const filteredArray1=array2.filter(Element=>Element>2);
console.log(filteredArray1);

const sortedDesc = array2.sort((a,b)=>a>b ? -1:1);
console.log(sortedDesc);

const sortedAsce = array2.sort((a,b)=>a<b ? -1:1);
console.log(sortedAsce);

array2.forEach(Element=>
    (
        console.log(Element)
    ));
console.log(array2.length);

const array11 = [12,123,1234,12345];
const array22 = [5,2,4,1,3];
array1.push(123456);
console.log(array1);
console.log(array1[2]);
console.log(array1.indexOf(123));
console.log(array1.length);

const array33 = array2.map(element=> element*2);
console.log(array3)

const filteredArray = array2.filter(element=> element<2);
console.log(filteredArray);

const sortedDecent = array2.sort((a,b) => a>b ? -1 : 1);
console.log(sortedDecent);

const sortedAssending = array2.sort((a,b) => a<b ? -1 : 1);
console.log(sortedAssending);

array2.forEach(element => (
    console.log(element)
));

const numArray = [6,7,8,9,10];
const newArray = array2.concat(numArray);
console.log(newArray);

const EveryMethod = numArray.every(element => element >3);
console.log(EveryMethod);

const someArray = array2.some(Element => Element>3);
console.log(someArray);

const includeArray = array2.includes(6);
console.log(includeArray);

const strArray = ["M","U","K","E","S","H"];
const joinedArray = strArray.join('');
console.log(joinedArray);

const Array2 = [1,2,3,4,5];
const reducedArray = Array2.reduce((total,current) => total+current);
console.log(reducedArray);

const FindArray = Array2.find(Element => Element>3);
console.log(FindArray);

const FindIndex = Array2.findIndex(Element=>Element===3);
console.log(FindIndex);

const sliceArray = strArray.slice(3,6);
console.log(sliceArray);

const reerseArray = Array2.reverse();
console.log(reerseArray)

const fillArray = new Array(3);
console.log(fillArray);
const filledArray = fillArray.fill(10);
console.log(filledArray);

const popValue = Array2.pop()
console.log("Pop Value: ",popValue,"New Array:",Array2);

const shiftArray = Array2.shift();
console.log(shiftArray);

const StringArray =  ["M","U","K","E","S","H"];
const UnShiftArray = StringArray.unshift("MM");
console.log('UnShifted Array:',StringArray,' New Array',UnShiftArray );