import { FormEvent, useEffect, useState } from 'react'
import { fetchSpecies } from '../actions/speciesActions'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useNavigate } from 'react-router-dom'
import { NewPet } from '../../Model/pet'
import { addPet } from '../apis/petApi'

function PetCreation() {
  const navigate = useNavigate()
  const species = useAppSelector((state) => state.species)
  const dispatch = useAppDispatch()
  const [pet, setPet] = useState<NewPet>({
    speciesId: 0,
    name: '',
  })

  useEffect(() => {
    dispatch(fetchSpecies())
  }, [dispatch])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(pet)
    addPet(pet)
    setPet({ speciesId: 0, name: '' })
    navigate('/')
  }

  if (species.loading) {
    return <div className="ml-8">weather is loading</div>
  }
  if (species.error) {
    return <></>
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {species.data.map((singleSpecies) => {
        return (
          <>
            <button
              type="button"
              onClick={() => setPet({ ...pet, speciesId: singleSpecies.id })}
              key={singleSpecies.id}
            >
              <div>
                <img src={singleSpecies.image} alt={singleSpecies.nam} />
              </div>
            </button>
          </>
        )
      })}

      <label htmlFor="pet-name">Enter you pet name</label>
      <input
        type="text"
        id="pet-name"
        value={pet.name}
        onChange={(e) => {
          setPet({ ...pet, name: e.target.value })
        }}
      />
      <button>Add Pet</button>
    </form>
  )
}

export default PetCreation
