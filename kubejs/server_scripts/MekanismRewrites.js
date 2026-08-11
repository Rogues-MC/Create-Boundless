// Visit the wiki for more info - https://kubejs.com/
console.info('[Create: Boundless KubeJS] Hello world! Loading server mod compatibility script...')

ServerEvents.recipes(event => {
  // Mekanism Recipe Rewrites
  event.remove({id: 'mekanism:metallurgic_infuser'})
  event.shaped('mekanism:metallurgic_infuser', [
  'ABA',
  'CDC',
  'ABA'
  ], {
    A: Ingredient.of('#c:plates/iron', 1),
    B: 'minecraft:furnace',
    C: 'createmechanisms:redstone_mechanism',
    D: Ingredient.of('#c:ingots/osmium', 1),
  })

  event.remove({id: 'mekanism:steel_casing'})
  event.shaped('mekanism:steel_casing', [
  'ABA',
  'CDC',
  'ABA'
  ], {
    A: Ingredient.of('#c:plates/steel', 1),
    B: 'createmechanisms:rubber_mechanism',
    C: 'tfmg:steel_mechanism',
    D: Ingredient.of('#c:ingots/osmium', 1),
  })
})