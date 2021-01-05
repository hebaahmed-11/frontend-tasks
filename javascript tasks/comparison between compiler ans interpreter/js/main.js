/* the interpreter translates code line by line
It continues to translate and execute the code unless an error occurs, it stops at the line that contains the error and does not translate the rest of the code until you correct the error on this line

Interpreted language examples:
1-javascript
2-php
3-python
*/


//  code example//


let num1=parseFloat(prompt("Enter Number1"));
let num2=parseFloat(prompt("Enter Number2"));
let sum=num1+num3;
let subtract=num1-num2
console.log(`the sum = ${sum}`);
console.log(`the subtract= ${subtract}`);
 


 
/* This code will not give a result because of the error in line 15, which ocures because of not defining num3,  Although lines 16, 17 and 18 are correct, the interpreter will not give its result except when correcting the error in line 15, and this is the idea of the interpreter's work that the code is complete Correct to implement it
*/



/* The compiler compiles and executes the code completely, even in the event of errors, it executes the rest of the lines

cpmpiled languge examples:
1- java
2- c++
3-c#
*/

// c++ code//

int main(){
	
int num1,num2,sum ,subtract;
cout<<"Enter num1 \n";
cin>>num1;
cout<<"Enter num2 \n";
cin>>num2;
sum=num1+num3;
cout<<"sum="<<sum;
subtract=num2-num1;
cout<<"subtract="<<subtract;
}

/* although this code containes error in line 46 but the compiler will implement line 49 and this is the idea of the compiler's work that it implement the correct lines in the code although there is some errors in the previous lines
*/

	
	
	
	
	
	















 





