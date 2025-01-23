const express = require('express');
const multer = require('multer');
const {
  createBranch,
  getAllBranches,
  updateBranch,
  deleteBranch,
} = require('../controllers/branchController');

const router = express.Router();

// Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save in uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Add timestamp to filename
  },
});
const upload = multer({ storage });

// Routes
router.post('/createBranch', upload.single('branchLogo'), createBranch);
router.get('/getAllBranches', getAllBranches);
router.put('/updateBranch/:id', upload.single('branchLogo'), updateBranch);
router.delete('/deleteBranch/:id', deleteBranch);

module.exports = router;
