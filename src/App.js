import React from 'react';
import Button from './Components/Button';
import Product from "./Components/Product";
import Tile from "./Components/Tile";
import bagOne from './assets/bag_1.png';
import bagTwo from './assets/bag_2.png';
import bagThree from './assets/bag_3.png';
import bagFour from './assets/bag_4.png';
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';
import './App.css';

function App() {
  return (

      <>
        <h1>Handbags & Purses</h1>
        <>
          <nav>
            <Button
                logDescription={"to the Collection"}
                textInput={"to the Collection"}
            />
            <Button
                logDescription={"Shop all bags"}
                textInput={"Shop all bags"}
            />
            <Button
                buttonDisabled={true}
                logDescription={"Pre-orders"}
                textInput={"Pre-orders"}
            />
          </nav>
        </>
        <>
          <main>
            <Product
                productLabel={"Best seller"}
                productImage={bagOne}
                imageTitle={"Bag"}
                productName={"The handy bag"}
                productPrice={"€400,-"}
            />
            <Product
                productLabel={"Best seller"}
                productImage={bagTwo}
                imageTitle={"Bag"}
                productName={"The stylish bag"}
                productPrice={"€250,-"}
            />
            <Product
                productLabel={"New collection"}
                productImage={bagThree}
                imageTitle={"Bag"}
                productName={"The simple bag"}
                productPrice={"€300,-"}
            />
            <Product
                productLabel={"New collection"}
                productImage={bagFour}
                imageTitle={"Bag"}
                productName={"The trendy bag"}
                productPrice={"€150,-"}
            />
          </main>
        </>
        <>
          <footer>
            <Tile
                tileTitle={"The Brand"}
            >
              <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias amet assumenda blanditiis dolore dolorem expedita incidunt iste nemo obcaecati pariatur quam quo quos soluta, suscipit tempora unde. Veritatis."</p>
              <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda beatae blanditiis consequuntur cupiditate ducimus eligendi est ex, id impedit ipsam iste obcaecati optio perferendis provident, quo ratione, soluta tempora!"</p>
            </Tile>

            <Tile
                brandImage={brand}
                brandImageText={brand}
            />
            <Tile
                brandImage={ourStory}
                brandImageText={"Our Story"}
            />
            <Tile
                tileTitle={"The Brand"}
            >
              <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda beatae blanditiis consequuntur cupiditate ducimus eligendi est ex, id impedit ipsam iste obcaecati optio perferendis provident, quo ratione, soluta tempora!"</p>
            </Tile>

          </footer>
        </>
      </>




  );
}

export default App;



