import React from 'react';
import products from './product';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const App = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      width: "100%",
      height: "100%",
      maxWidth: "1200px",
      margin: "10px auto",
      padding: "20px",
      backgroundColor: "#fcfbf9",
      border: "1px solid #ddd",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
    },
    card: {
      backgroundColor: "#fcfbf9",
      border: "1px solid #9d9d79",
      borderRadius: "5px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      width: "30%",
      height: "100%",
      marginBottom: "20px",
      boxSizing: "border-box",
      transition: "transform 0.3s, box-shadow 0.3s",
    },
    profile: {
      display: "flex",
      justifyContent: "flex-start",
      flexWrap: "wrap",
    }
  };

  const firstName = "Omolewa";

  return (
    <div style={styles.container}>
      {products.map((product, index) => (
        <div key={index} style={styles.card}>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
          <Image image={product.image} />
          <div style={styles.profile}>
            {firstName && <img src="https://gomycodelearn.blob.core.windows.net/profiles/89ed952c-2b13-401c-9b78-3610aaf1abb5-133591237293027357.jpg" style={{ borderRadius: '50%' }} width="10%" height="6%" alt="Profile" />}
            &nbsp;
            <p>{firstName ? `Hello, ${firstName}` : "Hello, there!"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
