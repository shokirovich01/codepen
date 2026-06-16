const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const output = document.getElementById("output");

// Load saved code
html.value = localStorage.getItem("html") || "<h1>Salom Ustoz 😎</h1>";
css.value = localStorage.getItem("css") || "h1{color:red;text-align:center;}";
js.value = localStorage.getItem("js") || "console.log('Hello')";

// Run code
function run() {
  const doc = output.contentDocument;

  doc.open();
  doc.write(
    html.value +
    "<style>" + css.value + "</style>" +
    "<script>" + js.value + "<\/script>"
  );
  doc.close();

  // save
  localStorage.setItem("html", html.value);
  localStorage.setItem("css", css.value);
  localStorage.setItem("js", js.value);
}

// Auto run
[html, css, js].forEach(el => {
  el.addEventListener("input", run);
});

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light");
}

// first run
run();
