import { Router } from "express";

const router = Router();


router.get('/', (req, res) => {
  res.json({message: "apae-api by Caique Araújo."})
})

router.get('/sambiquira', (req, res) => {
  res.json({save: "Um salve a todos do sambiquira, enois"})
});

router.get('/corno', (req, res) => {
  res.json({save: "um grande salve à todos os amigos chifrudos!"})
});




export { router as defaultRoutes };