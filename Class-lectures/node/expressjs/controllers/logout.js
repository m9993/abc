const express 	= require('express');
const router 	= express.Router();


router.get('/', (request, response)=>{
	response.redirect('/login');
});


module.exports = router;

