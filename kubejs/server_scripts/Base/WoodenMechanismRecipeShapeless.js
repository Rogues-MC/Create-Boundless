ServerEvents.recipes(event => {
   event.shapeless(
       Item.of('createmechanisms:wooden_mechanism', 1), // arg 1: output
       [
           '2x create:andesite_alloy',
           '#c:stripped_woods', 	       // arg 2: the array of inputs
           '2x create:shaft',
           '#minecraft:planks',
           '#createmechanisms:sawing_tools'
       ]
   ).damageIngredient('#createmechanisms:sawing_tools');
})