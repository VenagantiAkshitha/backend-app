// routes/orderRoutes.js

import express from "express";
import { 
    getOrders,
    getAddOrder,
    postAddOrder,
    deleteOrder
} from "../controllers/orderController.js";

const router = express.Router();

// Show all orders
router.get("/orders", getOrders);

// // Show add order form
// router.get("/orders/add", getAddOrder);

// // Create new order
// router.post("/orders/add", postAddOrder);

// // Delete order
// router.get("/orders/:id/delete", deleteOrder);

export default router;