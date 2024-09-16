let ul = document.getElementsByTagName("ul");
let li = document.getElementsByTagName("li");

li = Array.from(li);

const change = () => {
  li.forEach((item) => {
    console.log(item.innerText);
    if (item.innerText === "undefined") {
        item.innerText = "будет добавлено в будущем";
    }
  });
};

change();
  