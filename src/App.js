import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
import { logDOM } from "@testing-library/react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {
  // estado do id 
  const [id, setId] = useState("")
  const [nome, setNome] = useState("")

  // const filtroId = pokemons.filter((pokemon) => {
  //   if (pokemon.id === id) {
  //     return pokemon
  //   }
  // }).map((pokemon) => {
  //   return <PokemonCard
  //     cardColor={getColors(pokemon.type[0])}
  //     key={pokemon.id}
  //     pokemon={pokemon}
  //   />
  // })


  // const filtroNome = pokemons.filter((pokemon) => {
  //   return pokemon.name.english.includes(nome)
  // }).map((pokemon) => {
  //   return <PokemonCard
  //     cardColor={getColors(pokemon.type[0])}
  //     key={pokemon.id}
  //     pokemon={pokemon}
  //   />
  // })

  // const todosPokemons = pokemons.map((pokemon) => {
  //   return <PokemonCard
  //     cardColor={getColors(pokemon.type[0])}
  //     key={pokemon.id}
  //     pokemon={pokemon}
  //   />
  // })

  return (
    <>
      <GlobalStyle />
      <Header id={id} setId={setId} nome={nome} setNome={setNome} />
      <CardsContainer>
        {pokemons.filter((pokemon) => {
          return pokemon.name.english.toLowerCase().includes(nome.toLowerCase())
        }).filter((pokemon)=>{
          return pokemon.id.includes(id)
        }).map((pokemon) => {
          return <PokemonCard
            cardColor={getColors(pokemon.type[0])}
            key={pokemon.id}
            pokemon={pokemon}
          />
        })
        }


      </CardsContainer>
    </>
  );
}

export default App;
