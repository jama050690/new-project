import express from "express";
import ejs from "ejs";
import { promises as fs } from "fs";

const app = express();
const PORT = 3000;

app.use("/lib", express.static("lib"));
app.use("/js", express.static("js"));
app.use("/css", express.static("css"));
app.use("/img", express.static("img"));

const dateTable = [
  {
    scope: 1,
    firstname: "Jamshiddin",
    lastname: "Babajonov",
    email: "jbm050690@gamil.com",
    country: "Uzbekiston",
    zip: 123,
    status: "member",
  },
  {
    scope: 1,
    firstname: "Tolmas",
    lastname: "O'rinov",
    email: "jbm050690@gamil.com",
    country: "Uzbekiston",
    zip: 456,
    status: "member",
  },
  {
    scope: 1,
    firstname: "Sardor",
    lastname: "Sunatillayev",
    email: "jbm050690@gamil.com",
    country: "Uzbekiston",
    zip: 789,
    status: "member",
  },
];

app.get("/index.html", async (req, res) => {
  const view = await fs.readFile("./src/index.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(home);
});
app.get("/404.html", async (req, res) => {
  const view = await fs.readFile(".//src/404.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(home);
});
app.get("/blank.html", async (req, res) => {
  const view = await fs.readFile("./src/blank.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(home);
});
app.get("/chart.html", async (req, res) => {
  const view = await fs.readFile("./src/chart.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(home);
});
app.get("/signin.html", async (req, res) => {
  const view = await fs.readFile("./src/signin.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(home);
});
app.get("/signup.html", async (req, res) => {
  const view = await fs.readFile("./src/signup.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(home);
});
app.get("/table.html", async (req, res) => {
  const view = await fs.readFile("./src/table.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
    table: dateTable,
  });
  res.send(home);
});
app.get("/widget.html", async (req, res) => {
  const view = await fs.readFile("./src/widget.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(home);
});
app.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});
