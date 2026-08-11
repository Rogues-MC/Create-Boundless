// Visit the wiki for more info - https://kubejs.com/
console.info('[Create: Boundless KubeJS] Hello world! Loading biomes compatibility script...')

ServerEvents.tags('worldgen/biome', event => {
  // OIL BIOMES
  event.add('createdieselgenerators:oil_biomes', [
    '#minecraft:has_structure/swamp_hut', // Swamp Biomes
    '#minecraft:has_structure/village_desert',
    '#minecraft:has_structure/village_savanna',
    '#minecraft:has_structure/village_plains',
    '#minecraft:has_structure/village_taiga',
    '#minecraft:has_structure/village_snowy',
    '#minecraft:has_structure/shipwreck'
  ])
})