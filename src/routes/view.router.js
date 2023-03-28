import { Router } from "express";
import productManager from "../service/productManager.js"


const products = new productManager()
const router = Router();

router.get('/',  async (req, res) => {
    const list = await products.getProducts()
    res.render('home', {products: list})
})

router.get('/realtimeproducts', (req, res) => {
    res.render('realtimeproducts', {})
})

export default router;