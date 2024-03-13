const {MongoClient} = require('mongodb')
const uri = process.env.URI || "mongodb+srv://dbUser:Nano1234567@cluster01.jtu1vi3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01"

const client = new MongoClient(uri, { useUnifiedTopology: true });

// Connect to MongoDB
client.connect().then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});


exports.getAllRegion = async (req, res)=>{
    try {
        const regions = await client.db('Locale').collection('region').find({}).toArray();
        console.log(regions)
        res.json(regions);
      } catch (err) {
        console.error('Error getting regions', err);
        res.status(500).json({ message: 'Internal Server Error' });
      }
}


exports.getAllRegionByCode = async (req, res)=>{
    try {
        const {code} = req.query 
        console.log(code)
        const regions = await client.db('Locale').collection('region').findOne({'region.region_code': code })
        console.log(regions)
        res.json(regions);
      } catch (err) {
        console.error('Error getting regions', err);
        res.status(500).json({ message: 'Internal Server Error' });
      }
}
