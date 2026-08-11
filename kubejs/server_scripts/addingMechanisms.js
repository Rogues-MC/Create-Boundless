console.info('[Create: Boundless KubeJS] Loading custom mechanisms recipes...')

ServerEvents.recipes(event => {
  // Wooden age
  event.recipes.create.sequenced_assembly(
    // Output:
    'createmechanisms:wooden_mechanism',
    // Input:
    'create:andesite_alloy',
    // Sequence:
    [
      event.recipes.create.deploying('createmechanisms:incomplete_wooden_mechanism', ['createmechanisms:incomplete_wooden_mechanism', 'create:cogwheel',]),
      event.recipes.create.deploying('createmechanisms:incomplete_wooden_mechanism', ['createmechanisms:incomplete_wooden_mechanism', 'create:shaft',]),
      event.recipes.create.deploying('createmechanisms:incomplete_wooden_mechanism', ['createmechanisms:incomplete_wooden_mechanism', Ingredient.of('#minecraft:logs', 1),]),
      event.recipes.create.cutting('createmechanisms:incomplete_wooden_mechanism', 'createmechanisms:incomplete_wooden_mechanism'),
    ]
  )
  .transitionalItem('createmechanisms:incomplete_wooden_mechanism')

  event.remove({id: 'create:crafting/kinetics/mechanical_drill'})
  event.shaped('create:mechanical_drill', [
  ' A ',
  'ABA',
  'CDC'
  ], {
    A: 'create:andesite_alloy',
    B: 'minecraft:iron_ingot',
    C: 'createmechanisms:wooden_mechanism',
    D: 'create:andesite_casing'
  })
  event.remove({id: 'create:crafting/kinetics/mechanical_saw'})
  event.shaped('create:mechanical_saw', [
  ' A ',
  'ABA',
  'CDC'
  ], {
    A: 'create:iron_sheet',
    B: 'minecraft:iron_ingot',
    C: 'createmechanisms:wooden_mechanism',
    D: 'create:andesite_casing'
  })

  // Zinc age
  event.recipes.create.sequenced_assembly(
    // Output:
    'createmechanisms:zinc_mechanism',
    // Input:
    Ingredient.of('#c:plates/zinc', 1),
    // Sequence:
    [
      event.recipes.create.deploying('createmechanisms:incomplete_zinc_mechanism', ['createmechanisms:incomplete_zinc_mechanism', 'createmechanisms:wooden_mechanism',]),
      event.recipes.create.pressing('createmechanisms:incomplete_zinc_mechanism', 'createmechanisms:incomplete_zinc_mechanism'),
      event.recipes.create.deploying('createmechanisms:incomplete_zinc_mechanism', ['createmechanisms:incomplete_zinc_mechanism', Ingredient.of('#c:plates/iron', 1),]),
    ]
  )
  .transitionalItem('createmechanisms:incomplete_zinc_mechanism') // Set the transitional item

  event.remove({id: 'createdieselgenerators:crafting/oil_scanner'})
  event.shaped('createdieselgenerators:oil_scanner', [
  'ABA',
  'CDC',
  ' E '
  ], {
    A: 'create:andesite_alloy',
    B: 'create:goggles',
    C: 'create:iron_sheet',
    D: 'createmechanisms:zinc_mechanism',
    E: 'minecraft:iron_ingot'
  })

  event.recipes.create.compacting('dndesires:diamond_shard', 'jaopca:storage_blocks.hop_graphite').superheated()

  event.remove({id: 'dndesires:seething/diamond_shard_from_deepslate_coal_ore'})
  event.remove({id: 'dndesires:seething/diamond_shard_from_coal_block'})

  event.remove({id: 'create:crafting/materials/electron_tube'})
  event.shaped('create:electron_tube', [
  ' A ',
  ' B ',
  '   '
  ], {
    A: 'create:polished_rose_quartz',
    B: 'createmechanisms:zinc_mechanism'
  })
  event.recipes.create.deploying('create:electron_tube', ['createmechanisms:zinc_mechanism', 'create:polished_rose_quartz'])

  event.remove({id: 'create:crafting/kinetics/mechanical_mixer'})
  event.shaped('create:mechanical_mixer', [
  ' A ',
  'B C',
  ' D '
  ], {
    A: 'create:andesite_casing',
    B: 'createmechanisms:zinc_mechanism',
    C: 'create:cogwheel',
    D: 'create:whisk'
  })
  event.remove({id: 'create:crafting/kinetics/mechanical_press'})
  event.shaped('create:mechanical_press', [
  ' A ',
  ' B ',
  ' C '
  ], {
    A: 'create:andesite_casing',
    B: 'createmechanisms:zinc_mechanism',
    C: 'minecraft:iron_block',
  })
  event.remove({id: 'sliceanddice:slicer'})
  event.shaped('sliceanddice:slicer', [
  ' A ',
  'B C',
  ' D '
  ], {
    A: 'create:andesite_casing',
    B: 'createmechanisms:zinc_mechanism',
    C: 'create:cogwheel',
    D: '#farmersdelight:tools/knives'
  })

  // Redstone Age
  event.remove({id: 'powergrid:crafting/lv_switch'})
  event.shaped('powergrid:lv_switch', [
  '   ',
  ' A ',
  'BCB'
  ], {
    A: 'minecraft:lever',
    B: '#c:nuggets/copper',
    C: 'createmechanisms:redstone_mechanism',
  })

  event.recipes.create.sequenced_assembly(
    // Output:
    'createmechanisms:redstone_mechanism',
    // Input:
    'createmechanisms:zinc_mechanism',
    // Sequence:
    [
      event.recipes.create.deploying('createmechanisms:incomplete_redstone_mechanism', ['createmechanisms:incomplete_redstone_mechanism', 'minecraft:redstone',]),
      event.recipes.create.deploying('createmechanisms:incomplete_redstone_mechanism', ['createmechanisms:incomplete_redstone_mechanism', 'biomesoplenty:rose_quartz_chunk',]),
    ]
  )
  .transitionalItem('createmechanisms:incomplete_redstone_mechanism') // Set the transitional item
  .loops(2)

  event.recipes.create.compacting('biomesoplenty:rose_quartz_block', Ingredient.of('create:rose_quartz_block', 8))
  event.recipes.create.crushing(['minecraft:redstone', CreateItem.of('biomesoplenty:rose_quartz_chunk', 0.5), CreateItem.of('minecraft:quartz', 0.1)], 'create:rose_quartz_block')
  event.recipes.create.milling('minecraft:redstone', 'create:rose_quartz_block')

  // Age of precision
  event.remove({id: 'create:sequenced_assembly/precision_mechanism'})
  event.recipes.create.sequenced_assembly(
    // Output:
    'create:precision_mechanism',
    // Input:
    '#c:plates/bronze',
    // Sequence:
    [
      event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel',]),
      event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:electron_tube',]),
      event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'createmechanisms:zinc_mechanism',]),
    ]
  )
  .transitionalItem('create:incomplete_precision_mechanism') // Set the transitional item
  .loops(2)

  event.remove({id: 'jaopca:create.material_to_plate.steel'})
  event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})
  event.shaped('create:empty_blaze_burner', [
  ' A ',
  'ABA',
  ' C '
  ], {
    A: 'tfmg:heavy_plate',
    B: 'minecraft:netherrack',
    C: 'createmechanisms:heat_mechanism'
  })
  
  event.recipes.create.sequenced_assembly(
    // Output:
    'createmechanisms:advanced_precision_mechanism',
    // Input:
    'create:precision_mechanism',
    // Sequence:
    [
      event.recipes.create.deploying('createmechanisms:incomplete_advanced_precision_mechanism', ['createmechanisms:incomplete_advanced_precision_mechanism', 'createmechanisms:zinc_mechanism',]),
      event.recipes.create.deploying('createmechanisms:incomplete_advanced_precision_mechanism', ['createmechanisms:incomplete_advanced_precision_mechanism', 'createmechanisms:rubber_mechanism',]),
      event.recipes.create.deploying('createmechanisms:incomplete_advanced_precision_mechanism', ['createmechanisms:incomplete_advanced_precision_mechanism', 'createmechanisms:heat_mechanism',]),
    ]
  )
  .transitionalItem('createmechanisms:incomplete_advanced_precision_mechanism') // Set the transitional item
  .loops(2)

  // Correcting Steel Mechanisms
  event.remove({id: 'tfmg:sequenced_assembly/steel_mechanism'})
  event.recipes.create.sequenced_assembly(
    // Output:
    'tfmg:steel_mechanism',
    // Input:
    Ingredient.of('#c:plates/steel', 1),
    // Sequence:
    [
      event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:steel_cogwheel']),
      event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', Ingredient.of('#c:plates/nickel', 1)]),
      event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:large_steel_cogwheel']),
      event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', Ingredient.of('#c:plates/lead', 1)]),
      event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:screw']),
      event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:screwdriver']),
    ]
  )
  .transitionalItem('tfmg:unfinished_steel_mechanism') // Set the transitional item
  .loops(2)

  // Rubber
  event.remove({id: 'industrialforegoing:machine_frame_pity'})
  event.shaped('industrialforegoing:machine_frame_pity', [
  'ABA',
  'BCB',
  'ABA'
  ], {
    A: 'createmechanisms:wooden_mechanism',
    B: 'create:iron_sheet',
    C: 'createmechanisms:zinc_mechanism'
  })

  event.recipes.create.mixing('createmechanisms:rubber', ['industrialforegoing:dryrubber', Fluid.of('minecraft:water', 125)])

  event.recipes.create.sequenced_assembly(
    // Output:
    'createmechanisms:rubber_mechanism',
    // Input:
    'createmechanisms:wooden_mechanism',
    // Sequence:
    [
      event.recipes.create.deploying('createmechanisms:incomplete_rubber_mechanism', ['createmechanisms:incomplete_rubber_mechanism', 'createmechanisms:cured_rubber',]),
      event.recipes.create.deploying('createmechanisms:incomplete_rubber_mechanism', ['createmechanisms:incomplete_rubber_mechanism', Ingredient.of('#c:plates/copper', 1),]),
      event.recipes.create.deploying('createmechanisms:incomplete_rubber_mechanism', ['createmechanisms:incomplete_rubber_mechanism', 'createmechanisms:cured_rubber',]),
    ]
  )
  .transitionalItem('createmechanisms:incomplete_rubber_mechanism') // Set the transitional item

  // Heat
  event.recipes.create.sequenced_assembly(
    // Output:
    'createmechanisms:heat_mechanism',
    // Input:
    'createmechanisms:rubber_mechanism',
    // Sequence:
    [
      event.recipes.create.filling('createmechanisms:incomplete_heat_mechanism', ['createmechanisms:incomplete_heat_mechanism', Fluid.of('minecraft:lava', 250)]),
      event.recipes.create.deploying('createmechanisms:incomplete_heat_mechanism', ['createmechanisms:incomplete_heat_mechanism', Ingredient.of('#c:nuggets/bronze', 1),]),
      event.recipes.create.filling('createmechanisms:incomplete_heat_mechanism', ['createmechanisms:incomplete_heat_mechanism', Fluid.of('minecraft:lava', 250)]),
    ]
  )
  .transitionalItem('createmechanisms:incomplete_heat_mechanism') // Set the transitional item
  .loops(3)

  // Gyroscopic
  event.remove({id: 'simulated:sequenced_assembly/gyroscopic_mechanism'})
  event.recipes.create.sequenced_assembly(
    // Output:
    'simulated:gyroscopic_mechanism',
    // Input:
    'createmechanisms:zinc_mechanism',
    // Sequence:
    [
      event.recipes.create.deploying('simulated:incomplete_gyroscopic_mechanism', ['simulated:incomplete_gyroscopic_mechanism', 'create:cogwheel',]),
      event.recipes.create.deploying('simulated:incomplete_gyroscopic_mechanism', ['simulated:incomplete_gyroscopic_mechanism', 'create:shaft',]),
      event.recipes.create.deploying('simulated:incomplete_gyroscopic_mechanism', ['simulated:incomplete_gyroscopic_mechanism', 'create:brass_sheet',]),
    ]
  )
  .transitionalItem('simulated:incomplete_gyroscopic_mechanism') // Set the transitional item
  .loops(2)

  // Vibrational
  event.remove({id: 'create_things_and_misc:vibration_mecanism_craft'})
  event.recipes.create.sequenced_assembly(
    // Output:
    'create_things_and_misc:vibration_mechanism',
    // Input:
    'createmechanisms:rubber_mechanism',
    // Sequence:
    [
      event.recipes.create.deploying('create_things_and_misc:incomplete_vibration_mechanism', ['create_things_and_misc:incomplete_vibration_mechanism', 'ae2:fluix_crystal',]),
      event.recipes.create.deploying('create_things_and_misc:incomplete_vibration_mechanism', ['create_things_and_misc:incomplete_vibration_mechanism', 'create:cogwheel',]),
      event.recipes.create.deploying('create_things_and_misc:incomplete_vibration_mechanism', ['create_things_and_misc:incomplete_vibration_mechanism', 'biomesoplenty:rose_quartz_chunk',]),
      event.recipes.create.deploying('create_things_and_misc:incomplete_vibration_mechanism', ['create_things_and_misc:incomplete_vibration_mechanism', 'create:electron_tube',]),
    ]
  )
  .transitionalItem('create_things_and_misc:incomplete_vibration_mechanism') // Set the transitional item
  .loops(3)

  event.remove({id: 'create_radar:crafting/guided_fuze'})
  event.shaped('create_radar:guided_fuze', [
  ' A ',
  'BCB',
  ' B '
  ], {
    A: 'create:electron_tube',
    B: 'minecraft:redstone',
    C: 'create_things_and_misc:vibration_mechanism',
  })

  event.remove({id: 'create_radar:crafting/radar_receiver'})
  event.shaped('create_radar:radar_receiver_block', [
  ' A ',
  'B C',
  ' D '
  ], {
    A: 'minecraft:lightning_rod',
    B: 'create:industrial_iron_block',
    C: 'create_things_and_misc:radar',
    D: 'create:electron_tube'
  })

  event.shaped('create_radar:radar_warning_receiver', [
  ' A ',
  ' B ',
  ' C '
  ], {
    A: 'create_radar:radar_receiver_block',
    B: 'create:redstone_contact',
    C: 'create_things_and_misc:brass_speaker'
  })

  event.remove({id: 'create_sonar:display_module'})
  event.shaped('create_sonar:display_module', [
  'ABA',
  'BCB',
  'ABA'
  ], {
    A: Ingredient.of('#c:plates/bronze', 1),
    B: 'biomesoplenty:rose_quartz_chunk',
    C: 'create_things_and_misc:vibration_mechanism'
  })

  // Computational
  event.recipes.create.sequenced_assembly(
    // Output:
    'createmechanisms:computing_mechanism',
    // Input:
    'createmechanisms:advanced_precision_mechanism',
    // Sequence:
    [
      event.recipes.create.deploying('createmechanisms:incomplete_computing_mechanism', ['createmechanisms:incomplete_computing_mechanism', 'ae2:fluix_crystal',]),
      event.recipes.create.deploying('createmechanisms:incomplete_computing_mechanism', ['createmechanisms:incomplete_computing_mechanism', 'create_things_and_misc:vibration_mechanism',]),
      event.recipes.create.deploying('createmechanisms:incomplete_computing_mechanism', ['createmechanisms:incomplete_computing_mechanism', 'createmechanisms:heat_mechanism',]),
      event.recipes.create.deploying('createmechanisms:incomplete_computing_mechanism', ['createmechanisms:incomplete_computing_mechanism', 'simulated:gyroscopic_mechanism',]),
    ]
  )
  .transitionalItem('createmechanisms:incomplete_computing_mechanism') // Set the transitional item
  .loops(2)
})