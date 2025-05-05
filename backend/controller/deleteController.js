const Company = require("../model/Company");
const Expo = require("../model/Expo");
const ExpoSchedule = require("../model/ExpoSchedule");

const deleteCompony = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedCompany = await Company.findByIdAndDelete(id);
  
      if (!deletedCompany) {
        return res.status(404).json({ message: "Company not found" });
      }
  
      return res.status(200).json({ message: "Company deleted successfully" });
    } catch (error) {
      console.error("Delete Company Error:", error);
      return res.status(500).json({ message: "Failed to delete company", error: error.message });
    }
  };
  
  const deleteExpo = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedExpo = await Expo.findByIdAndDelete(id);
  
      if (!deletedExpo) {
        return res.status(404).json({ message: "Expo not found" });
      }
  
      return res.status(200).json({ message: "Expo deleted successfully" });
    } catch (error) {
      console.error("Delete Expo Error:", error);
      return res.status(500).json({ message: "Failed to delete Expo", error: error.message });
    }
  };

  const deletebooth = async (req, res) => {
    try {
      const { _id, booth_id } = req.params;
  
      
      const expo = await Expo.findById(_id);
      console.log(expo);
      
      if (!expo) {
        return res.status(404).json({ message: 'Expo not found' });
      }
  
      const boothIndex = expo.booths.findIndex(booth => booth._id.toString() === booth_id);
      if (boothIndex === -1) {
        return res.status(404).json({ message: 'Booth not found in this expo' });
      }
  
      expo.booths.splice(boothIndex, 1);
  
      await expo.save();
  
      res.status(200).json({
        message: 'Booth deleted successfully'
      });
  
    } catch (err) {
      console.error('Error deleting booth:', err);
      res.status(500).json({
        message: 'Failed to delete booth',
        error: err.message
      });
    }
  };
  
  const deleteExpoShedule = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedExpo = await ExpoSchedule.findByIdAndDelete(id);
  
      if (!deletedExpo) {
        return res.status(404).json({ message: "Expo Shedule not found" });
      }
  
      return res.status(200).json({ message: "Expo Shedule deleted successfully" });
    } catch (error) {
      console.error("Delete Expo Error:", error);
      return res.status(500).json({ message: "Failed to delete Expo Shedule", error: error.message });
    }
  };
  module.exports = { deleteCompony , deleteExpo,deletebooth,deleteExpoShedule};
