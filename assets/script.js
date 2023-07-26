/* define the array topics */
var topics = ["HTML", "CSS", "Git", "Javascript"];

/* random number array selection */
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

/* create the function that will list topics */
function listTopics() {
    for (var x = 0; x <topics.length; x++) {
        console.log(topics[x]);
    }
   }

   /* allow the user to select topics */
function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
       } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
       } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
       } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
       } else {
        console.log('Please try again!');
       }
}

/* call functions */
console.log('Here are the topics we covered in the Prework');
listTopics();

console.log('Which topic should we study first');
selectTopic();





