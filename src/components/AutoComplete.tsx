import { useCallback, useEffect, useMemo, useState } from "react"
import './AutoComplete.css'

export type Option = {
  id: number,
  value: string;
  imageUrl: string;
}

type AutoCompleteProps = {
  onSelect?: (option: Option | null) => void
  options: Option[]
}

const AutoComplete = ({ onSelect, options }: AutoCompleteProps) => {
  const [textSearched, setTextSearched] = useState("")
  const [listFiltered, setListFiltered] = useState<Option[]>([])
  const [searched, setSearched] = useState<boolean>(false)

  const search = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setTextSearched(value)
    setSearched(value.length > 0)

    if (value.length === 0 && onSelect) {
      onSelect(null)
    }
  }, [onSelect])

  const handleSelect = useCallback((option: Option) => {
    setTextSearched(option.value)
    setSearched(false)
    if (onSelect) {
      onSelect(option)
    }
  }, [onSelect])

  useEffect(() => {
    const filter = options.filter(o => 
      o.value.toLowerCase().includes(textSearched.toLowerCase())
    )
    setListFiltered(filter)
  }, [textSearched, options])

  const showAutoComplete = useMemo(() => {
    return listFiltered && listFiltered.length > 0 && searched
  }, [listFiltered, searched])

  const getImageDescription = useCallback(({ value }: Option): string => {
    return `Image of Pokemon ${value}`
  }, [])

  return (
    <div className="wrapper">
      <div>
        <label>Pesquisar Pokemons</label>
      </div>
      <input
        id="inputSearch"
        type="text"
        className="input"
        value={textSearched}
        onChange={search}
        placeholder="Type to search..."
        role="combobox"
        aria-expanded={false}
        aria-autocomplete="list"
        aria-haspopup="listbox"
        aria-label="Search Field"
      />

      {showAutoComplete && (
        <div className="list">
          <ul>
            {listFiltered.map((option) => (
              <li
                key={option.id}
                onClick={() => handleSelect(option)}
              >
                {option.imageUrl && (
                  <img 
                    src={option.imageUrl} 
                    alt={getImageDescription(option)} 
                  />
                )}
                <p>{option.value}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default AutoComplete

