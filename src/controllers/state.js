const axios = require('axios')

exports.getStates = async (req, res) => {
    try {
        const response = await axios.get('https://nigeria-states-towns-lga.onrender.com/api/states')
        const states = response.data; // Extract the data property
        res.json(states); // Send the extracted data
        console.log(states)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


exports.getState = async (req, res) => {
    try {
        const stateCode = req.query.code
        const response = await axios.get('https://nigeria-states-towns-lga.onrender.com/api/states')
        const states = response.data; // Extract the data property
        const stateData =  states.find(state => state.state_code === stateCode)
        if(!stateCode){
            res.status(404).json({message:`no State code ${stateCode} `})
        }
        else{
            res.json(stateData); // Send the extracted data

        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


