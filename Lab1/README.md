Overview

In this lab, we developed a JavaScript-based data processing tool designed to handle user input, perform mathematical calculations, manipulate strings, and provide dynamic feedback based on user actions. The primary focus was on writing efficient, reusable, and scalable functions—skills that are essential for building maintainable applications in real-world environments.

Throughout the lab, we practiced:
Creating and manipulating variables
Writing functions with multiple parameters
Implementing conditional logic
Validating user input
Refactoring code for reusability and clarity

Objectives
Build flexible functions that can handle a variety of inputs
Apply conditional logic to control program flow
Validate input data to prevent errors
Improve code quality through refactoring
Develop a mindset for scalable and maintainable code

Key Concepts Applied
Functions and Parameters
Functions were designed to accept parameters that act as abstractions of expected input. This allowed the same function to be reused in multiple scenarios without rewriting logic.

Input Validation
Robust input validation was implemented to ensure that functions only process valid data types, improving reliability and preventing runtime errors.

Conditional Logic
Conditional statements (if, else if, else) were used to control how the program responds to different inputs and scenarios.

Refactoring
Code was continuously improved and simplified to enhance readability, reduce redundancy, and promote reuse across different tasks.

Reflection
How did you approach creating more flexible functions with parameters?
The parameters are an abstraction of the type of input the function expects. The approach for all functions is always to consider what type of input the function expects and place appropriate checks for those input types prior to allowing the function to return the expected value.

What challenges did you face while incorporating conditional logic in your functions?
Honestly, as a math major who took college-level abstract algebra, I do more than fairly well at conditional logic. That portion of the lab did not bring me pause. My biggest challenge was with evaluating the number type for Task 1 with the isNaN function. The double negative and what the function actually does versus what I believed it should have done caused me to walk away a few times to maintain my sanity. Ultimately, I learned that there exists a more acceptable industry standard practice for validating a string as a number, and as such this wrestling was worth the lesson learned.

How does refactoring improve the readability and maintainability of your code?
In this case, refactoring was for reusability and made writing Task 4 the quickest and easiest, as it required the least amount of code to render additional functionality. In a real-world situation, it is easy to see how, if code is already well written and documented, it becomes significantly easier to update and maintain over time.

Conclusion
This lab reinforced the importance of writing clean, reusable, and well-structured code. By focusing on input validation, flexible function design, and refactoring, we built a strong foundation for developing scalable JavaScript applications.
The lessons learned here extend beyond this lab and are directly applicable to real-world software development, where clarity, efficiency, and maintainability are critical.