# week 5 arrays and objects

## agenda
- arrays
- objects
- quick git and github tutorial

## arrays

creating an array:  
var x = [1, 2, 3];

### add to an array

push() //end  
unshift() //beginning  

### remove from an array

pop() //end  
shift //beginning  

### other common array methods:

indexOf()  
returns the index of the first occurrence of an item in an array:  
    x.indexOf(2) // returns 1

join()  
display the contents of an array separated by a provided character:  
    x.join(', ') // returns '1, 2, 3'

concat()  
concatenates two arrays into a new array:  
    var a = [4, 5, 6];
    var b = x.concat(a); // returns array b [1, 2, 3, 4, 5, 6]

splice()  
splice can be used to remove and or add multiple elements to an array at a user provided index:  
    b.splice(1, 2); // remove 2 items from b at the index 1
    b.splice(0, 0, 23); // add 23 at the index 0 remove nothing.
    splice(index, number of elements to remove, elements to add)

iterating over an array:  
    for(var i = 0; i < x.length; i++){
        console.log(x[i]);
    }

map  
    [1,2,3].map(n => n + 1); //[2, 3, 4]

## objects

two ways to create objects:  
object literal & object constructor.  
for today we are just going to look at object literals.

    var myObj = {};

### add to an object  

    myObj.name = 'name';

### delete item

    delete myObj.name;

### iterating over an object:

for in loop

    var a = {one: 1, two: 2};

    for(var item in a){
        console.log(item, )
    }


## git & github

    git init
    git add .
    git commit -m 'first commit'

    git push
