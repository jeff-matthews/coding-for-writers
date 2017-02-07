//A collection of generic statements that the bot uses to respond to user input.
const genericResponses = [
  "Uh-uh...",
  "Go on...",
  "You must've eaten paint chips as a child.",
  "That's very interesting.",
  "That's boring. Please get out of my office."
]
//A collection of questions that the bot uses to respond to user input that contains a question mark.
const questionResponses = [
  "Why are you whining so much?",
  "Do you like to hear yourself talk constantly?",
  "If you were a hotdog, would you eat yourself?",
  "When was the last time you flossed?",
]
//A collection of statements that the bot uses to respond to user input that contains an exclamation point.
const exclamationResponses = [
  "Simmer down now.",
  "Don't get your panties in a bunch.",
  "Don't get so excited. I'm not a <em>real</em> a therapist.",
  "You better take that base outta your voice."
]
//Reverses user input pronouns with bot point of view to make bot responses sound more realistic.
const povSwitches = {
 "I": "you",
 "i": "you",
 "me": "you",
 "myself": "yourself",
 "am": "are",
 "my": "your",
 "My": "your",
 "I'm": "you're",
 "I'd": "you'd",
 "I'll": "you'll",
 "i'm": "you're",
 "i'd": "you'd",
 "i'll": "you'll"
}
//Starting sentence fragments for more realistic bot responses to user input.
const questionStarts = [
 "Why do you say that",
 "How is it that",
 "Can you tell me more about how",
 "And why is it that",
 "Can you explain why you say that"
]
//Outputs user and bot responses to the screen.
var therapySession

//Print the bot introduction on the screen when the page loads.
function initialize() {
  therapySession = "<p> I am the psychotherapist. What is your problem? </p>";
  conversation.innerHTML = therapySession;
}

//Called when users click the submit button.
function submitLine() {
  var patientLine = textbox.value;
  therapySession += "<p> <em>" + patientLine + "</em> </p>";
  var therapistLine;

  //Returns a response based on the user inupt punctuation mark.
  if (lastChar(patientLine) == "?") {
    therapistLine = randomElement(questionResponses);
  } else if (lastChar(patientLine) == "!") {
    therapistLine = randomElement(exclamationResponses);
    } else {
    therapistLine = createQuestion(patientLine);
      }
 // Still no good response, so use a basic response.
 if (therapistLine == null) {
 therapistLine = randomElement(genericResponses);
 }
 therapySession += "<p>" + therapistLine + "</p>";
 conversation.innerHTML = therapySession;
}
//Returns a random element from inside a specified array.
function randomElement(myArray) {
  var index = Math.floor(Math.random() * myArray.length);
  return myArray[index];
}
//Returns the last character in a string.
function lastChar(myString) {
  return myString.substring(myString.length - 1);
}
//Creates a question from user input.
function createQuestion(patientLine) {

  if (patientLine.toLowerCase().indexOf("you") != -1) {
    return null;
  }

  //Remove period if present.
  if (lastChar(patientLine) == ".") {
    patientLine = patientLine.substring(0, patientLine.length - 1);
  }
  var modifiedLine = " " + patientLine + " ";
  var found = false;

  //Loop through and replace pronouns to switch point of view.
  for (var property in povSwitches) {
    if (povSwitches.hasOwnProperty(property)) {
      var modifiedProperty = " " + property + " ";
      if (modifiedLine.indexOf(modifiedProperty) != -1) {
        modifiedLine = modifiedLine.replace(modifiedProperty,
          " " + povSwitches[property] + " ");
          found = true;
      }
    }
  }
  if (found) {
    modifiedLine = modifiedLine.substring(0, modifiedLine.length - 1);
    return randomElement(questionStarts) + " " + modifiedLine + "?";
  }
  return null;
}
