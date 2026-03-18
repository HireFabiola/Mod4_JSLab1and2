let fullName = "fabiola aurelien";

function formatFullName(nameString) {
    const stringArray = nameString.split(" ")
    let capFirstLetterofFirst = stringArray[0].charAt(0).toUpperCase() + stringArray[0].slice(1);
    let capFirstLetterofLast = stringArray[1].charAt(0).toUpperCase() + stringArray[1].slice(1);

    console.log(capFirstLetterofFirst);
    console.log(capFirstLetterofLast);
    console.log(capFirstLetterofLast + ", " + stringArray[0])
} // comment

formatFullName(fullName);