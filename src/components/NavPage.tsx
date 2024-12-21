
type NavPageProps = {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
};

function NavPage({ page, setPage, totalPages } : NavPageProps) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Previus
      </button>

      <span className="badge badge-light">{page}</span>

      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        next
      </button>
    </div>
  );
}

export default NavPage;
