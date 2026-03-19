function checkEligibility(age, isEmployed)
{
    if ((age > 18) && (isEmployed === "yes")) {
        console.log('They are eligible');
    }
    else if ((age > 18) && (isEmployed === "no")) {
        console.log('They are conditionally eligible');
    }
    else {
        console.log('They are not eligible');
    }

}

checkEligibility(16, "no");