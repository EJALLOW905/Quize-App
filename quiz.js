// collecting the check function in reference with the html
function check(){
    // intial counter 0
let e=0;
// selecting the question from the html
let q1=document.quiz.question1.value;
let q2=document.quiz.question2.value;
let q3=document.quiz.question3.value;
let q4=document.quiz.question4.value;
let q5=document.quiz.question5.value;
// selecting the result from html
let result= document.getElementById('result')
let quiz= document.getElementById('quiz')
// answers to the questions
if(q1=='javascript'){e++};
if(q2=='Mo'){e++}
if(q3=='infrastructure'){e++};
if(q4=='Sundiata'){e++};
if(q5=='Malnutrition'){e++};
quiz.style.display='non';
// conditions for low or awesome
if (e<=3){
result.textContent=`your score is ${e}, too🤦‍♂️🤷‍♂️ low try again.`
} else{
    result.textContent=`your score is ${e}, awesome keep it up🌟✌.`
}
};

