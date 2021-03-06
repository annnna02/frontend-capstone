import React, { useState, useEffect, useContext } from 'react';
// import questions from '../../../mock-data/questions-data.js';
import { ProductContext } from '../../ProductContext.jsx';
import QuestionsList from './QuestionsList.jsx';
import SearchBar from './SearchBar.jsx';
import access from '../../../config.js';
import axios from 'axios';



// CHANGE NAME HERE
const QuestionsAndAnswers = () => {

  let currentProduct = useContext(ProductContext);
  let currentProductId = currentProduct.id;

  const [questionData, setQuestionData] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if(currentProductId) {
      axios.get(`/questions/${currentProductId}`)
      .then((response) => {
        setQuestionData(response.data.results);
        setQuestionList(response.data.results);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
    }
  }, [currentProductId]);


  return (
    <div className="component">
      <div className="q_a_component">
        <h2>QUESTIONS & ANSWERS</h2>
        {isLoaded &&
          <SearchBar questionData={questionData} setQuestionList={setQuestionList} />
        }
        {isLoaded &&
          <QuestionsList questionList={questionList} test={setQuestionList} currentProduct={currentProduct}/>
        }
      </div>
    </div>
  )

}

// CHANGE EXPORT HERE
export default QuestionsAndAnswers;