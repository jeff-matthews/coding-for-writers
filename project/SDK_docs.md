# Therapist Bot JavaScript SDK Documentation
SDK documentation for the Eliza therapist bot.

## Constants
Name|Description|Type
----|-----------|----
genericResponses|A collection of generic statements that the bot uses to respond to user input.|Array
questionResponses|A collection of questions that the bot uses to respond to user input that contains a question mark.|Array
exclamationResponses|A collection of statements that the bot uses to respond to user input that contains an exclamation point.|Array
povSwitches|Reverses user input pronouns with bot point of view to make bot responses sound more realistic.|Object
questionStarts|Starting sentence fragments for more realistic bot responses to user input.|Array

## Functions

### lastChar(myString)
Returns the last character in a string.

**Parameters:**

  `myString`
  Type: String
  Description

**Returns:**

  Type: String
  Description

### randomElement(myArray)
Returns a random element from inside a specified array.

**Parameters:**

  `myArray`
  Type: Array
  Description

**Returns:**

  Type: String
  The index that specifies an element in the specified array.

### createQuestion(patientLine)
Creates a question from user input.

**Parameters:**

  `patientLine`
  Type: String
  The user's input.

**Returns:**

  Type: String
  The bot's question.

## Enumeration
Property Name|Description|Value
-------------|-----------|-----
Generic|Boilerplate statements the bot uses to "reply" to user input.|0
Question|Questions the bot asks in response to user input.|1
Exclamation|Snide remarks the bot makes in response to emotional user input.|2
PointOfView|Maps first person pronouns with second person pronouns.|3
