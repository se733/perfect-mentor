const router = require('express').Router();

router.post('/register', async (req, res) => {
    res.json({
        error: null,
        data: 'data del registro'
    })
})

module.exports = router;