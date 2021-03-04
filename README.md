# calculator
Fully functional web page calculator

This bad boy is the toughest project I have done to date.

The most difficult problem I faced was getting the calculator to store the variables needed and run the operation(calculation) function only when needed and not on every button click. I had tried to run conditional statements with my x and y variables(used to store numbers for calculation) and kept running into bugs. I finally managed to get clean calculations by creating a new variable called opCount. This is a global variable set to 0. I then set the variable in a conditional statement in the operation function and iterate the opCount variable on every click. This makes the first click of an operator button skip the operate function and then run on the next button clicks.

Whenever I need to reset the count to prevent a function call on the next click, i just reset the opCount variable to 0. This is precisely what I do on the equals button push.

So many bugs
    fix set values so y does not inherit x value on    multiple operater pushes
    
    fix y converts to zero on multiple op pushes.