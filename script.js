// pt.1
const myAlphabet= ['A', 'B', 'C', 'D','E','F', 'G'];

myAlphabet.length;
console.log(myAlphabet.length);

function myAlphabetLength () {
        let myAlphabetLength = myAlphabet.length;
        console.log ( myAlphabetLength);
        if (myAlphabetLength<4){
            console.log ("true");
        }else {
            console.log("false")
        }
        
}

myAlphabetLength (myAlphabet);


// pt.2

function checkFunc (a,b) {
    console.log(a + " " +"sometimes means" +" " +b);
}

checkFunc('Yes',false);

//pt.3

const Planets = ["Earth","Mars","Uranus","Venus","Pluto"];

for (let i=0; i<Planets.length; i++) {
    console.log (Planets[i])
}

// pt.4


const wowDatatypes = [true,'yes', 50];

for ( let i=0 ; i<wowDatatypes.length; i++) {
    console.log (wowDatatypes[i])+ " " + wowDatatypes.indexOf(wowDatatypes[i]) + " " + typeof(wowDatatypes[i]);
}

// pt.5

let myArr = [ 1, 2, 'One', true];

myArr.forEach(element=> console.log(element));

//pt.6

const student1Courses = ['Math', 'English', 'Programming'];
const student2Courses = ['Geography', 'Spanish', 'Programming'];
 
function getCommonItems(student1Courses, student2Courses) {
    let common = []; 
    
    for (let i = 0; i < student1Courses.length; i++) {
      for (let j = 0; j < student2Courses.length; j++) {
        if (student1Courses[i] == student2Courses[j]) { 
          common.push(student1Courses[i]); 
        }
      }
    }
   
    return common; 
}
      
let commonItemList= getCommonItems(student1Courses,student2Courses); 
   
console.log(commonItemList);

//pt.7

const food1 = ['Noodle', 'Pasta', 'Ice-cream'];
const food2 = ['Fries', 'Ice-cream', 'Pizza'];

function findCommon ( food1, food2) {
    let commons = []; 
    
    for (let i = 0; i < food1.length; i++) {
      for (let j = 0; j < food2.length; j++) {
        if (food1[i] == food2[j]) { 
          commons.push(food1[i]); 
        }
      }
    }
   
    return commons; 
}

let commonItem= findCommon ( food1, food2); 
   
console.log(commonItem);

// pt.8

const values1= ['Apple', 1, false];
const values2 = ['Fries', 2 ,true];
const values3 = ['Mars', 9, 'Apple'];

function getSameItem(values1, values2, values3) {
    let same = []; 
    
    for (let i = 0; i < values1.length; i++) {
      for (let j = 0; j < values2.length; j++) {
        for (let m = 0; m < values3.length; m++){
            if (values1[i] == values2[j] == values3[m] ) { 
                same.push(values1[i]);

        }
         
        }
      }
    }
   
    return same; 
}
      
let sameItem = getSameItem(values1, values2, values3); 
   
console.log(sameItem);

//pt.9

let furniture = ['Table', 'Chairs','Couch'];

let element = furniture.join('')

console.log(element);

for (i=0; i<element.length; i++) {
    console.log (element[i]);
}


