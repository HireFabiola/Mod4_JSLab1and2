let fullName = "Fabiola Aurelien";

function formatFullName(nameString){
    const stringArray = nameString.split(" ")
    console.log(stringArray[1] + ", " + stringArray[0])
    }

formatFullName(fullName);