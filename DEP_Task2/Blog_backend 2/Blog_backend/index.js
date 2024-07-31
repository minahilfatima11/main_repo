const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Ensure uploads directory exists
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// In-memory storage for posts (you can use a database in a real app)
let posts = [];

app.post('/api/posts', upload.single('image'), (req, res) => {
  const { title, content } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;
  const newPost = { id: posts.length + 1, title, content, image };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.delete('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  posts = posts.filter(post => post.id != id);
  res.status(204).end();
});

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
