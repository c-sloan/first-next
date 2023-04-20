import React from "react"
import PokemonCard from "@/components/PokemonCard"
import { Pokemon } from "@/utils/models"
import { GetStaticProps, InferGetStaticPropsType } from "next"

const PokemonList = ({
  list,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className='grid grid-cols-3 gap-4 content-evenly'>
      {list?.map((pokemon: Pokemon, index: number) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} index={index} />
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  const results = await response.json()
  const list: Pokemon[] = results.results

  return {
    props: {
      list,
    },
  }
}

export default PokemonList
