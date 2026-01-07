const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const generateBtn = document.getElementById("generate-btn");

const link = "https://api.adviceslip.com/advice";

let id = 0;

const getData = async () => {
  try {
    const res = await fetch(link);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    alert(`Error: ${err}`);
  }
};

getData();
