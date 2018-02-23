class player  {};
Object.defineProperty(player, 'firstName', {
  value: "Virat",
  writable: true,//edit the value
  enumerable: true, //during iteraton wether you want it to be visisble or not
  configurable: true//delete this object or not
});

Object.defineProperty(player, 'lastName', {
  value: "Kohli",
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(player, 'fullName', {
    value: function(){
        return this.firstName+" "+this.lastName
    },
    writable: true,
    enumerable: true,
    configurable: true
  });
  

player.firstName="Virushka"
console.log(player.fullName());

for(person in player)
    console.log(person+":"+player[person]);