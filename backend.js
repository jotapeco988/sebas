var encryptedText = "";

function encrypt() {
  var inputText = document.getElementById("inputText").value.toLowerCase();
  var result = "";
  for (var i = 0; i < inputText.length; i++) {
    var currentChar = inputText.charAt(i);
    if (currentChar === 'a') {
      result += 'ai';
    } else if (currentChar === 'e') {
      result += 'enter';
    } else if (currentChar === 'i') {
      result += 'imes';
    } else if (currentChar === 'o') {
      result += 'ober';
    } else if (currentChar === 'u') {
      result += 'ufat';
    } else {
      result += currentChar;
    }
  }
  document.getElementById("resultText").value = result;
  encryptedText = result;
}

function decrypt() {
    var inputText = document.getElementById("inputText").value.toLowerCase();
    var result = "";
    var i = 0;
  
    while (i < inputText.length) {
      var currentChar = inputText.charAt(i);
  
      if (currentChar === 'e') {
        var nextChars = inputText.substr(i, 5);
  
        if (nextChars === 'enter') {
          result += 'e';
          i += 5;
        } else {
          result += currentChar;
          i++;
        }
      } else if (currentChar === 'i') {
        var nextChars = inputText.substr(i, 4);
  
        if (nextChars === 'imes') {
          result += 'i';
          i += 4;
        } else {
          result += currentChar;
          i++;
        }
      } else if (currentChar === 'a') {
        var nextChars = inputText.substr(i, 2);
  
        if (nextChars === 'ai') {
          result += 'a';
          i += 2;
        } else {
          result += currentChar;
          i++;
        }
      } else if (currentChar === 'o') {
        var nextChars = inputText.substr(i, 4);
  
        if (nextChars === 'ober') {
          result += 'o';
          i += 4;
        } else {
          result += currentChar;
          i++;
        }
      } else if (currentChar === 'u') {
        var nextChars = inputText.substr(i, 4);
  
        if (nextChars === 'ufat') {
          result += 'u';
          i += 4;
        } else {
          result += currentChar;
          i++;
        }
      } else {
        result += currentChar;
        i++;
      }
    }
  
    document.getElementById("resultText").value = result;
  }

function copyResult() {
  var resultText = document.getElementById("resultText");
  resultText.select();
  resultText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Texto copiado: " + resultText.value);
}
