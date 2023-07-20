import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import App from "../src/App";
import axios from "axios";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  fs.readFile(path.resolve("./public/index.html"), "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("An error occurred");
    }

    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.data)
      .then((tasks) => {
        res.send(
          data.replace(
            '<div id="root"></div>',
            `<div id="root">${ReactDOMServer.renderToString(
              <App tasks={tasks} />
            )}</div>`
          )
        );
      })
      .catch((error) => console.error(error));
  });
});

app.use(
  express.static(path.resolve(__dirname, "..", "dist"), { maxAge: "30d" })
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
