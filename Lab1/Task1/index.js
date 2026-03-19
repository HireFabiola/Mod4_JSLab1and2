let fullName = "Fabiola aurelien";

function formatFullName(nameString) {

    if (hasMoreThanOneWord(nameString)) {

        const stringArray = nameString.trim().split(/\s+/);

        if (stringArray.length > 2) {
            console.log("Invalid name input");
        } else {
            let capFirstLetterofFirst = stringArray[0].charAt(0).toUpperCase() + stringArray[0].slice(1);
            let capFirstLetterofLast = stringArray[1].charAt(0).toUpperCase() + stringArray[1].slice(1);

            console.log(capFirstLetterofLast + ", " + capFirstLetterofFirst);
        }

    } else {
        console.log('Invalid name input');
    }
}

    //Function taken verbatim from internet search
    function hasMoreThanOneWord(inputString) {
        // Use trim() to remove leading/trailing spaces
        const trimmedString = inputString.trim();

        // Split the string by one or more whitespace characters (/\s+/)
        const words = trimmedString.split(/\s+/);

        // Return true if the array length is greater than 1
        return words.length > 1;
    }

    formatFullName(fullName);