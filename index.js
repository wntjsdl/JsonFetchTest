// https://jsonplaceholder.typicode.com/todos
// https://api.github.com/users/minsangkimme

(async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await res.json();
    json.map(e => {
      div = document.createElement("div");
      div.className = "row border";
      div.style.backgroundColor = "yellow";
      document.querySelector("#root").appendChild(div);
      div1 = document.createElement("div");
      div1.className = "col-1 border";
      div1.textContent = "userId";
      div.appendChild(div1);
      div2 = document.createElement("div");
      div2.className = "col-8 border";
      div2.textContent = e.userId;
      div.appendChild(div2);
      div3 = document.createElement("div");
      div3.className = "col-2 border";
      div3.textContent = "id";
      div.appendChild(div3);
      div4 = document.createElement("div");
      div4.className = "col-1 border";
      div4.textContent = e.id;
      div.appendChild(div4);
      div5 = document.createElement("div");
      div5.className = "row border";
      div5.style.marginBottom = "20px";
      div5.style.backgroundColor = "yellow";
      document.querySelector("#root").appendChild(div5);
      div6 = document.createElement("div");
      div6.className = "col-1 border";
      div6.textContent = "title";
      div5.appendChild(div6);
      div7 = document.createElement("div");
      div7.className = "col-8 border";
      div7.textContent = e.title;
      div5.appendChild(div7);
      div8 = document.createElement("div");
      div8.className = "col-2 border";
      div8.textContent = "completed";
      div5.appendChild(div8);
      div9 = document.createElement("div");
      div9.className = "col-1 border";
      div9.textContent = e.completed;
      div5.appendChild(div9);
    });
  } catch (error) {
    console.error(err);
  }
})();
