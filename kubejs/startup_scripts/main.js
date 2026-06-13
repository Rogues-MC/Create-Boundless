// Visit the wiki for more info - https://kubejs.com/
console.info('[Create: Boundless KubeJS] Hello world! Loading startup script...')

// Listen to item registry event
StartupEvents.registry('item', event => {
  event.create('bronze_sheet').texture('createboundless:item/bronze_sheet').maxStackSize(64).tag('c:plates/bronze').tag('c:plates').tag('immersiveengineering:repairs_automaton') // This texture would be located at kubejs/assets/createboundless/textures/item/bronze_sheet.png
})