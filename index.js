import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: postData });
});

app.get("/post/:id", (req, res) => {
  const postId = Number(req.params.id);
  const post = postData.find((post) => post.id === postId);

  if (post) {
    res.render("post.ejs", { post: post });
  } else {
    res.render("post.ejs", { post: { title: "Post not found", body: "" } });
  }
});

app.post("/add-post", (req, res) => {
  const newPost = {
    id: postData.length + 1,
    title: req.body.title,
    body: req.body.body,
  };

  postData.push(newPost);
  res.redirect("/");
});

app.post("/edit-post/:id", (req, res) => {
  const postId = Number(req.body["post-id"]);
  const post = postData.find((post) => post.id === postId);
  post.body = req.body["post-body"];

  res.redirect(`/post/${postId}`);
});

app.post("/delete-post/:id", (req, res) => {
  const postId = Number(req.body["post-id"]);
  const postIndex = postData.findIndex((post) => post.id === postId);
  postData.splice(postIndex, 1);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

let postData = [
  {
    id: 1,
    title: "Wheels on the bus",
    body: "They go round and round",
  },
  {
    id: 2,
    title: "Twinkle twinkle, little star",
    body: "Many wonder what you are",
  },
  {
    id: 3,
    title: "If you're happy and you know it",
    body: "Please clap your hands",
  },
  {
    id: 4,
    title: "Baa baa black sheep",
    body: "Does it have any wool?",
  },
  {
    id: 5,
    title: "Itsy bitsy spider",
    body: "It climbed up the waterspout",
  },
];
