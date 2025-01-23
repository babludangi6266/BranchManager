const Branch = require('../models/branchModel');
const fs = require('fs');
// Create Branch
const createBranch = async (req, res) => {
    try {
      const { branchName, branchLocation } = req.body;
      let branchLogo = null;
  
      if (req.file) {
        const imageBuffer = fs.readFileSync(req.file.path);
        branchLogo = imageBuffer.toString('base64');
        fs.unlinkSync(req.file.path); // Delete the file after encoding
      }
  
      const newBranch = new Branch({ branchName, branchLocation, branchLogo });
      await newBranch.save();
  
      res.status(201).json({ message: 'Branch created successfully', branch: newBranch });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create branch' });
    }
  };
// Get All Branches
const getAllBranches = async (req, res) => {
  try {
    const branches = await Branch.find();
    res.status(200).json(branches);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch branches' });
  }
};

// Update Branch
const updateBranch = async (req, res) => {
    try {
      const { id } = req.params;
      const { branchName, branchLocation } = req.body;
      let branchLogo = undefined;
  
      if (req.file) {
        const imageBuffer = fs.readFileSync(req.file.path);
        branchLogo = imageBuffer.toString('base64');
        fs.unlinkSync(req.file.path); // Delete the file after encoding
      }
  
      const updatedBranch = await Branch.findByIdAndUpdate(
        id,
        { branchName, branchLocation, ...(branchLogo && { branchLogo }) },
        { new: true }
      );
  
      res.status(200).json({ message: 'Branch updated successfully', branch: updatedBranch });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update branch' });
    }
  };
// Delete Branch
const deleteBranch = async (req, res) => {
  try {
    const { id } = req.params;
    await Branch.findByIdAndDelete(id);
    res.status(200).json({ message: 'Branch deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete branch' });
  }
};

module.exports = {
  createBranch,
  getAllBranches,
  updateBranch,
  deleteBranch,
};
