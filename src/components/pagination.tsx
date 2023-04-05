import Link from "next/link"



interface Props {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  const handleClick = (page: number) => {
    onPageChange(page)
  }

  return (
    <nav>
      <ul>
        {currentPage > 1 && (
          <li>
            <Link href={`/?page=${currentPage - 1}`}>
              <a onClick={() => handleClick(currentPage - 1)}>Prev</a>
            </Link>
          </li>
        )}
        {pages.map((page) => (
          <li key={page}>
            <Link href={`/?page=${page}`}>
              <a
                onClick={() => handleClick(page)}
                className={currentPage === page ? "active" : ""}
              >
                {page}
              </a>
            </Link>
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <Link href={`/?page=${currentPage + 1}`}>
              <a onClick={() => handleClick(currentPage + 1)}>Next</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
