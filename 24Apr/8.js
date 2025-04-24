import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>My Website</h1>
    </header>
  );
};

const Navigation = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><a href="#home">Home</a></li>
        <li style={styles.navItem}><a href="#about">About</a></li>
        <li style={styles.navItem}><a href="#services">Services</a></li>
        <li style={styles.navItem}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

const Content = () => {
  return (
    <main style={styles.mainContent}>
      <h2>Welcome to our site!</h2>
      <p>This is some placeholder text for the main content of the page.</p>
    </main>
  );
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 My Website. All Rights Reserved.</p>
    </footer>
  );
};

const App = () => {
  return (
    <div style={styles.appContainer}>
      <Header />
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
};

const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    padding: '20px',
  },
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
  },
  nav: {
    backgroundColor: '#333',
    padding: '10px 0',
    marginBottom: '20px',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    textAlign: 'center',
  },
  navItem: {
    display: 'inline',
    margin: '0 15px',
  },
  navItem a: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
  mainContent: {
    backgroundColor: 'white',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    marginTop: '20px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);