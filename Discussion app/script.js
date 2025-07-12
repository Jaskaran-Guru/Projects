document.addEventListener('DOMContentLoaded', function() {
    const questionForm = document.getElementById('newQuestionForm');
    const questionList = document.getElementById('questionList');
    const questionDetail = document.getElementById('questionDetail');
    const questionFormDiv = document.getElementById('questionForm');
    const questionTitle = document.getElementById('questionTitle');
    const questionText = document.getElementById('questionText');
    const responseList = document.getElementById('responseList');
    const responseForm = document.getElementById('newResponseForm');
    const resolveButton = document.getElementById('resolveButton');
  
    let questions = [];
    let selectedQuestionIndex = null;
  
    // User Story 1: Submit a new question
    questionForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const title = document.getElementById('title').value;
      const question = document.getElementById('question').value;
  
      const newQuestion = {
        title,
        question,
        responses: []
      };
  
      questions.push(newQuestion);
      updateQuestionList();
  
      // Clear form fields
      document.getElementById('title').value = '';
      document.getElementById('question').value = '';
    });
  
    // User Story 2: Update the question list
    function updateQuestionList() {
      questionList.innerHTML = '';
      questions.forEach((q, index) => {
        const li = document.createElement('li');
        li.textContent = q.title;
        li.addEventListener('click', () => showQuestionDetail(index));
        questionList.appendChild(li);
      });
    }
  
    // User Story 3: Show question detail
    function showQuestionDetail(index) {
      selectedQuestionIndex = index;
      const question = questions[index];
      questionTitle.textContent = question.title;
      questionText.textContent = question.question;
      responseList.innerHTML = '';
  
      question.responses.forEach(response => {
        const li = document.createElement('li');
        li.textContent = `${response.name}: ${response.comment}`;
        responseList.appendChild(li);
      });
  
      questionFormDiv.style.display = 'none';
      questionDetail.style.display = 'block';
    }
  
    // User Story 4: Submit a response
    responseForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const comment = document.getElementById('comment').value;
  
      const newResponse = {
        name,
        comment
      };
  
      questions[selectedQuestionIndex].responses.push(newResponse);
      showQuestionDetail(selectedQuestionIndex);
  
      // Clear response form
      document.getElementById('name').value = '';
      document.getElementById('comment').value = '';
    });
  
    // User Story 5: Resolve a question
    resolveButton.addEventListener('click', function() {
      questions.splice(selectedQuestionIndex, 1);
      updateQuestionList();
      questionFormDiv.style.display = 'block';
      questionDetail.style.display = 'none';
    });
  });
  