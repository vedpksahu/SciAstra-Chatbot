function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.style.display = chatbotContainer.style.display === 'none' ? 'block' : 'none';
}

function sendUserMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatbotContent = document.getElementById('chatbot-content');
    const chatbotResponse = handleUserInput(userInput);

    chatbotContent.innerHTML += `<div class="user-message">${userInput}</div>`;
    chatbotContent.innerHTML += `<div class="chatbot-message">${chatbotResponse}</div>`;

    chatbotContent.scrollTop = chatbotContent.scrollHeight;
}

function handleUserInput(userInput) {
    userInput = userInput.toLowerCase();

    const faq = [
           {
                  question: "What is SciAstra",
                  answer: "SciAstra is a cutting-edge and technology company that specialize in..."
           },

           {
                  question: "What services does SciAstra offer?",
                  answer: "SciAstra provides a range of services including research and development, consulting, and..."
           },

           {
                  question: "Who founded SciAstra?",
                  answer: "SciAstra was founded by a team of visionary scientists and entrepreneurs led by..."
           },

           {
                  question: "Tell me about SciAstra's research areas.",
                  answer: "SciAstra focuses on research in areas such as [specific research areas]. Our team of experts is dedicated to..."
           },

           {
                  question: "How can I contact SciAstra?",
                  answer: "You can contact us through our contact page on the website or by emailing us at [email address]."
           },

           {
                  question: "What projects is SciAstra currently working on?",
                  answer: "SciAstra is currently involved in projects related to [specific projects]. We are committed to advancing science and technology in these areas."
           },

           {
                  question: "Tell me about SciAstra's team.",
                  answer: "Our team consists of highly skilled professionals with expertise in various scientific and technological domains. Learn more about our team on the 'About Us' page."
           },

           {
                  question: "Are there job opportunities at SciAstra?",
                  answer: "Yes, we periodically have job openings. You can check our 'Careers' page for current job opportunities and application details."
           },

           {
                  question: "How can I collaborate with SciAstra?",
                  answer: "If you're interested in collaboration, please reach out to us through our collaboration form on the website. We welcome partnerships and joint ventures in areas aligned with our mission."
           },

           {
                  question: "What conferences or events does SciAstra participate in?",
                  answer: "SciAstra actively participates in conferences and events related to [specific themes]. Check our 'Events' page for updates on upcoming events and our participation details."
           },

           {
                  question: "Tell me about SciAstra's commitment to sustainability.",
                  answer: "SciAstra is committed to sustainability and environmental responsibility. We integrate eco-friendly practices in our operations and contribute to projects that promote a sustainable future."
           },
    ];

    const matchingQuestion = faq.find(entry => userInput.includes(entry.question.toLowerCase()));
    return matchingQuestion ? matchingQuestion.answer : "I'm sorry, I don't have information on that specific topic. For more details, please visit our website or contact us directly.";
}

const userQuestion = "What service does SciAstra offer?";

const chatbotResponse = handleUserInput(userQuestion);
console.log(chatbotResponse);

