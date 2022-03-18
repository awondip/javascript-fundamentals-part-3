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



  //Methods are invoked using their object-name follow by the function-name and paranthese

  const dog = {
    name: 'Roger',
    bark: function () {
      console.log(`I am ${this.name}. wof!`)
    },
  }
  
  dog.bark()
