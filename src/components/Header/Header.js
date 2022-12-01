import React from "react";
import { Container } from "./styles";

const Header = (props) => {
  
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  // onchange do input
  const onChangeId = (e)=>{
    props.setId(e.target.value)
    
  }
  const onChangeNome = (e)=>{
    props.setNome(e.target.value)
    
  }

  return (
    <Container>
      <input type="number" value={props.id} onChange={(e)=>onChangeId(e)} placeholder="Buscar por id" />
      <input type="text" value={props.nome}  onChange={(e)=>onChangeNome(e)}  placeholder="Buscar por nome" />
      <select>
        <option value="">Ordenar</option>
        <option value="">Crescente</option>
        <option value="">Decrescente</option>
      </select>
      <select name="tipo" id="tipo">
        <option value="">Selecione um tipo</option>



        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
