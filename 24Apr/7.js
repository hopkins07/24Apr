import React from 'react';
import ReactDOM from 'react-dom';

const Card = ({ title, children }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.content}>{children}</div>
    </div>
  );
};

const ParentComponent = () => {
  return (
    <div style={styles.container}>
      <Card title="Card 1 Title">
        <p>This is the content for the first card.</p>
      </Card>
      <Card title="Card 2 Title">
        <p>This is the content for the second card. You can put any content here.</p>
      </Card>
      <Card title="Card 3 Title">
        <p>This is the content for the third card. It can be anything, like text, images, etc.</p>
      </Card>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
    backgroundColor: '#f4f4f4',
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '10px',
  },
  title: {
    fontSize: '20px',
    color: '#333',
    marginBottom: '10px',
  },
  content: {
    fontSize: '16px',
    color: '#666',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(<ParentComponent />);