ServerEvents.recipes(event => {
   event.shaped(
       Item.of('createmechanisms:heat_mechanism', 1), // arg 1: output
       [
           ' d ',
           'aba', // arg 2: the shape (array of strings)
           ' c '
       ],
       {
           a: '#c:buckets/lava',
           b: 'createmechanisms:rubber_mechanism',  //arg 3: the mapping object
           c: '#c:ingots/bronze',
           d: 'minecraft:magma_block'
       }
   )
})