/* eslint-disable */
const Navbar = ({ showWeek, setShowWeek }) => {
  const toggleView = e => {
    if (e.target.className.includes('history')) {
      setShowWeek(false);
    } else {
      setShowWeek(true);
    }
  };

  return (
    <footer className="navbar">
      <div
        onClick={toggleView}
        className={`navbar__current ${
          showWeek ? 'navbar__current--selected' : ''
        }`}
      >
        <i className="bx bx-check-circle"></i>
      </div>
      <div
        onClick={toggleView}
        className={`navbar__history ${
          showWeek ? '' : 'navbar__history--selected'
        }`}
      >
        <i className="bx bx-history"></i>
      </div>
    </footer>
  );
};

export default Navbar;
