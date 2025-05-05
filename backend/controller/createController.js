const Company = require('../model/Company');
const Exhibitor = require('../model/Exhibitor');
const Expo = require('../model/Expo');
const user = require('../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { mongoose } = require('mongoose');
const Speaker = require('../model/Speaker');
const ExpoSchedule = require('../model/ExpoSchedule');
const attendexpo = require('../model/attendexpo');
const chat = require('../model/chat');
const nodemailer = require('nodemailer');
require('dotenv').config();

const addExpo = async (req, res) => {
  try {
    const expoData = req.body;

    if (req.file) {
      const { buffer, mimetype } = req.file;
      const imageString = `data:${mimetype};base64,${buffer.toString("base64")}`;
      expoData.expo_image = imageString;
    }
    const newExpo = new Expo(expoData);
    const savedExpo = await newExpo.save();

    res.status(201).json({
      message: 'Expo created successfully',
      data: savedExpo
    });
  } catch (err) {
    console.error('Error creating expo:', err);
    res.status(500).json({
      message: 'Failed to create expo',
      error: err.message
    });
  }
};


const addUser = async (req, res) => {
  try {
    const userData = req.body;


    if (req.file) {
      const { buffer, mimetype } = req.file;
      const imageString = `data:${mimetype};base64,${buffer.toString("base64")}`;
      userData.user_image = imageString;
    }

    const newUser = new user(userData);
    const savedUser = await newUser.save();

    const EXHIBITOR_ROLE_ID = 2;
    const roleId = parseInt(userData.role_id);
    
    if (roleId === EXHIBITOR_ROLE_ID) {
      const newExhibitor = new Exhibitor({
        user_id: savedUser._id,
      });
      await newExhibitor.save();
    }
    
    res.status(201).json({
      message: 'User registered successfully',
      data: savedUser,
    });

  } catch (err) {
    console.error('Error Registering user:', err);
    res.status(500).json({
      message: 'Failed to register user',
      error: err.message,
    });
  }
};




const addCompony = async (req, res) => {
  try {
    const Data = req.body;

    if (req.file) {
      const { buffer, mimetype } = req.file;
      const imageString = `data:${mimetype};base64,${buffer.toString("base64")}`;
      Data.company_image = imageString;
    }

    const newCompany = new Company(Data);
    const savedCompany = await newCompany.save();

    res.status(201).json({
      message: 'Compony Added successfully',
      data: savedCompany
    });
  } catch (err) {
    console.error('Error Adding Company:', err);
    res.status(500).json({
      message: 'Failed to  Add request',
      error: err.message
    });
  }
};


const signInUser = async (req, res) => {
  try {
    const { user_email, user_pass } = req.body;

    console.log(req.body);
    
    const existingUser = await user.findOne({ user_email });
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(user_pass, existingUser.user_pass);
    console.log("Password match:", isPasswordValid);
    
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    let exhibitorData = null;

    if (existingUser.role_id === 2) {
      const exhibitor = await Exhibitor.findOne({ user_id: existingUser._id });

      if (!exhibitor) {
        return res.status(404).json({ message: 'Exhibitor profile not found' });
      }

      if (exhibitor.status === 'pending') {
        return res.status(401).json({ message: 'Your Exhibitor request is still pending' });
      }

      if (exhibitor.status === 'rejected') {
        return res.status(401).json({ message: 'Your Exhibitor request has been rejected' });
      }

      exhibitorData = {
        id: exhibitor._id,
        status: exhibitor.status
      };
    }

    const token = jwt.sign(
      {
        id: existingUser._id,
        email: existingUser.user_email,
        name: existingUser.user_name,
        image: existingUser.user_image,
        role: existingUser.role_id,
        exhibitor: exhibitorData
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'User signed in successfully',
      token,
    });

  } catch (err) {
    console.error('Sign-in error:', err);
    res.status(500).json({ message: 'Sign-in failed', error: err.message });
  }
};


const AssignBooth = async (req, res) => {
  try {
    const { expo_id, booth_id } = req.params;
    const { exhibitor_id } = req.body; 

    const expo = await Expo.findById(expo_id);
    if (!expo) {
      return res.status(404).json({ message: 'Expo not found' });
    }

    const booth = expo.booths.id(booth_id);
    if (!booth) {
      return res.status(404).json({ message: 'Booth not found' });
    }

    booth.assignment_requests.push({
      exhibitor_id,
      status: 'pending',
      requested_at: new Date()
    });

    await expo.save();

    return res.status(200).json({
      message: 'Assignment request added successfully',
      booth: booth
    });
  } catch (err) {
    console.error('Error Assigning Booth:', err);
    res.status(500).json({
      message: 'Failed to assign booth',
      error: err.message
    });
  }
};

const addSpeaker = async (req, res) => {
  try {
    const Data = req.body;

    if (req.file) {
      const { buffer, mimetype } = req.file;
      const imageString = `data:${mimetype};base64,${buffer.toString("base64")}`;
      Data.speaker__image = imageString;
    }
    const newSpeaker = new Speaker(Data);
    const savedSpeaker = await newSpeaker.save();

    res.status(201).json({
      message: 'Speaker created successfully',
      data: savedSpeaker
    });
  } catch (err) {
    console.error('Error creating Speaker:', err);
    res.status(500).json({
      message: 'Failed to create Speaker',
      error: err.message
    });
  }
};


const addExpoSchedule = async (req, res) => {
  try {
    const Data = req.body;

    const newExpoSchedule = new ExpoSchedule(Data);
    const savedExpoSchedule= await newExpoSchedule.save();

    res.status(201).json({
      message: 'Expo Schedule created successfully',
      data: savedExpoSchedule
    });
  } catch (err) {
    console.error('Error creating Expo Schedule:', err);
    res.status(500).json({
      message: 'Failed to create Expo Schedule',
      error: err.message
    });
  }
};
const registerExpoAttendee = async (req, res) => {
  try {
    const Data = req.body;

    const newAttendee = new attendexpo(Data);

    await newAttendee.save();

    res.status(201).json({
      message: 'Attendee registered successfully',
      data: newAttendee
    });
  } catch (err) {
    console.error('Error registering attendee:', err);
    res.status(500).json({
      message: 'Failed to register attendee',
      error: err.message
    });
  }
};

const registerExhiExop = async (req, res) => {
  try {
    const { expo_id } = req.params;
    const Data = req.body;

    const expo = await Expo.findById(expo_id);
    if (!expo) {
      return res.status(404).json({
        message: 'Expo not found'
      });
    }

    expo.exhibitors.push(Data); 
    const updatedExpo = await expo.save();

    res.status(201).json({
      message: 'Exhibitor Added to expo successfully',
      data: updatedExpo
    });
  } catch (err) {
    console.error('Error adding Exhibitor to expo:', err);
    res.status(500).json({
      message: 'Failed to add Exhibitor to expo',
      error: err.message
    });
  }
};

const addmessage = async (req, res) => {
  try {
    const data = req.body;
    const addMessage = new chat(data);
    const savedMessage = await addMessage.save();
    res.status(201).json({
      message: 'Message sent successfully',
      data: savedMessage
    });
  } catch (err) {
    console.error('Error sending message:', err);
    res.status(500).json({
      message: 'Failed to send message',
      error: err.message
    });
  }

}

const forgotPassword = async (req, res) => {
  try {
    const { user_email } = req.body;
    const existingUser = await user.findOne({ user_email });
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    existingUser.resetToken = otp;
    existingUser.resetTokenExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes
    await existingUser.save();

    console.log(existingUser);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      to: user_email,
      subject: 'Your Password Reset OTP Code',
      html: `<p>Your 6-digit password reset code is <b>${otp}</b>. It will expire in 10 minutes.</p>`,
    });

    res.json({ message: 'OTP sent to email' });

  } catch (err) {
    console.error('Forgot password error:', err);
    res.status(500).json({ message: 'Failed to send OTP', error: err.message });
  }
};


const resetPassword = async (req, res) => {
  try {
    const { user_email, otpCode, newPassword } = req.body;

    console.log(req.body);
    
    const existingUser = await user.findOne({
      user_email,
      resetToken: otpCode
    });

    if (!existingUser) {
      return res.status(400).json({ message: 'Invalid or expired OTP code' });
    }

    existingUser.user_pass = newPassword;
    existingUser.resetToken = null;
    existingUser.resetTokenExpiry = null;
    await existingUser.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      to: existingUser.user_email,
      subject: 'Password Reset Successful',
      html: `<p>Your password has been successfully reset.</p>`,
    });

    res.json({ message: 'Password reset successful' });

  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: 'Invalid or expired token' });
  }
};


const verifyOtpController = async (req, res) => {
  const { otp, user_email } = req.body;

  try {
    console.log(req.body);
    
    const u = await user.findOne({
      user_email,
      resetToken: otp
    });

    if (!u) {
      return res.status(400).json({ success: false, message: 'Invalid or expired OTP' });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = {forgotPassword,resetPassword,verifyOtpController,addmessage, addExpo, addUser,addCompony, signInUser,AssignBooth,addSpeaker,addExpoSchedule,registerExpoAttendee,registerExhiExop };
