import { useCallback, useMemo, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import './App.css'
import AutoComplete, { type Option } from './components/AutoComplete'
import { Card } from './components/Card'
import Pagination from './components/Pagination'
import { usePokemon } from './hooks/usePokemon'
import ErrorFallback from './components/ErrorFallback'

export type Pokemon = {
  name: string,
  url: string
}

function App() {
  const [currentPage, setPage] = useState(0)
  const { pokemonList } = usePokemon({ page: currentPage, maxByPage: 10 })
  const [selectedPokemon, setSelectedPokemon] = useState<Option | null>(null)

  const selectPaged = useCallback((page: number) => {
    setPage(page)
  }, [])

  const selectPokemon = useCallback((pokemon: Option | null) => {
    setSelectedPokemon(pokemon)
  }, [])

  const pokemonListFiltered = useMemo(() => {
    if (!selectedPokemon) {
      return pokemonList
    }
    return pokemonList.filter((p) => p.id === selectedPokemon?.id)
  }, [selectedPokemon, pokemonList])

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div>
        <ErrorBoundary fallback={<p>Erro ao carregar o AutoComplete</p>}>
          <AutoComplete onSelect={selectPokemon} options={pokemonList} />
        </ErrorBoundary>
      </div>

      <div>
        <br />
        <ErrorBoundary fallback={<p>Erro ao carregar a Paginação</p>}>
          <Pagination 
            onClick={selectPaged} 
            totalPages={pokemonList.length} 
            maxByPage={10} 
          />
        </ErrorBoundary>
      </div>

      <div>
        <ErrorBoundary fallback={<p>Erro ao carregar os Cards</p>}>
          {pokemonListFiltered.map((pokemon) => (
            <Card key={pokemon.id}>
              <p>{pokemon.value}</p>
            </Card>
          ))}
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  )
}

export default App
