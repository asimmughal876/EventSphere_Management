const attendexpo = require('../model/attendexpo');
const chat = require('../model/chat');
const Company = require('../model/Company');
const Exhibitor = require('../model/Exhibitor');
const Expo = require('../model/Expo');
const ExpoSchedule = require('../model/ExpoSchedule');
const Speaker = require('../model/Speaker');
const user = require('../model/user');

const fetchExpos = async (req, res) => {
  try {

    const expoData = await Expo.find();

    res.status(201).json({
      message: 'Expo Fetch successfully',
      data: expoData
    });
  } catch (err) {
    console.error('Error Fetching expo:', err);
    res.status(500).json({
      message: 'Failed to Fetch expo',
      error: err.message
    });
  }
};

const fetchExposUser = async (req, res) => {
  try {
    const { userId } = req.body;

    const allExpos = await Expo.find();

    const registered = await attendexpo.find({ user_id: userId }).select('expo_id');
    const registeredIds = registered.map(r => r.expo_id.toString());

    const exposWithStatus = allExpos.map((expo) => ({
      ...expo._doc,
      already_registered: registeredIds.includes(expo._id.toString())
    }));

    res.status(200).json({
      message: 'Expos fetched successfully',
      data: exposWithStatus
    });
  } catch (err) {
    console.error('Error fetching expos:', err);
    res.status(500).json({
      message: 'Failed to fetch expos',
      error: err.message
    });
  }
};


const fetchExposSheduleUser = async (req, res) => {
  const { expo_id } = req.params;
  const { user_id } = req.body;

  try {
    const schedules = await ExpoSchedule.find({ expo_id })
      .populate("expo_id", "title")
      .populate("speaker_id", "speaker_name");

    if (!schedules || schedules.length === 0) {
      return res.status(404).json({
        message: 'No schedule found for this expo'
      });
    }

    const userRegistrations = await attendexpo.find({
      expo_id,
      user_id,
      session_id: { $ne: null }
    }).select("session_id");

    const registeredSessionIds = userRegistrations.map(r => r.session_id?.toString());

    const result = schedules.map(schedule => ({
      ...schedule._doc,
      already_registered: registeredSessionIds.includes(schedule._id.toString())
    }));

    res.status(200).json({
      message: 'Schedule fetched successfully',
      data: result
    });
  } catch (err) {
    console.error('Error fetching schedule:', err);
    res.status(500).json({
      message: 'Failed to fetch schedule',
      error: err.message
    });
  }
};


const fetchExpoShedule = async (req, res) => {
  try {

    const expoData = await ExpoSchedule.find().populate("expo_id", "title").populate("speaker_id", "speaker_name");

    res.status(201).json({
      message: 'Expo Shedule Fetch successfully',
      data: expoData
    });
  } catch (err) {
    console.error('Error Fetching expo Shedule:', err);
    res.status(500).json({
      message: 'Failed to Fetch expo Shedule',
      error: err.message
    });
  }
};


const fetchUser = async (req, res) => {
  try {

    const userData = await user.find();

    res.status(201).json({
      message: 'User Fetch successfully',
      data: userData
    });
  } catch (err) {
    console.error('Error Fetching user:', err);
    res.status(500).json({
      message: 'Failed to Fetch user',
      error: err.message
    });
  }
};
const fetchExhi = async (req, res) => {
  try {
    const ExhiData = await Exhibitor.find({ status: "pending" }).populate('user_id', 'user_name user_email user_image created_at');
    res.status(200).json({
      message: 'Exhibitor fetched successfully',
      data: ExhiData
    });
  } catch (err) {
    console.error('Error Fetching Exhibitor:', err);
    res.status(500).json({
      message: 'Failed to fetch Exhibitor',
      error: err.message
    });
  }
};
const fetchAcceptExhi = async (req, res) => {
  try {
    const { expoId } = req.params;
    const expos = await Expo.find({ _id: expoId }).populate({
      path: 'exhibitors.exhibitor_id',
      populate: {
        path: 'user_id',
        model: 'User',
        select: 'user_name'
      }
    });

    const userData = expos.flatMap(expo =>
      expo.exhibitors
        .filter(e => e.exhibitor_id && e.exhibitor_id.user_id)
        .map(e => ({
          _id: e.exhibitor_id._id,
          user_name: e.exhibitor_id.user_id.user_name
        }))
    );


    return res.status(200).json({
      message: 'User data fetched successfully',
      data: userData
    });

  } catch (err) {
    console.error('Error Fetching Exhibitor:', err);
    return res.status(500).json({
      message: 'Failed to fetch Exhibitor',
      error: err.message
    });
  }
};
const fetchAcceptedExhi = async (req, res) => {
  try {
    const Exhi = await Exhibitor.find({ status: "accepted" }).populate('user_id', 'user_name user_email user_image created_at');
  

    return res.status(200).json({
      message: 'User data fetched successfully',
      data: Exhi
    });

  } catch (err) {
    console.error('Error Fetching Exhibitor:', err);
    return res.status(500).json({
      message: 'Failed to fetch Exhibitor',
      error: err.message
    });
  }
};
const fetchCompany = async (req, res) => {
  try {
    const comData = await Company.find()
      .populate({
        path: 'exhibitor_id',
        populate: {
          path: 'user_id',
          model: 'User',
          select: 'user_name'
        }
      });

    res.status(200).json({
      message: 'Company fetched successfully',
      data: comData
    });
  } catch (err) {
    console.error('Error Fetching Company:', err);
    res.status(500).json({
      message: 'Failed to fetch company',
      error: err.message
    });
  }
};

const fetchBooth = async (req, res) => {
  try {
    const { expo_id } = req.params;

    const expo = await Expo.findById(expo_id).select('booths _id');

    if (!expo) {
      return res.status(404).json({
        message: 'Expo not found'
      });
    }

    res.status(200).json({
      message: 'Filtered booths fetched successfully',
      data: expo
    });
  } catch (err) {
    console.error('Error Fetching Booth:', err);
    res.status(500).json({
      message: 'Failed to fetch booths',
      error: err.message
    });
  }
};


const fetchBoothRequest = async (req, res) => {
  try {
    const { exhi_id } = req.params;

    const expos = await Expo.find({
      'booths.assignment_requests': {
        $elemMatch: {
          exhibitor_id: exhi_id,
          status: 'pending'
        }
      }
    }).select("booths title start_date end_date");

    res.status(200).json({
      message: 'Pending booth assignment requests fetched successfully',
      data: expos
    });

  } catch (err) {
    console.error('Error fetching booth assignment requests:', err);
    res.status(500).json({
      message: 'Failed to fetch booth assignment requests',
      error: err.message
    });
  }
};

const fetchSpeaker = async (req, res) => {
  try {

    const Data = await Speaker.find();

    res.status(201).json({
      message: 'Speaker Fetch successfully',
      data: Data
    });
  } catch (err) {
    console.error('Error Fetching Speaker:', err);
    res.status(500).json({
      message: 'Failed to Fetch Speaker',
      error: err.message
    });
  }
};

const getTotalAttendeesPerExpo = async (req, res) => {
  try {
    const result = await attendexpo.aggregate([
      {
        $group: {
          _id: "$expo_id",
          totalAttendees: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: "expos",
          localField: "_id",
          foreignField: "_id",
          as: "expoDetails"
        }
      },
      {
        $unwind: "$expoDetails"
      },
      {
        $project: {
          _id: 0,
          expoId: "$expoDetails._id",
          expoTitle: "$expoDetails.title",
          totalAttendees: 1
        }
      }
    ]);

    return res.json({ data: result, message: "Total Attendees Per Expo" })
  } catch (err) {
    console.error("Error getting total attendees per expo:", err);
    return res.status(500).json({ message: "Error getting total attendees per expo", error: err.message });
  }
};
const fetchRegisteredExpos = async (req, res) => {
  try {
    const { userId } = req.params;

    const expos = await Expo.find().populate('exhibitors.exhibitor_id');

    if (expos.length === 0) {
      return res.status(404).json({
        message: 'No expos found',
      });
    }

    const result = expos.map(expo => {
      const exhibitorList = Array.isArray(expo.exhibitors) ? expo.exhibitors : [];

      const isRegistered = exhibitorList.some(e =>
        e.exhibitor_id && e.exhibitor_id._id == userId
      );

      return {
        _id: expo._id,
        title: expo.title,
        location: expo.location,
        start_date: expo.start_date,
        end_date: expo.end_date,
        expo_image: expo.expo_image,
        status: expo.status,
        exhibitor_id: exhibitorList.map(e => e.exhibitor_id),
        alreadyRegistered: isRegistered
      };
    });

    return res.status(200).json({
      message: 'Expos fetched successfully',
      data: result
    });

  } catch (err) {
    console.error('Error fetching expos:', err);
    res.status(500).json({
      message: 'Failed to fetch expos',
      error: err.message
    });
  }
};
const fetchExpobookedbooth = async (req, res) => {
  try {
    const { expo_id } = req.params;
    console.log(expo_id);
    
    if (!expo_id) {
      return res.status(400).json({ message: 'expo_id is required' });
    }
    

    
    const expo = await Expo.findById(expo_id).populate({
      path: 'booths.assigned_to',
      populate: {
        path: 'user_id',
        model: 'User',
        select: 'user_name'
      },
    });

    if (!expo) {
      return res.status(404).json({
        message: 'Expo not found'
      });
    }

    const bookedBooths = expo.booths
      .filter(booth => booth.status === 'booked')
      .map(booth => ({
        booth_number: booth.booth_number,
        size: booth.size,
        floor: booth.floor,
        coordinates: booth.coordinates,
        assigned_to: booth.assigned_to ? booth.assigned_to.user_id.user_name : null,
        status: booth.status,
        exhi_id: booth.assigned_to ? booth.assigned_to.user_id._id : null,
      }));

    if (bookedBooths.length === 0) {
      return res.status(404).json({
        message: 'No booked booths found for this expo'
      });
    }

    res.status(200).json({
      message: 'Booked booths fetched successfully',
      data: bookedBooths
    });

  } catch (err) {
    console.error('Error Fetching booked booth:', err);
    res.status(500).json({
      message: 'Failed to fetch booked booth',
      error: err.message
    });
  }
};

const fetchCount = async (req, res) => {
  try {
    const expoCount = await Expo.countDocuments();
    const exhibitorCount = await Exhibitor.countDocuments({ status: "accepted" });
    const userCount = await user.countDocuments({ role_id: 3 }); // Changed from user to User
    const scheduleCount = await ExpoSchedule.countDocuments();
    const speakerCount = await Speaker.countDocuments();
    const companyCount = await Company.countDocuments();
    const attendeeCount = await attendexpo.countDocuments();

    res.status(200).json({
      message: 'Count fetched successfully',
      data: {
        expo: expoCount,
        exhibitors: exhibitorCount,
        users: userCount,
        schedules: scheduleCount,
        speakers: speakerCount,
        companies: companyCount,
        attendee: attendeeCount,
      }
    });
  } catch (err) {
    console.error('Error Fetching Count:', err);
    res.status(500).json({
      message: 'Failed to Fetch Count',
      error: err.message
    });
  }
};
const fetchMessage = async (req, res) => {
  try {
    const { user_id } = req.params;

    const messages = await chat.find({
      $or: [
        { sender: user_id },
        { reciever: user_id }
      ]
    }).populate('sender reciever');
    return res.status(200).json({
      message: 'Messages fetched successfully',
      data: messages
    });

  } catch (err) {
    console.error('Error Fetching Message:', err);
    res.status(500).json({
      message: 'Failed to Fetch Message',
      error: err.message
    });
  }
};


module.exports = {fetchAcceptedExhi,fetchMessage,fetchCount, fetchExpobookedbooth, getTotalAttendeesPerExpo, fetchExpos, fetchUser, fetchExhi, fetchCompany, fetchBooth, fetchBoothRequest, fetchAcceptExhi, fetchSpeaker, fetchExpoShedule, fetchExposUser, fetchExposSheduleUser, fetchRegisteredExpos };
