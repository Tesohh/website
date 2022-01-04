let input = "";
document.addEventListener("keydown", konamiCode);
function konamiCode(e) {
  input += e.code.replace("ControlRight", "");
  console.log(
    "key pressed " +
      e.code +
      `${e.code == "ControlRight" ? " Filtered out" : ""}`
  );
  // console.log(input);
  if (
    input ===
    "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyA"
  ) {
    console.log("Easter Egg Found!");
    document.getElementById("easter-egg").classList.remove("hidden");
    document.removeEventListener("keydown", konamiCode);
  }
}
