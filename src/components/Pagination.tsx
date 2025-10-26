import { useCallback, useEffect, useState } from "react"
import './Pagination.css'
import classnames from 'classnames'

type PaginationProps = {
  totalPages: number;
  maxByPage: number;
  onClick?: (page: number) => void
}

const Pagination = ({ maxByPage, onClick }: PaginationProps) => {
  const [rangePage, setRangePage] = useState<number[]>([])
  const [currentIndexPage, setCurrentIndexPage] = useState<number>(0)

  useEffect(() => {
    const arr = []
    for (let i = 1; i <= maxByPage; i++) {
      arr.push(i)
    }
    setRangePage(arr)
  }, [maxByPage])

  const selectPaged = useCallback((page: number) => {
    if (onClick) {
      const indexPage = page - 1
      setCurrentIndexPage(indexPage)
      onClick(indexPage)
    }
  }, [onClick])

  return (
    <div className="pagination-container">
      {rangePage.map((page, index) => (
        <div
          onClick={() => { selectPaged(page) }}
          key={page}
          className={classnames('pagination-item', {
            'pagination-item-selected': currentIndexPage === index
          })}
        >
          {page}
        </div>
      ))}
    </div>
  )
}

export default Pagination

