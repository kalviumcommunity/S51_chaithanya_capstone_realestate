import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import "./Faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [userQuestion, setUserQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [faqData, setFaqData] = useState([
    {
      question: 'How do I search for properties on your website?',
      answer: 'You can search for properties by using the search bar at the top of the page. Simply enter your desired location, property type, price range, and any other relevant criteria to find matching listings.'
    },
    {
      question: 'Can I save properties to view later?',
      answer: 'Yes, you can create an account on our website and save your favorite properties to your profile. This allows you to easily access and manage your saved listings.'
    },
    {
      question: 'Do you provide assistance for first-time homebuyers?',
      answer: 'Absolutely! We offer personalized assistance for first-time homebuyers, including guidance on the home buying process, mortgage options, and available government programs.'
    },
    {
      question: 'What types of properties do you offer?',
      answer: 'We offer a wide range of properties including houses, apartments, condos, townhomes, land, and commercial properties. Whether you’re looking to buy, rent, or invest, we have options to suit your needs.'
    },
    {
      question: 'Can I post my property and search?',
      answer: 'Yes, there is a feature called "Post Your Property" where you can add your property details, and then use the search feature to find it!'
    }
  ]);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleQuestionChange = (e) => {
    setUserQuestion(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (userQuestion && userAnswer) {
      const newFaqItem = { question: userQuestion, answer: userAnswer };
      setFaqData([...faqData, newFaqItem]);
      setUserQuestion('');
      setUserAnswer('');
    }
  };

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <span>{item.question}</span>
              <span className="toggle-icon">
                {activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
      <div className="faq-user-input">
        <input
          type="text"
          placeholder="Enter your question"
          value={userQuestion}
          onChange={handleQuestionChange}
        />
        <textarea
          placeholder="Enter the answer"
          value={userAnswer}
          onChange={handleAnswerChange}
        ></textarea>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Faq;
