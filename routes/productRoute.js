import { getProducts,addProduct,addProductForm,editProductForm,saveProduct,deleteProducts} from "../controllers/productController.js";
import express from "express"
const productRouter = express.Router();
productRouter.get("/",getProducts);
productRouter.post("/add",addProduct);
productRouter.get("/add",addProductForm);
productRouter.get("/:id/delete",deleteProducts);
productRouter.get("/:id/edit",editProductForm);
productRouter.post("/:id/save",saveProduct);

export default productRouter;