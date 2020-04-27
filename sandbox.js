// -- For Loops

// for(let i = 0; i < 5; i++){
//   console.log('in loop:', i);
// }
// console.log('Loop Finished');

// const persons = ['Jhoedy', 'Sheila', 'Elizabeth'];

// for(let i = 0; i < persons.length; i++){
//     //console.log(persons[i]);
//     let html = `<div>${persons[i]}</div>`;
//     console.log(html);
// }

// -- While Loops 

// const names = ['Bruno', 'Alice','Indurain'];
// let i = 0;

// while(i < 5 ){
//  console.log('in loop: ', i);
//  i++;
// }

// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

// -- Do while loops

// let i = 3;
// do { 
//     console.log('Val of i is: ', i);
//     i++;
// } while ( i < 5);

// -- If Statements 

// const age = 20;
// if(age > 15){
//     console.log('You are over 15  years old');
// }

// const ninjas = ['Alan','Jose','Victoria','Alonso'];
// if(ninjas.length > 3){
//     console.log("That's a lot of ninjas");
// }

// const password = 'p@ss';
// if(password.length >= 8){
//     console.log ( 'That password is long enough');
// } 

// -- Else if Statements

// const password = 'p@ss';

// if(password.length >= 12){
//     console.log('that password is might strong');
// }else if(password.length >= 8){
//     console.log('that password is long enough!');
// }else{
//     console.log('password is not long enough');
// }

//--- Logical operators - OR || AND and &&
// const password = 'p@ss';

// if(password.length >= 12 && password.includes('@')){
//     console.log('that password is might strong');
// }else if(password.length >= 8 || password.includes('@') && password.length >= 5){
//     console.log('that password is strong enough!');
// }else{
//     console.log('password is not strong enough')
// }

// --- Logical NOT (!)

// let user = false;

// if(!user){
//     console.log('you must be logged in to continue')
// }

// console.log(!true);
// console.log(!false);

// -- Break an continue 

// const scores = [50, 25, 0, 30, 100, 20, 10];
// for(let i = 0;i < scores.length; i++){
//     if(scores[i] === 0){
//         continue;
//     }
//     console.log('your score: ', scores[i]);
//     if(scores[i] === 100){
//         console.log('congrats, you got the top score!');
//         break;
//     }
// }

// --- switch statements

// const grade = 'A';

// switch(grade){
//     case 'A':
//         console.log('You got an A');
//         break;    
//     case 'B':
//         console.log('You got a B');
//         break;  
//     case 'C':
//         console.log('You got a C');
//         break;  
//     case 'D':
//         console.log('You got a D');
//         break;  
//     case 'E':
//         console.log('You got an E');
//         break;  
//     default:
//         console.log('Error');
// }

// -- Variables & block scope

// const age = 30;

// if(true){
//     const age = 40;
//     const name = 'Elizabeth'
//     console.log('inside 1st code block: ', age, name);

//     if(true){
//         const age = 50;
//         console.log('inside 2nd code block', age);
//     }
// }
// console.log('outside code block: ', age, name, test);