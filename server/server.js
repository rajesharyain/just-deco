const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//submit-google-form
app.post('/api/google-form', async(req, res) => {
    const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfzQt8lxIBI4iITbaGqaJi41nag6ALW0rn-ySWbJVpzO2Wl7g/formResponse'; 
  
    const formData = req.body;
    const body = new URLSearchParams();
    body.set('entry.589739086', formData.name); // Replace with your Google Form entry IDs
    body.set('entry.55626465', formData.email);
    body.set('entry.1433355813', formData.phone);
    body.set('entry.787296179', formData.enquiry);

    try{
        const response = await axios.post(googleFormUrl, body.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
        });
        if (response.status === 200) {
            res.status(200).send({ message: 'Form submitted successfully' });
        } else {
        res.status(response.status).send({ message: 'Error submitting form to Google' });
        }
    }catch(error) {
        console.log(error);
        res.status(500).send({ message: 'Server error', error: error.message });
    }
})

app.get('/api/info', (req, res) => {
   return res.send("Service is okay!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})