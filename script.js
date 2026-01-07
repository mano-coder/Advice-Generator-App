const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const generateBtn = document.getElementById("generate-btn");

const link = "https://api.adviceslip.com/advice";

const getData = async () => {
  generateBtn.disabled = true;
  adviceText.classList.add("loading");
  adviceId.classList.add("loading");

  adviceText.textContent = "Loading wisdom...";
  adviceId.textContent = "...";
  try {
    const res = await fetch(`${link}?${Date.now()}`);
    const data = await res.json();

    adviceText.classList.remove("loading");
    adviceId.classList.remove("loading");
    generateAdvice(data.slip);
  } catch (err) {
    console.error(err);
  } finally {
    generateBtn.disabled = false;
  }
};

const generateAdvice = (data) => {
  adviceId.textContent = data.id;
  adviceText.textContent = `"${data.advice}"`;
};

generateBtn.addEventListener("click", getData);

getData();
