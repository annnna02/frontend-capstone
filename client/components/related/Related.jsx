import React, { useState, useEffect } from 'react';
import Carousel from './Carousel.jsx'

const Related = () => {

  return (
    <div className="component">
      <h2>RELATED ITEMS</h2>

      <div className="related_items_container">
        <div className="related_container">
          <i className="fas fa-arrow-circle-left" id="topleft"></i>
          <div className="product" id="1">RELATED ITEM<br></br>PLACEHOLDER</div>
          <div className="product" id="2">RELATED ITEM<br></br>PLACEHOLDER</div>
          <div className="product" id="3">RELATED ITEM<br></br>PLACEHOLDER</div>
          <div className="product" id="gradient_tile">RELATED ITEM<br></br>PLACEHOLDER</div>
          <i className="fas fa-arrow-circle-right" id="topright"></i>
        </div>
        <div className="your_list_container">
          <i className="fas fa-arrow-circle-left" id="bottomleft"></i>
          <div className="yours" id="4">LIST ITEM<br></br>PLACEHOLDER</div>
          <div className="yours" id="5">LIST ITEM<br></br>PLACEHOLDER</div>
          <div className="yours" id="6">LIST ITEM<br></br>PLACEHOLDER</div>
          <div className="yours" id="gradient_tile">LIST ITEM<br></br>PLACEHOLDER</div>
          <i className="fas fa-arrow-circle-right" id="bottomright"></i>
        </div>
      </div>
    </div>

  )

}

export default Related;




// import React, { useState, useEffect, useContext } from 'react';
// import answers from '../../../mock-data/answers-list-data.js'
// import Carousel from './Carousel.jsx'
// import { ProductContext } from '../../ProductContext.jsx';
// import access from '../../../config.js';
// import axios from 'axios';
// // import React { useState } from 'react;'

// // CHANGE NAME HERE
// const Related = () => {
//   let id = (useContext(ProductContext))
//   let [relatedPhotos, setRelatedPhotos] = useState([]);
//   const [isLoaded, setIsLoaded] = useState(false);

//   console.log(relatedPhotos[1]);

//   // const images = () => {
//   useEffect(() => {
//     axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id.id}/styles`, {
//       headers: { 'Authorization': `${access.TOKEN}` }
//     })
//       .then((response) => {
//         setRelatedPhotos(response.data.results[1].photos)
//         console.log(response.data.results[1].photos)
//         setIsLoaded(true);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [id])