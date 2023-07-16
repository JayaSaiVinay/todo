export function Header() {
  return (
    <header>
      <h1>TODO List</h1>
      <div className="date">
        <h2>
          {new Date().toDateString()} {new Date().toLocaleTimeString()}
        </h2>
      </div>
    </header>
  );
}
