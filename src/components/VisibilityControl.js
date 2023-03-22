export const VisibilityControl = ({ isChecked, setShowCompleted, cleanTasks }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      cleanTasks();
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center bg-secondary text-white text-center p-2 border-secondary ">
      <div className="form-check form-switch">
        <input
          id="showCompletedTasks"
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />{" "}
        <label className="form-check-label" htmlFor="showCompletedTasks">Show Tasks Done</label>
      </div>
      <button type="button" onClick={handleDelete} className="btn btn-danger btn-sm">
        Clear
      </button>
    </div>
  );
};
