/**
 * 14012109-3: Compiler Construction 
 * Student ID: <Put your student ID here>
 * Student Name: <Put your name here>
 * Section No.: <Put your section number>
 */

/**** ---- DO NOT MODIFY Grammar code starting from here ---- ****/
input
  = token+
/**** ---- DO NOT MODIFY Grammar code above! ---- ****/

/**
* 1. Add a grammar definition to parse tokens and return the correct token format
* The token format should be of this form {"type":"T_<token type>", "value":<token value>}
* All acceptable token types are: 
* T_IF, T_THEN, T_ELSE, T_IDENT, T_NUMBER, T_RELOP
* For T_RELOP, all possible values are: LT,LE,GT,GE,EQ,NE
* Refer to Section 3.4 (Figure 3.11) for definitions.  
* Do not modify "term" below.
**/ 

token
  = /* <Add your term definitions here> */

/**
* 2. Add one or more grammar definition(s) to scan and recognize keywords 
* if,then,else
* Must be case insensitive.e.g., if,IF,iF,If shall be accepted
* Note that keywrod tokens don't have a value attribute!
**/




/**
* 3. Add below one or more grammar definition(s) to scan and recognize relops 
* =,<>,<,<=,>,>=,
**/




/** 
* 4. Add one or more grammar definition(s) to scan and recognize identifier 
* 
**/




/** 
* 5. Add one or more grammar definition(s) to scan and recognize numbers 
**/




/** 
* 6. Add one or more grammar definition(s) to scan whitespace and ignore them
**/
