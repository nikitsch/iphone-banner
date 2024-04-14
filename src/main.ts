document.getElementById("option-1")!.addEventListener("click", function() {
  const option1 = document.getElementById("option-1");
  const option2 = document.getElementById("option-2");
  
  if (option1 && option2) {
      option2.classList.remove("active");
      option1.classList.add("active");

      const href = option1.getAttribute("data-href");
      if (href) {
          localStorage.setItem("selectedHref", href);
      }
  }
});

document.getElementById("option-2")!.addEventListener("click", function() {
  const option1 = document.getElementById("option-1");
  const option2 = document.getElementById("option-2");

  if (option1 && option2) {
      option1.classList.remove("active");
      option2.classList.add("active");

      const href = option2.getAttribute("data-href");
      if (href) {
          localStorage.setItem("selectedHref", href);
      }
  }
});

document.getElementById("submit")!.addEventListener("click", function() {
  const href = localStorage.getItem("selectedHref");
  if (href) {
      window.open(href, '_blank');
  }
});
