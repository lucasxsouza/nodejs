const {Router} = require('express');
const {query} = require('../database');


const router = Router();

router.get('/cows', async (req, res) => {
    const rows = query('SELECT * FROM cows;');
    res.json(rows);
  });
router.get('/api/cows/create',(req, res) => {
    });

module.exports = router;