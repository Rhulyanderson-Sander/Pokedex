var quantidade = document.getElementById('quantidade');
quantidade.addEventListener('keyup',()=>{
    pegaPokemons(quantidade.value);
})

pegaPokemons(3)

function pegaPokemons(quantidade){
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
            .then(response => response.json())
            .then(allpokemon => {

                var pokemons = [];

                allpokemon.results.map((val)=>{

                    fetch(val.url)
                        .then(response => response.json())
                        .then(pokemonSingle => {
                            pokemons.push({nome:val.name, image:pokemonSingle.sprites.front_default});

                            if(pokemons.length == quantidade){

                                var pokemonsBox = document.querySelector('.pokemon-box');
                                pokemonsBox.innerHTML = '';

                                pokemons.map(function(val){
                                    pokemonsBox.innerHTML+=`
                                    <div class="pokemon-single">
                                        <img src="`+val.image+`">
                                        <h3>`+val.nome+`</h3>
                                    </div> 
                                    `;
                                })

                                
                            }
                        })
                })

            })
}