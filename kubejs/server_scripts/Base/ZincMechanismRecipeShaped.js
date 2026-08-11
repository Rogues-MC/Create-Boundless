ServerEvents.recipes(event => {
   event.shaped(
       Item.of('createmechanisms:zinc_mechanism', 1), // arg 1: output
       [
           'aba', // arg 2: the shape (array of strings)
           ' c '
       ],
       {
           a: '#c:plates/zinc',
           b: 'createmechanisms:wooden_mechanism',  //arg 3: the mapping object
           c: '#c:plates/iron'
       }
   )
})