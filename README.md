# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](https://www.google.com/search?q=%23overview)
  - [The challenge](https://www.google.com/search?q=%23the-challenge)
  - [Screenshot](https://www.google.com/search?q=%23screenshot)
  - [Links](https://www.google.com/search?q=%23links)
- [My process](https://www.google.com/search?q=%23my-process)
  - [Built with](https://www.google.com/search?q=%23built-with)
  - [What I learned](https://www.google.com/search?q=%23what-i-learned)
  - [Continued development](https://www.google.com/search?q=%23continued-development)
  - [Useful resources](https://www.google.com/search?q=%23useful-resources)
- [Author](https://www.google.com/search?q=%23author)
- [Acknowledgments](https://www.google.com/search?q=%23acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon
- Handle slow network conditions with a visible loading state

### Screenshot
![](./images/screenshot.png)

### Links

- Solution URL: [https://github.com/mano-coder/advice-generator-app](https://www.google.com/search?q=https://github.com/mano-coder/advice-generator-app)
- Live Site URL: [https://mano-coder.github.io/advice-generator-app/](https://www.google.com/search?q=https://mano-coder.github.io/advice-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript (ES6+)
- [Advice Slip API](https://api.adviceslip.com/)

### What I learned

One of the major learnings in this project was handling API-side caching. The Advice Slip API has a 2-second cache window. To ensure the user gets a fresh piece of advice every time they click the button, I implemented a "cache-buster" by appending a timestamp to the URL.

I also learned how to use the finally block in asynchronous functions to ensure the UI state (like re-enabling buttons) is reset regardless of the request outcome.

@keyframes shimmer {  
0% { opacity: 0.5; }  
50% { opacity: 1; }  
100% { opacity: 0.5; }  
}  
<br/>.loading {  
animation: shimmer 1.5s infinite;  
}  

const getData = async () => {  
generateBtn.disabled = true;  
adviceText.classList.add("loading");  
<br/>try {  
// Unique URL to bypass 2-second API caching  
const res = await fetch(\`\${link}?t=\${Date.now()}\`);  
const data = await res.json();  
generateAdvice(data.slip);  
} catch (err) {  
console.error("Failed to load advice:", err);  
} finally {  
// This runs whether the fetch succeeds or fails  
adviceText.classList.remove("loading");  
generateBtn.disabled = false;  
}  
};  

### Continued development

In future projects, I want to continue focusing on:

- **Skeleton Loaders:** Implementing more advanced visual placeholders for content.
- **Micro-interactions:** Adding complex SVG animations to interactive elements like the dice.
- **Accessibility:** Ensuring all interactive elements are fully navigable via keyboard.

### Useful resources

- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - This helped me understand the asynchronous nature of network requests.
- [Advice Slip API Documentation](https://api.adviceslip.com/) - Essential for understanding the JSON structure of the returned data.

## Author

- GitHub - [mano-coder](https://github.com/mano-coder)
- Frontend Mentor - [@mano-coder](https://www.google.com/search?q=https://www.frontendmentor.io/profile/mano-coder)

## Acknowledgments

Thanks to the community for providing insights into the specific caching behavior of this API.
