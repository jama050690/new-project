import express from "express";
import ejs from "ejs";
import { promises as fs } from "fs";

const app = express();
const PORT = 3000;

app.use("/lib", express.static("lib"));
app.use("/img", express.static("img"));
app.use("/css", express.static("css"));
app.use("/js", express.static("js"));

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
  const view = await fs.readFile("./index.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(home);
});
app.get("/404.html", async (req, res) => {
  const view = await fs.readFile("./404.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(home);
});
app.get("/blank.html", async (req, res) => {
  const view = await fs.readFile("./blank.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(home);
});
app.get("/chart.html", async (req, res) => {
  const view = await fs.readFile("./chart.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(home);
});
app.get("/signin.html", async (req, res) => {
  const view = await fs.readFile("./signin.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(home);
});
app.get("/signup.html", async (req, res) => {
  const view = await fs.readFile("./signup.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(home);
});
app.get("/table.html", async (req, res) => {
  const view = await fs.readFile("./table.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
    table: dateTable,
  });
  res.send(home);
});
app.get("/widget.html", async (req, res) => {
  const view = await fs.readFile("./widget.html", "utf8");
  const home = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(home);
});
app.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});
