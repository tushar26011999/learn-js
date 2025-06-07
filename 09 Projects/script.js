const emoji = document.querySelector("#emoji");
const emojiList = [
  "😀",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂",
  "🤣",
  "😜",
  "🤪",
  "🧐",
  "🤓",
  "😎",
  "🤩",
  "🥳",
];

emoji.addEventListener("mouseover", () => {
  const randomIndex = Math.floor(Math.random() * emojiList.length);
  emoji.textContent = emojiList[randomIndex];
});
