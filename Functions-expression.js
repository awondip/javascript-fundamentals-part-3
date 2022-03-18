//Difference between functions and methods

//A function lives on its own:

const bark = () => {
  console.log('wof!')
}

bark()
or

function bark() {
    console.log('wof!')
  }
  
  bark()
  


 // A method is a function assigned to an object property:

const dog = {
  bark: () => {
    console.log('wof!')
  },
}

dog.bark()

//The method can access the object properties, but only when it’s a regular function, not an arrow function:

const cat = {
  name: 'Roger',
  bark: function () {
    console.log(`I am ${this.name}. wof!`)
  },
}

dog.bark()

//Function are invoked using  their function name and parenthese


function bark() {
    console.log('wof!')
  }
  
  bark()


  //Methods are invoked using their object-name follow by the function-name and paranthese
  



