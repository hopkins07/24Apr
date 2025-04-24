import React from 'react';
import ReactDOM from 'react-dom';

const BlogPost = ({ title, content, isFeatured }) => {
  const postStyle = {
    backgroundColor: isFeatured ? '#FFFAE1' : 'white',
    padding: '20px',
    marginBottom: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={postStyle}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const BlogPage = () => {
  const blogs = [
    { title: "React Basics", content: "Learn the basics of React.", isFeatured: true },
    { title: "Advanced React", content: "Delve deeper into React.", isFeatured: false },
    { title: "React Performance Tips", content: "Optimize your React apps.", isFeatured: true },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blog Page</h1>
      {blogs.map((blog, index) => (
        <BlogPost
          key={index}
          title={blog.title}
          content={blog.content}
          isFeatured={blog.isFeatured}
        />
      ))}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<BlogPage />);