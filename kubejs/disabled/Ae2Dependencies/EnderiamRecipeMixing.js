ServerEvents.recipes(event => {
   event.custom({
       "type": "create:mixing",
       "heat_requirement": "heated",
       "ingredients": [
           {
               "tag": "c:dusts/glowstone"
           },
           {
               "tag": "c:dusts/ender_pearl"
           },
           {
               "type": "fluid_stack",
               "amount": 1000,
               "fluid": "minecraft:water"
           }
       ],
       "results": [
           {
             "amount": 1000,
             "id": "createmechanisms:enderiam"
           }
       ]
   })
})
