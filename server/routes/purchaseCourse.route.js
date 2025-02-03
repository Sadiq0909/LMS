import express from 'express';
import { createCheckoutSession } from '../controllers/purchaseCourse.controller';
import isAuthenticated from '../middlewares/isAuthenticated';
import { stripeWebhook } from '../controllers/coursePurchase.controller';

const router = express.Router();

router.route("checkout/create-checkout-session").post(isAuthenticated, createCheckoutSession);
router.route("/webhook").post(express.raw({type: 'application/json'}), stripeWebhook);
router.route("/course/:courseId/detail-with-status").get(); 
router.route("/").get() ; 

export default router; 