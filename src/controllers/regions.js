const uri = process.env.URI
const client = new MongoClient(uri, { useUnifiedTopology: true });

// Connect to MongoDB
client.connect().then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});


exports.getAllRegion = async (req, res)=>{
    try {
        const regions = await client.db('your_database_name').collection('region').find({}).toArray();
        res.json(regions);
      } catch (err) {
        console.error('Error getting regions', err);
        res.status(500).json({ message: 'Internal Server Error' });
      }
}