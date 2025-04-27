// Function to animate the counting of numbers
function countUp(elementId, targetNumber, duration) {
  let element = document.getElementById(elementId);
  let currentNumber = 0;
  let increment = targetNumber / (duration / 50);

  let interval = setInterval(() => {
    currentNumber += increment;
    if (currentNumber >= targetNumber) {
      element.innerText = targetNumber + "%"; // Add the percentage sign
      clearInterval(interval);
    } else {
      element.innerText = Math.floor(currentNumber) + "%"; // Add the percentage sign
    }
  }, 50); // Updates the number every 50 milliseconds
}

// Intersection Observer to trigger counting when elements are in view
const options = {
  root: null, // use the viewport as the root
  threshold: 0.5, // Trigger when 50% of the element is in view
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Start counting when element is visible
      if (entry.target.id === 'satisfaction') {
        countUp("satisfaction-count", 82, 2000); // 82% with 2-second animation
      }
      if (entry.target.id === 'improvements') {
        countUp("improvement-count", 76, 2000); // 76% with 2-second animation
      }
      if (entry.target.id === 'response') {
        countUp("response-count", 89, 2000); // 89% with 2-second animation
      }
      observer.unobserve(entry.target); // Stop observing once the animation starts
    }
  });
}, options);

// Observe the elements
observer.observe(document.getElementById('satisfaction'));
observer.observe(document.getElementById('improvements'));
observer.observe(document.getElementById('response'));