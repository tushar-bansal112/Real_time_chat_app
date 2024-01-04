import express from "express";
import { config } from "dotenv";
config();
import mongoose from "mongoose";
import cors from "cors";
import OpenAI from "openai";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { User } from "./model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
const PORT = process.env.PORT || 8080;

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

const server = createServer(app);

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: 3000,
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");

  socket.on("new message", (newMessage) => {
    async function OpenAITextCompletion() {
      console.log("Question received!");
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: newMessage }],
        model: "gpt-3.5-turbo",
      });
      console.log("Replied!");
      socket.emit("reply", completion.choices[0].message.content);
    }
    OpenAITextCompletion();
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});

app.use(express.json());
app.use(cors({ origin: true }));

mongoose
  .connect(process.env.MONGO_KEY)
  .then(() => {
    console.log("Connected to database...");
  })
  .catch((err) => {
    console.log(err);
  });

// Login
app.post("/api/login", async (req, res) => {
  // Our login logic starts here

  // console.log(req.body);
  // return res.status(200);
  try {
    // Get user input
    // const data = JSON.parse(req.body); // change accoringly
    const data = req.body;
    const { email, password } = data;

    var user = await User.findOne({ email });
    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    if (user === null) {
      //Encrypt user password
      var encryptedPassword = await bcrypt.hash(password, 10);

      // Create user in our database
      user = await User.create({
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
      });
    }

    console.log("user " + user);
    const id = user._id;
    console.log(id);

    if (await bcrypt.compare(password, user.password)) {
      // Create token
      // const token_key = "abcdefgh";
      const token = jwt.sign({ email }, process.env.TOKEN_KEY, {
        expiresIn: "2h",
      });
      // save user token
      user.token = token;
      if (typeof window !== "undefined") {
        localStorage.setItem("token", token);
      }

      // user
      return res.status(200).json(user);
    } else {
      return res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("err");
  }
});
app.get("/api/logout", async () => {
  localStorage.setItem("token", null);
  return res.status(200);
});
// login/register logic end

server.listen(PORT, () => {
  console.log("Server is running...");
});
