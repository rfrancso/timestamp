import React from 'react';

function CategoriesPage() {
  // List of categories
  const categories = [
    { name: "World News", description: "Latest updates from around the globe." },
    { name: "National News", description: "News from across the country." },
    { name: "Technology", description: "The latest in tech and gadgets." },
    { name: "Healthcare", description: "Health news and updates." },
    { name: "Science", description: "Discoveries and research insights." },
    { name: "Finance", description: "Financial news and economic trends." },
    { name: "Education", description: "News on education policy and institutions." },
    { name: "Artificial Intelligence", description: "AI advancements and impacts." },
    { name: "Cybersecurity", description: "Security insights and best practices." },
    { name: "Startups", description: "New ventures and startup ecosystem." }
  ];

  // Styles Object
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.1)'
    },
    categoryItem: {
      padding: '10px',
      borderBottom: '1px solid #ddd',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#efefef'
      }
    },
    categoryTitle: {
      fontSize: '1.2rem',
      color: '#0056b3',
      marginBottom: '5px'
    },
    categoryDescription: {
      fontSize: '1rem',
      color: '#666'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>News & Tech Categories</h1>
      {categories.map((category, index) => (
        <div key={index} style={styles.categoryItem}>
          <div style={styles.categoryTitle}>{category.name}</div>
          <p style={styles.categoryDescription}>{category.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoriesPage;
