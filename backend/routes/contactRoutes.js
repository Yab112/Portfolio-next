import  express from 'express';
import   {submitContactForm, sendEmail }  from '../controllers/contactController.js';

const router = express.Router();

router.post('/contact', submitContactForm);
router.post('/sendemail',sendEmail)

export default router;
