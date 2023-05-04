const tagsContainerEl = document.querySelector(".tags");
const textAreaEl = document.getElementById("textarea");

textAreaEl.focus();

textAreaEl.addEventListener("keyup", (e) => {
  let textInput = e.target.value;
  createTags(textInput);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 50);
    selectRandom();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsContainerEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsContainerEl.appendChild(tagEl);
  });
}

function selectRandom() {
  times = 20;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);

    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unhighlightTag(tag) {
  tag.classList.remove("highlight");
}
