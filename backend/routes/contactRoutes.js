import  express from'express';

const router = express.Router();
import  submitContactForm  from '../controllers/contactController';

// POST route to handle form submission
router.post('/contact', submitContactForm);

module.exports = router;
