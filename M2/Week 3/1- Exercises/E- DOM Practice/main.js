// Task 1
// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

const sections = document.querySelectorAll("section");
sections.forEach((section) => (section.style.backgroundColor = "white"));

// Task 2
// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.
// Hint: look at the CSS to see if there are any classes already written which you can use.

document.querySelectorAll("img").forEach((image) => image.classList.add("content-title"));
