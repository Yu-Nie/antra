// question 1
let salaries = { John: 100, Ann: 160, Pete: 130 };
function calcSalary(salaries) {
    let valuse = Object.values(salaries)
    var total = 0;
    for (var i = 0; i < valuse.length; i++) {
        total += valuse[i];
    }
    console.log("total salary is: " + total)
}

const calculator = new calcSalary(salaries);


// question 2
let menu = { width: 200, height: 300, title: "My menu" };
function multiplyNumeric(Obj) {
    for (let key in Obj) {
        if (typeof Obj[key] == 'number') {
            Obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);
console.log(menu);


// question 3
function checkEmailId(str) {
    const re = new RegExp("^.*\[@].*[\.].*$", "i");
    if (str.match(re)) {
        return true;
    } else {
        return false;
    }
}
console.log(checkEmailId("123@456.78"));
console.log(checkEmailId(".456@78"));


// question 4

function truncate(str, maxlength){
    if (str.length > maxlength){
        str = str.substring(0,maxlength) + "...";
    }
    console.log(str);
}

truncate("What I'd like to tell on this topic is:", 20);
truncate("Hi everyone!", 20);

// question 5
const array = ["James", "Brennie"];
console.log(array);
array.push("Robert");
console.log(array);
var mid = (array.length-1)/2;
array[mid] = "Calvin";
console.log(array);
array.shift()
console.log(array);
array.unshift("Rose", "Regal");
console.log(array);