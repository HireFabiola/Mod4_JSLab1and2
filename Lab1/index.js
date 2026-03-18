let fullName = "fabiola";

function formatFullName(nameString) {

    if (hasMoreThanOneWord(nameString)) {

        const stringArray = nameString.split(" ")
        let capFirstLetterofFirst = stringArray[0].charAt(0).toUpperCase() + stringArray[0].slice(1);
        let capFirstLetterofLast = stringArray[1].charAt(0).toUpperCase() + stringArray[1].slice(1);
        // console.log(capFirstLetterofFirst);
        // console.log(capFirstLetterofLast);
  
    console.log(capFirstLetterofLast + ", " + capFirstLetterofFirst);
    }
    else{
    // if ((stringArray[0] == "") || (stringArray[1] == ""))
    console.log('Invalid name input');
}
}

function hasMoreThanOneWord(inputString) {
    // Use trim() to remove leading/trailing spaces
    const trimmedString = inputString.trim();

    // Split the string by one or more whitespace characters (/\s+/)
    const words = trimmedString.split(/\s+/);

    // Return true if the array length is greater than 1
    return words.length > 1;
}

formatFullName(fullName);