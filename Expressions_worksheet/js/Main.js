/*	Alexander Rhett Crammer
	Saturday, August 9, 2014
	Expressions Worksheet 	*/

// DOG YEARS
/* Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”
Calculate how old Sparky the pit bull is in dog years based on his actual age. */

var doggyAge = 6; // Declaring the dogs' age as 6, for 6 years.
var doggyAgeAsHumanYears = doggyAge * 7; // Multiplies Sparky's age by 7 to return the value of his human age to the 'doggyAgeAsHumanYears' variable
document.write("Sparky is " + doggyAgeAsHumanYears + " human years old which is " + doggyAge + " in dog years.");
document.write("<br /><br />"); // Two line breaks, just to keep everything tidy!

// SLICE OF PIE PART 1
/* A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates how much pizza each partygoer will get at the party.  (Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.) */

var pizzas = 8; // Amount of pizzas ordered
var slicesEach = 8; // Amount of slices cut through the pizza
var partyGuestAmount = 31; // Amount of guests at the party
var slicesPerGuest = pizzas * slicesEach / partyGuestAmount; // Calculates the amount each guest could have if the pizza were split among each of the guests by multiplying 'pizzas' and 'slicesEach' to find the amount of slices there are from all of the pizzas ordered then dividing the amount returned with the amount of guests at the party, stored in 'partyGuestAmount'
document.write("Each person ate " + slicesPerGuest + " slices of pizza at the party.");
document.write("<br /><br />"); // Two more line breaks, just to keep everything tidy!

// SLICE OF PIE PART 2
/* At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky feast on? */

document.write("Sparky got " pizzas * slicesEach % slicesPerGuest + " slices of pizza."); // I have no idea if this is right. I've sersiouly sat here and though about how in the world I'd find the answer throughout the entire evening. Anyway, I've found the remainder of the amount of slices each guest would be given by multiplying the amount of pizza with the amount of slices in each pizza, then using the modulous operator to find the remainder of the division between the total amount of pizza slices and party guests. I apologise in advance if this is incorrect, but I'm going with it because I have no idea what else it could be!

