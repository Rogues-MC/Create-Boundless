ServerEvents.recipes(event => {
  event.shaped(
       Item.of('createmechanisms:random_placer', 1), // arg 1: output
       [
           '  a',
           ' aa', // arg 2: the shape (array of strings)
           'b  '
       ],
       {
           a: '#c:ingots/iron',
           b: 'createmechanisms:cured_rubber'  //arg 3: the mapping object
       }
   )
})