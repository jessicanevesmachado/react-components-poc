import { useCallback, useMemo, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import AutoComplete, { type Option } from '../components/AutoComplete'
import { Card } from '../components/Card'
import Pagination from '../components/Pagination'
import { usePokemon } from '../hooks/usePokemon'
import ErrorFallback from '../components/ErrorFallback'
import './Home.css'
import { Link } from 'react-router-dom'

export type Pokemon = {
  name: string,
  url: string
}

function Home() {
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
      <div className="home-container">
      <Link to="/demo">Go to Demo</Link>
        <div className="demo-section">
          <h3>AutoComplete</h3>
          <ErrorBoundary fallback={<p>Erro ao carregar o AutoComplete</p>}>
            <AutoComplete onSelect={selectPokemon} options={pokemonList} />
          </ErrorBoundary>
        </div>

        <div className="home-section">
          <h3>Pagination</h3>
          <ErrorBoundary fallback={<p>Erro ao carregar a Paginação</p>}>
            <Pagination 
              onClick={selectPaged} 
              totalPages={pokemonList.length} 
              maxByPage={10} 
            />
          </ErrorBoundary>
        </div>

        <div className="home-section">
          <h3>Cards</h3>
          <ErrorBoundary fallback={<p>Erro ao carregar os Cards</p>}>
            {pokemonListFiltered.map((pokemon) => (
              <Card key={pokemon.id}>
                <p>{pokemon.value}</p>
              </Card>
            ))}
          </ErrorBoundary>
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default Home



