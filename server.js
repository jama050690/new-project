import express from "express";
import ejs from "ejs";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3001;

// ================= ESM __dirname =================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ================= STATIC =================
app.use("/lib", express.static(path.join(__dirname, "lib")));
app.use("/js", express.static(path.join(__dirname, "js")));
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/img", express.static(path.join(__dirname, "img")));

// ================= DATA =================
const dateTable = [
  {
    scope: 1,
    firstname: "Jamshiddin",
    lastname: "Babajonov",
    email: "jbm050690@gmail.com",
    country: "Uzbekiston",
    zip: 123,
    status: "member",
  },
  {
    scope: 2,
    firstname: "Tolmas",
    lastname: "O'rinov",
    email: "tolmas@gmail.com",
    country: "Uzbekiston",
    zip: 456,
    status: "member",
  },
];

// ================= HELPER =================
async function render(res, file, data = {}) {
  const view = await fs.readFile(path.join(__dirname, "src", file), "utf8");

  res.send(
    ejs.render(view, {
      projectName: "My Project",
      userName: "Jamshiddin",
      ...data,
    })
  );
}

// ================= ROUTES =================

app.get("/", async (req, res) => {
  await render(res, "index.html");
});

app.get("/signup", async (req, res) => {
  await render(res, "signup.html");
});

app.get("/signin", async (req, res) => {
  await render(res, "signin.html");
});

app.get("/blank", async (req, res) => {
  await render(res, "blank.html");
});

app.get("/chart", async (req, res) => {
  await render(res, "chart.html");
});

app.get("/widget", async (req, res) => {
  await render(res, "widget.html");
});

app.get("/table", async (req, res) => {
  await render(res, "table.html", {
    table: dateTable,
  });
});

// ================= 404 =================
app.use(async (req, res) => {
  await render(res, "404.html");
});

// ================= START =================
app.listen(PORT, () => {
  console.log(` HTML+EJS server running: http://localhost:${PORT}`);
});
