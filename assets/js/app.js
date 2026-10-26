const cl=console.log;

// this code is by using find method

var companies = [
    { name: "Company One",id:1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id:2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three",id:3,  category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four",id:4,  category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five",id:5,  category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id:6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id:7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight",id:8,  category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id:9, category: "Retail", start: 1981, end: 1989 }
];

//01 
let givenId = 5;

let result = companies.find((params) => {
    return params.id === givenId;
});

cl(result);



//02
let result01=companies.find((params)=>{
    return params.category.toLowerCase().includes('retail');
});
cl(result01);


//03
let result02 = companies.find((params)=>{
    return params.category.indexOf('Finance')>-1;
});
cl(result02);








////////////////////////////////////
let num =[1,3,7,5,2,0,20,100,20,30,40,50,60,70,80,90]


//03
let result03=num.find((params)=>{
    return params>30;

})
cl(result03);

//04
let result04 = num.find((comp)=>{
    return comp<20;
});
cl(result04);


//05
let result05 =num.find((params)=>{
    return params==4;
})
cl(result05);

//06
let result06 = num .find((comp)=>{
    return comp >=10;
});
cl(result06);



///////////////////////////////////////
const students = [
    { id: 1, name: "Rahul", age: 22 },
    { id: 2, name: "Priya", age: 21 },
    { id: 3, name: "Amit", age: 23 }
];

//07
let givenId1 = 2;

let result07 = students.find((student) => {
    return student.id === givenId1;
});

cl(result07);



//08
let givenId2=4;

let result08 = students .find((comps)=>{
        return comps.id || givenId2;
});
cl(result08);
 

///////////////////////////////////

//09
const movies = [
    { title: "Movie A", rating: 6.5 },
    { title: "Movie B", rating: 8.2 },
    { title: "Movie C", rating: 9.1 }
];

let result09 = movies.find((params) => {
    return params.rating > 8;
});

cl(result09);
