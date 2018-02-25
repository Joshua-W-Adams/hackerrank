function processData(input) {
    // Define variables
    var a = []
      , i = 0
      , openBrackets = []
      , stop = false;
    // Split input into array
    a = input.split('');
    // Loop through string
    for (i = 0; i < a.length; i ++) {
        // Determine check case based on position in the array
        if (i === 0) {
            stop = caseOne(a[i], openBrackets);
        } else if (i > 0 && i < (a.length - 1)) {
            stop = caseTwo(a[i], openBrackets);
        } else {
            stop = caseThree(a[i], openBrackets);
        }
        // If any case is not met during the loop end the function as brackets
        // are not balanced
        if (stop === true) {
            return console.log("False");
        // Track the currently open brackets in order of appearance or remove
        // the most recent currently open bracket
        } else {
            openBrackets = trackBracketStatus(a[i], openBrackets);
        }
    }
    return console.log("True");
}

function isClosedBracket(bracket) {
   if ([')', ']', '}'].indexOf(bracket) >= 0) {
     return true;
   }
   return false;
}

function returnOpenBracketPair(bracket) {
    var bracketLookup = {
        ")": "("
        , "]": "["
        , "}": "{"
    };
    return bracketLookup["" + bracket + ""];
}

function matchesCurrentOpenBracket(closedBracket, openBrackets) {
  var openBracket = returnOpenBracketPair(closedBracket)
    , currentOpenBracket = openBrackets[openBrackets.length - 1];
    if (openBracket === currentOpenBracket) {
      return true;
    }
    return false;
}

// Case 1 = Position === First
function caseOne(bracket, openBrackets) {
    // Two failure cases for position 1.
    // 1. String starts with a closed bracket.
    if (isClosedBracket(bracket)) {
      return true;
    // 2. Length of array is 1
    } else if (openBrackets.length === 1) {
      return true;
    }
    return false;
}

// Case 2 = First < Postition < Last
function caseTwo(bracket, openBrackets) {
    // Only one failure case for position 2.
    // Closed bracket does not match current open bracket
    if (isClosedBracket(bracket)
      && !matchesCurrentOpenBracket(bracket, openBrackets)) {
        return true;
    }
    return false;
}

// Case 3 = Position === Last
function caseThree(bracket, openBrackets) {
    // Three failure cases for position 3.
    // 1. Open bracket
    if (!isClosedBracket(bracket)) {
      return true;
    // 2. Closed bracket does not match current open bracket
    } else if (isClosedBracket(bracket)
      && !matchesCurrentOpenBracket(bracket, openBrackets)) {
        return true;
    // 3. All open brackets have not been closed.
    } else if (openBrackets.length > 1) {
        return true;
    }
    return false;
}

function trackBracketStatus(bracket, openBrackets) {
    var newArray = [];
    // Add element to the array of open brackets
    if (!isClosedBracket(bracket)) {
        openBrackets.push(bracket)
        return openBrackets;
    // Remove current open bracket from array
    } else {
        newArray = openBrackets.splice(0, openBrackets.length - 1);
        return newArray;
    }
}
