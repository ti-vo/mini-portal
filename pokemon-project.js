class Pokemon {
    constructor(name, type, strength, caught=false) {
        this.name = name;
        this.type = type;
        this.strength = strength;
        this.caught=caught;
    }
    markAsCaught(){
        this.caught=true}
    
    description(){
        return `${this.name} (${this.type}), strength: ${this.strength}`;
    }

}

class Pokedex{
    constructor() {
    this.pokemons = [];
  }

  addPokemon(pokemon){
    this.pokemons.push(pokemon)
  }

  findOfType(type){
    console.log(this.pokemons.filter((pokemon) => pokemon.type === type))
  }

  getStrongest() {
  return this.pokemons.reduce((strongest, current) => {
    if (current.strength > strongest.strength) {
      return current;
    }
    return strongest;
  });
  }

  sortByStrength(){
    const sortedArray = [...this.pokemons].sort((a, b) => b.strength - a.strength);
    // because .sort changes the original array, we make a copy 
    const sortedNames = sortedArray.map((pokemon) => pokemon.name);
    return sortedNames;
  }

}