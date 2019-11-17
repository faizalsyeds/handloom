const express 	= 	require('express');

const router 	= 	express.Router();

router.get('/api/customers', (req, res) => {
    console.log(`request in`);
    const customers = [
            {
                "id" : 1,
            "name" : "Cristy",
            "role" : "MERN Stack Engineer",
            "place" : "Mannargudi",
        }, {
            "id" : 2,
            "name" : "Kesavan",
            "role" : "Software Engineer",
            "place" : "Tiruvallur",
        },{
            "id" : 3,
            "name" : "Faizal",
            "role" : "Senior Full Stack Developer",
            "place" : "Chennai",
        }
    ];
    res.json(customers);
});

module.exports = router;
