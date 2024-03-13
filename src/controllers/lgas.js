const axios = require('axios')


exports.getLgasInState = async (req, res) => {
    try {
        const stateCode= req.params.state
        const response = await axios.get(`https://nigeria-states-towns-lga.onrender.com/api/${stateCode}/lgas`)
        const lgas = response.data; // Extract the data property
        res.json(lgas); // Send the extracted data
        console.log(lgas)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
