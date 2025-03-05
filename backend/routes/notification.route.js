import express from 'express'
import { protectRoute } from '../middlewares/protectRoute.js'
import { deleteNotification, getNotifications } from '../controllers/notifications.controller.js';

const router = express.Router()

router.get('/',protectRoute, getNotifications);
router.delete("/", protectRoute, deleteNotification);

export default router