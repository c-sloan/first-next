import React from "react"
import Image from "next/image"

interface MonProps {
  name: string
  index: number
}

const fetchPokemonImage = (index: number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    index + 1
  }.png`
}

const PokemonCard = ({ name, index }: MonProps) => {
  console.log("card")
  return (
    <div className='text-center flex-col'>
      <div className='hero container max-w-screen-lg mx-auto pb-10'>
        <Image
          className='mx-auto'
          src={fetchPokemonImage(index)}
          alt='pokemon'
        />
      </div>
      {name}
    </div>
  )
}

export default PokemonCard
