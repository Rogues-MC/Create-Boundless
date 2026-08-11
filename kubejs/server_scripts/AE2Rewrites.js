// Visit the wiki for more info - https://kubejs.com/
console.info('[Create: Boundless KubeJS] Hello world! Loading server mod compatibility script...')

ServerEvents.recipes(event => {
  // Applied Energistics 2 Recipe Rewrites
  event.remove({id: 'ae2:network/blocks/inscribers'})
  event.shaped('ae2:inscriber', [
  'ABA',
  'CDA',
  'ABA'
  ], {
    A: Ingredient.of('#c:plates/iron', 1),
    B: 'create:mechanical_press',
    C: Ingredient.of('#c:plates/copper', 1),
    D: 'createmechanisms:advanced_precision_mechanism'
  })

  event.remove({id: 'ae2:inscriber/engineering_processor'})
  AE2Recipes.inscriber(
    event,
    'inscribe',
    'ae2:printed_engineering_processor',
    'createmechanisms:computing_mechanism',
    'ae2:printed_silicon',
    'ae2:engineering_processor',
    'kubejs:ae2/inscriber/engineering_processor'
  )
  
  event.remove({id: 'ae2:inscriber/logic_processor'})
  AE2Recipes.inscriber(
    event,
    'inscribe',
    'ae2:printed_logic_processor',
    'createmechanisms:redstone_mechanism',
    'ae2:printed_silicon',
    'ae2:logic_processor',
    'kubejs:ae2/inscriber/logic_processor'
  )

  event.remove({id: 'ae2:inscriber/calculation_processor'})
  AE2Recipes.inscriber(
    event,
    'inscribe',
    'ae2:printed_calculation_processor',
    'create_things_and_misc:vibration_mechanism',
    'ae2:printed_silicon',
    'ae2:calculation_processor',
    'kubejs:ae2/inscriber/calculation_processor'
  )
})