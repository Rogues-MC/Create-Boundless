// Visit the wiki for more info - https://kubejs.com/
console.info('[Create: Boundless KubeJS] Hello world! Loading server mod compatibility script...')

ServerEvents.tags('item', event => {
  event.add('c:tools/saws', 'chipped:saw')
  event.add('createmechanisms:sawing_tools', 'chipped:saw')
  event.add('create:handheld_in_deployer_use', 'chipped:saw')
  event.add('c:tools/saws', '#createmechanisms:sawing_tools')

  event.add('c:coals', ['#forge:coals', '#neoforge:coals'])
  event.add('c:dusts/coal', ['#forge:dusts/coal', '#neoforge:dusts/coal'])
  event.add('c:dusts/saltpeter', ['#forge:dusts/saltpeter', '#neoforge:dusts/saltpeter'])
  event.add('c:dusts/sulfur', ['#forge:dusts/sulfur', '#neoforge:dusts/sulfur'])
  event.add('c:ingot/graphite', ['#forge:ingots/graphite', '#neoforge:ingots/graphite'])
  event.add('c:enchanting_fuels', ['#forge:enchanting_fuels', '#neoforge:enchanting_fuels'])
})

ServerEvents.recipes(event => {
  event.replaceInput({}, '#forge:coals', '#c:coals')
  event.replaceOutput({}, '#neoforge:coals', '#c:coals')
  event.replaceInput({}, '#forge:dusts/coal', '#c:dusts/coal')
  event.replaceInput({}, '#forge:dusts/saltpeter', '#c:dusts/saltpeter')
  event.replaceOutput({}, '#neoforge:dusts/saltpeter', '#c:dusts/saltpeter')
  event.replaceInput({}, '#forge:dusts/sulfur', '#c:dusts/sulfur')
  event.replaceInput({}, '#forge:ingots/graphite', '#c:ingot/graphite')
  event.replaceOutput({}, '#neoforge:ingots/graphite', '#c:ingot/graphite')
  event.replaceInput({}, '#forge:enchanting_fuels', '#c:enchanting_fuels')

  event.replaceInput({}, 'chipped:saw', '#c:tools/saws')
  event.replaceInput({}, '#createmechanisms:sawing_tools', '#c:tools/saws')

  // STEEL
  // Cast all recipe inputs for a generic to default specifically
  event.replaceInput({}, '#c:ingots/steel', 'immersiveengineering:ingot_steel')
  event.replaceOutput({}, '#c:ingots/steel', 'immersiveengineering:ingot_steel')
  event.replaceInput({}, '#c:nuggets/steel', 'immersiveengineering:nugget_steel')
  event.replaceOutput({}, '#c:nuggets/steel', 'immersiveengineering:nugget_steel')
  event.replaceInput({}, '#c:storage_blocks/steel', 'immersiveengineering:storage_steel')
  event.replaceOutput({}, '#c:storage_blocks/steel', 'immersiveengineering:storage_steel')
  
  // TFMG
  event.replaceOutput({}, 'tfmg:steel_ingot', 'immersiveengineering:ingot_steel')
  event.replaceInput({}, 'tfmg:steel_ingot', 'immersiveengineering:ingot_steel')
  event.replaceOutput({}, 'tfmg:steel_nugget', 'immersiveengineering:nugget_steel')
  event.replaceInput({}, 'tfmg:steel_nugget', 'immersiveengineering:nugget_steel')
  event.replaceOutput({}, 'tfmg:steel_block', 'immersiveengineering:storage_steel')
  event.replaceInput({}, 'tfmg:steel_block', 'immersiveengineering:storage_steel')

  // Create: Big Cannons
  event.replaceOutput({}, 'createbigcannons:steel_ingot', 'immersiveengineering:ingot_steel')
  event.replaceInput({}, 'createbigcannons:steel_ingot', 'immersiveengineering:ingot_steel')
  event.replaceOutput({}, 'createbigcannons:steel_block', 'immersiveengineering:storage_steel')
  event.replaceInput({}, 'createbigcannons:steel_block', 'immersiveengineering:storage_steel')
  
  // Immersive Engineering
  event.replaceOutput({}, 'mekanism:ingot_steel', 'immersiveengineering:ingot_steel')
  event.replaceInput({}, 'mekanism:ingot_steel', 'immersiveengineering:ingot_steel')
  event.replaceOutput({}, 'mekanism:nugget_steel', 'immersiveengineering:nugget_steel')
  event.replaceInput({}, 'mekanism:nugget_steel', 'immersiveengineering:nugget_steel')
  event.replaceOutput({}, 'mekanism:block_steel', 'immersiveengineering:storage_steel')
  event.replaceInput({}, 'mekanism:block_steel', 'immersiveengineering:storage_steel')

  // Plates
  event.replaceOutput({}, 'immersiveengineering:plate_gold', 'create:golden_sheet')
  event.replaceInput({}, 'immersiveengineering:plate_gold', 'create:golden_sheet')
  event.replaceOutput({}, 'immersiveengineering:plate_iron', 'create:iron_sheet')
  event.replaceInput({}, 'immersiveengineering:plate_iron', 'create:iron_sheet')
  event.replaceOutput({}, 'immersiveengineering:plate_copper', 'create:copper_sheet')
  event.replaceInput({}, 'immersiveengineering:plate_copper', 'create:copper_sheet')
  event.replaceOutput({}, 'immersiveengineering:plate_aluminum', 'tfmg:aluminum_sheet')
  event.replaceInput({}, 'immersiveengineering:plate_aluminum', 'tfmg:aluminum_sheet')
  event.replaceOutput({}, 'immersiveengineering:plate_nickel', 'tfmg:nickel_sheet')
  event.replaceInput({}, 'immersiveengineering:plate_nickel', 'tfmg:nickel_sheet')
  event.replaceOutput({}, 'immersiveengineering:plate_lead', 'tfmg:lead_sheet')
  event.replaceInput({}, 'immersiveengineering:plate_lead', 'tfmg:lead_sheet')
  event.replaceOutput({}, 'immersiveengineering:plate_steel', 'cgs:steel_sheet')
  event.replaceInput({}, 'immersiveengineering:plate_steel', 'cgs:steel_sheet')
  event.replaceOutput({}, 'immersiveengineering:plate_electrum', 'createaddition:electrum_sheet')
  event.replaceInput({}, 'immersiveengineering:plate_electrum', 'createaddition:electrum_sheet')
  event.replaceOutput({}, 'createdeco:zinc_sheet', 'createaddition:zinc_sheet')
  event.replaceInput({}, 'createdeco:zinc_sheet', 'createaddition:zinc_sheet')
  event.replaceOutput({}, 'powergrid:zinc_sheet', 'createaddition:zinc_sheet')
  event.replaceInput({}, 'powergrid:zinc_sheet', 'createaddition:zinc_sheet')

  event.shapeless('createbigcannons:bronze_ingot', ['mekanism:ingot_bronze'])
  event.shapeless('mekanism:ingot_bronze', ['createbigcannons:bronze_ingot'])
  event.shapeless(Item.of('minecraft:string', 4), [Ingredient.of('#minecraft:wool'), 'minecraft:shears']).damageIngredient('minecraft:shears', 1)

  event.recipes.create.pressing('kubejs:bronze_sheet', Ingredient.of('#c:ingots/bronze'))
  event.recipes.create.mixing('minecraft:leather', ['minecraft:rotten_flesh', Fluid.of('minecraft:water', 125)]).heated()

  event.remove({input: Ingredient.of('#immersiveengineering:tools/hammers'), output: Ingredient.of('#c:plates')})
  event.remove({id: 'chipped:saw'})

  event.remove({id: 'createdieselgenerators:compat/immersiveengineering/nickel_sheet'})
  event.remove({id: 'createdieselgenerators:compat/immersiveengineering/silver_sheet'})
  event.remove({id: 'createdieselgenerators:compat/immersiveengineering/constantan_sheet'})
  event.remove({id: 'createdieselgenerators:compat/immersiveengineering/uranium_sheet'})
  event.remove({id: 'createdieselgenerators:compat/immersiveengineering/aluminum_sheet'})
  event.remove({id: 'createdieselgenerators:compat/immersiveengineering/nickel_sheet'})
  event.remove({id: 'createdieselgenerators:compat/immersiveengineering/steel_sheet'})
  event.remove({id: 'createdieselgenerators:compat/createaddition/electrum_sheet'})
  event.remove({id: 'createdieselgenerators:hammering/gold_sheet'})
  event.remove({id: 'createdieselgenerators:hammering/brass_sheet'})

  event.remove({id: 'create_mf:gunpowder_recipe'})
  event.remove({id: 'minecraft:gunpowder'})
})