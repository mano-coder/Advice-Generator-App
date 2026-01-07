const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const generateBtn = document.getElementById("generate-btn");

const link = "https://api.adviceslip.com/advice";

const getData = async () => {
  generateBtn.disabled = true;
  adviceText.textContent = "Loading wisdom...";
  adviceId.textContent = "...";
  try {
    const res = await fetch(`${link}?${Date.now()}`);
    const data = await res.json();

    generateAdvice(data.slip);
  } catch (err) {
    console.error(err);
  }
};

const generateAdvice = async (data) => {
  adviceId.textContent = data.id;
  adviceText.textContent = `"${data.advice}"`;
};

generateBtn.addEventListener("click", getData);

getData();
