/* Blood types are named according to three factors: presence of antigen A, presence of antigen B, and presence of Rh factor. If antigen A is found, the blood type includes the letter "A". If antigen B is found, the blood type includes the letter "B". And if the Rh factor is present, the blood type ends with "+"; otherwise, it ends with "-". If neither antigen A nor antigen B are found, the blood type includes the letter "O".
 
For example, a person with only antigen A would have the blood type "A-". A person with both antigens A and B and the Rh factor would have blood type "AB+", and a person wih only the Rh factor would have blood type "O+".
 
The rules for giving and receiving blood are as follows:
 
A person with antigen A may only give blood to another person with antigen A.
A person with antigen B may only give blood to another person with antigen B.
A person with the Rh factor may only give blood to another person with the Rh factor.
A person with none of the above factors (O-) can give blood to anyone.
Write a function that takes in a donor's and receiver's blood types as strings and returns whether or not the donor can safely give blood to the receiver, according to the rules above.
 
Examples
canGiveBlood("O+", "A+") ➞ true
canGiveBlood("A-", "B-") ➞ false
canGiveBlood("A-", "AB+") ➞ true
 
Notes
All letters are capital.
Each blood type will be one of the following strings: "O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-". 
*/
function canGiveBlood(X,Y){

    if (X == "O-"){
      if (X == "O-" && (Y =="O-")){console.log("True")}
    else{
        console.log("False")
    }
    }
  if ( X =="O+"){
    if(X == "O+" && (Y == "O-"|| Y == "O+")){console.log("True")}
    else{
        console.log("False")
    }
  }
  if (X == "A-"){
    if(X == "A-" && (Y == "O-"|| Y == "A-")){console.log("True")}
    else{
        console.log("False")
    }
  }
  if (X == "A+"){
    if(X == "A+" && (Y == "O-"|| Y == "O+"|| Y =="A-"|| Y== "A+")){console.log("True")}
    else{
        console.log("False")
    }
}
if (X == "B-"){
    if(X == "B-" && (Y == "O-"|| Y == "B-")){console.log("True")}
    else{
        console.log("False")
    }
}
if (X == "B+"){
    if(X == "B+" && (Y == "O-"|| Y == "O+"|| Y=="B-"|| Y == "B+")){console.log("True")}
    else{
        console.log("False")
    }
}
if (X == "AB-"){
    if(X == "AB-" && (Y == "O-"|| Y == "A-"|| Y == "B-"|| Y =="AB-")){console.log("True")}
    else{
        console.log("False")
    }
}
if (X == "AB+"){
    if(X == "AB+" && (Y == "O-"|| Y == "O+"|| Y == "A-"||Y == "A+"|| Y == "B-"|| Y == "B+"|| Y == "AB-"|| Y =="AB+")){console.log("True")}
    else{
        console.log("False")
    }
}
    }
    
    canGiveBlood("O+","O+")