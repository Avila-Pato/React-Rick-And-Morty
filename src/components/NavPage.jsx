function NavPage({ page, setPage, totalPages }) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <button
        type="button"
        class="btn btn-outline-secondary"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Previus
      </button>

      <span class="badge badge-light">{page}</span>

      <button
        type="button"
        class="btn btn-outline-secondary"
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        next
      </button>
    </div>
  );
}

export default NavPage;
