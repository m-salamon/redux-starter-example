import express from 'express-promise-router';
const router = express();
import * as db from '../repo';


router.get('/allcars', async (req, res) => {
    let cars = await db.cars.getAllCars();
    res.json(cars);
});


router.post('/addcar', async (req, res) => {
    let id = await db.cars.addCar(req.body);
    let car = await db.cars.getCarById(id[0]);
    res.json(car);
});


router.post('/editcar', async (req, res) => {
    await db.cars.editCar(req.body);
    let car = await db.cars.getCarById(req.body.id);
    res.json(car);
});

router.post('/deletecar', async (req, res) => {
    await db.cars.deleteCar(req.body.id);
    res.json({id: req.body.id});
});

export default router;





