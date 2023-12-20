// Sample FAQ data (replace with your actual FAQ data)
const faqData = [
    { question: 'What is mulearn?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { question: 'How can I join?', answer: 'You can contact our support team by emailing support@example.com.' },
    { question: 'What is interest group?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { question: 'What is learning circle?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { question: 'how can i join?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { question: 'What is campus chapter?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { question: 'What are the benefits?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { question: 'What are levelsin discord?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { question: 'What are karma points?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { question: 'how to earn karma points?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { question: 'how do i level up?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  ];
  
  // Function to dynamically populate the FAQ accordion
  function populateFAQ() {
    const accordion = document.getElementById('accordion');
  
    faqData.forEach((item, index) => {
      const faqItem = document.createElement('div');
      faqItem.className = 'faq-item';
  
      const questionHeader = document.createElement('div');
      questionHeader.className = 'question-header';
      questionHeader.textContent = item.question;
  
      const answerContent = document.createElement('div');
      answerContent.className = 'answer-content';
      answerContent.textContent = item.answer;
  
      faqItem.appendChild(questionHeader);
      faqItem.appendChild(answerContent);
  
      accordion.appendChild(faqItem);
  
      // Add event listener to toggle accordion on question click
      questionHeader.addEventListener('click', () => {
        answerContent.classList.toggle('show');
      });
    });
  }
  
  // Function to search for a question
  function searchFAQ() {
    const searchInput = document.getElementById('faqSearch').value.toLowerCase();
    const accordion = document.getElementById('accordion');
  
    accordion.innerHTML = ''; // Clear previous search results
  
    const matchingItems = faqData.filter(item =>
      item.question.toLowerCase().includes(searchInput)
    );
  
    matchingItems.forEach(item => {
      const faqItem = document.createElement('div');
      faqItem.className = 'faq-item';
  
      const questionHeader = document.createElement('div');
      questionHeader.className = 'question-header';
      questionHeader.textContent = item.question;
  
      const answerContent = document.createElement('div');
      answerContent.className = 'answer-content';
      answerContent.textContent = item.answer;
  
      faqItem.appendChild(questionHeader);
      faqItem.appendChild(answerContent);
  
      accordion.appendChild(faqItem);
  
      // Add event listener to toggle accordion on question click
      questionHeader.addEventListener('click', () => {
        answerContent.classList.toggle('show');
      });
    });
  }
  
  // Function to handle submitting a new question
  function askNewQuestion() {
    const newQuestionInput = document.getElementById('newQuestion').value.trim();
  
    if (newQuestionInput !== '') {
      // You can save the new question to your data storage or notify someone
      alert('New question submitted: ' + newQuestionInput);
  
      // Clear the input field
      document.getElementById('newQuestion').value = '';
    }
  }
  
  // Call the function to populate FAQ on page load
  window.onload = populateFAQ;
  