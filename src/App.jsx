import React from 'react';
import Container from 'react-bootstrap/Container';
import products from './product';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './App.css'; 

const App = () => {
  const firstName = "Omolewa";

  return (
    <Container className="grid">
      {products.map((product, index) => (
        <div key={index} className="card">
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
          <Image image={product.image} />
          <div className="profile">
            {firstName && <img src="https://gomycodelearn.blob.core.windows.net/profiles/89ed952c-2b13-401c-9b78-3610aaf1abb5-133591237293027357.jpg" style={{ borderRadius: '50%' }} width="10%" height="6%" alt="Profile" />}
            &nbsp;
            <p>{firstName ? `Hello, ${firstName}` : "Hello, there!"}</p>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default App;
