import './App.css';

function ProfileIcon({ user }) {
  return (
    <div>
      <p>User: {user}</p>
    </div>
  );
}

function Header({ user }) {
  return (
    <header>
      <ProfileIcon user={user} />
    </header>
  );
}

function App() {
  const user = "John Doe";

  return (
    <div>
      <Header user={user} />
    </div>
  );
}

export default App;
