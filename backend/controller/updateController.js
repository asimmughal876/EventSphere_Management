const Exhibitor = require('../model/Exhibitor');
const Expo = require('../model/Expo');
const ExpoSchedule = require('../model/ExpoSchedule');

// Add Booth to Expo
const addBooth = async (req, res) => {
  try {
    const { expo_id } = req.params;
    const boothData = req.body;

    const expo = await Expo.findById(expo_id);
    if (!expo) {
      return res.status(404).json({
        message: 'Expo not found'
      });
    }

    expo.booths.push(boothData);  // Add booth data to the expo's booths array
    const updatedExpo = await expo.save();

    res.status(201).json({
      message: 'Booth added to expo successfully',
      data: updatedExpo
    });
  } catch (err) {
    console.error('Error adding booth to expo:', err);
    res.status(500).json({
      message: 'Failed to add booth to expo',
      error: err.message
    });
  }
};


const updateExhibitor = async (req, res) => {
  try {
    const { exhibitor_id } = req.params;
    const { status } = req.body;

    const validStatuses = ['pending', 'accepted', 'rejected'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const updatedExhibitor = await Exhibitor.findByIdAndUpdate(
      exhibitor_id,
      { status },
      { new: true }
    );

    if (!updatedExhibitor) {
      return res.status(404).json({
        message: 'Exhibitor not found'
      });
    }

    res.status(200).json({
      message: 'Exhibitor status updated successfully',
      data: updatedExhibitor
    });
  } catch (err) {
    console.error('Error updating exhibitor:', err);
    res.status(500).json({
      message: 'Failed to update exhibitor',
      error: err.message
    });
  }
};

// Update Booth Request Status
const UpdateBoothRequestStatus = async (req, res) => {
  try {
    const { expo_id, booth_id, exhibitor_id } = req.params;
    const { status } = req.body;

    const expo = await Expo.findById(expo_id);
    if (!expo) {
      return res.status(404).json({ message: 'Expo not found' });
    }

    const booth = expo.booths.id(booth_id);
    if (!booth) {
      return res.status(404).json({ message: 'Booth not found' });
    }

    const request = booth.assignment_requests.find(
      (req) => req.exhibitor_id.toString() === exhibitor_id
    );
    
    if (!request) {
      return res.status(404).json({ message: 'Assignment request not found for this exhibitor' });
    }
    
    booth.status = "booked";
    booth.assigned_to = exhibitor_id;
    request.status = status;

    await expo.save();

    return res.status(200).json({
      message: 'Assignment request status updated successfully',
      updatedRequest: request
    });
  } catch (err) {
    console.error('Error Updating Request Status:', err);
    res.status(500).json({
      message: 'Failed to update request status',
      error: err.message
    });
  }
};
const updateExpo = async (req, res) => {
  const expoId = req.params.id;
  const updateData = { ...req.body };

  delete updateData.booths;

  try {
    if (req.file) {
      const { buffer, mimetype } = req.file;
      const imageString = `data:${mimetype};base64,${buffer.toString("base64")}`;
      updateData.expo_image = imageString;
    }

    const expo = await Expo.findByIdAndUpdate(expoId, updateData, { new: true });

    if (expo) {
      res.status(200).json({ message: 'Expo updated successfully', data: expo });
    } else {
      res.status(404).json({ message: 'Expo not found' });
    }
  } catch (err) {
    console.error('Error updating expo:', err);
    res.status(500).json({ message: 'Error updating expo', error: err.message });
  }
};

const updateExpoShedule = async (req, res) => {
  const _id = req.params.id;
  const updateData = req.body;

  try {
    const expo = await ExpoSchedule.findByIdAndUpdate(_id, updateData, { new: true });
  
  
      if (expo) {
        res.status(200).json({ message: 'Expo schedule updated successfully', data: expo });
      } else {
        res.status(404).json({ message: 'Expo schedule not found' });
      }
    }
  catch (err) {
    console.error('Error updating expo schedule:', err);
    res.status(500).json({ message: 'Error updating expo schedule', error: err.message });
  }
}
module.exports = { addBooth, updateExhibitor, UpdateBoothRequestStatus, updateExpo,updateExpoShedule };
