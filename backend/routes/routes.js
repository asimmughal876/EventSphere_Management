const router = require('express').Router();
const multer = require('multer');
const { addExpo, addUser, addCompony, signInUser, AssignBooth, addSpeaker, addExpoSchedule, registerExpoAttendee, registerExhiExop, addmessage, forgotPassword, verifyOtpController, resetPassword } = require('../controller/createController');
const { fetchExpos, fetchExhi, fetchUser, fetchCompany, fetchBooth, fetchBoothRequest, fetchAcceptExhi, fetchSpeaker, fetchExposUser, fetchExposSheduleUser, fetchExpoShedule, getTotalAttendeesPerExpo, fetchRegisteredExpos, fetchExpobookedbooth, fetchCount, fetchMessage, fetchAcceptedExhi } = require('../controller/fetchController');
const { addBooth, updateExhibitor, UpdateBoothRequestStatus, updateExpo, updateExpoShedule } = require('../controller/updateController');
const { deleteCompony, deleteExpo, deletebooth, deleteExpoShedule } = require('../controller/deleteController');
const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 10 * 1024 * 1024 
  }
});

router.post('/forgot-password', forgotPassword);
router.post('/verify-otp', verifyOtpController);
router.post('/reset-password', resetPassword);
router.post('/addExpos',upload.single('image'), addExpo);
router.post('/addBooth/:expo_id/booths', addBooth);
router.post('/registerExhiExop/:expo_id', registerExhiExop);
router.post('/signup',upload.single('image'), addUser);
router.post('/addCompany', upload.single('image'),addCompony);
router.post('/addSpeaker', upload.single('image'),addSpeaker);
router.post('/addExpoSchedule',addExpoSchedule);
router.get('/getExpos', fetchExpos);
router.get('/getExhi', fetchExhi);
router.get('/fetchAcceptedExhi', fetchAcceptedExhi);
router.get('/getValidExhi/:expoId', fetchAcceptExhi);
router.get('/getUser', fetchUser);
router.get('/fetchCount', fetchCount);
router.get('/getExpoShedule', fetchExpoShedule);
router.post('/getExposUser', fetchExposUser);
router.post('/getExposSheduleUser/:expo_id', fetchExposSheduleUser);
router.get('/getSpeaker', fetchSpeaker);
router.get('/getBoothRequest/:exhi_id', fetchBoothRequest);
router.get('/getBooth/:expo_id', fetchBooth);
router.get('/fetchExpobookedbooth/:expo_id', fetchExpobookedbooth);
router.get('/fetchRegisteredExpos/:userId', fetchRegisteredExpos);
router.post('/assignBooth/:expo_id/:booth_id', AssignBooth);
router.get('/getCompany', fetchCompany);
router.get('/fetchMessage/:user_id', fetchMessage);
router.get('/getTotalAttendeesPerExpo', getTotalAttendeesPerExpo);
router.post('/signin', signInUser);
router.post('/updateExhi/:exhibitor_id', updateExhibitor);
router.post('/UpdateBoothRequest/:expo_id/:booth_id/:exhibitor_id', UpdateBoothRequestStatus);
router.delete('/deleteCompany/:id', deleteCompony);
router.delete('/deleteExpo/:id', deleteExpo);
router.delete('/deleteExpoShedule/:id', deleteExpoShedule);
router.delete('/deletebooth/:_id/:booth_id', deletebooth);
router.put('/updateExpo/:id', upload.single('image'), updateExpo);
router.put('/updateExpoShedule/:id', updateExpoShedule);
router.post("/registerExpoAttendee", registerExpoAttendee);
router.post('/addmessage', addmessage); 

module.exports = router;