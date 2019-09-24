var express = require('express');
var axios = require('axios');
var router = express.Router();

router.get('/', async function(req, res) {
      const data = await axios.get(`https://621376332357926:8YoIpbDFipKpHfd54S56Y2Ou0Lg@api.cloudinary.com/v1_1/dzlcsebfz/resources/image`);
      res.send(data.data);
    });



module.exports = router;
