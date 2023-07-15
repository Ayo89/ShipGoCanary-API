const { config } = require('../../db/google')




const getAllPlaces = async (req,res) => {
    const input = req.query.input;
    console.log(req.query.input)
    try{
        const  {data}  = await config.get(`maps/api/place/autocomplete/json?input=${input}&types=geocode&key=${process.env.API_KEY}`);
        res.status(200).json(data)

    } catch (error) {
            res.status(500).send(error)
        }
    }



/* app.get('/places', async (req, res) => {
    try {
        const input = req.query.input;
        const API_KEY = 'tu_api_key'; // reemplaza esto con tu API key
        const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=geocode&key=${API_KEY}`;

        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        console.error('Cannot connect', error);
        res.status(500).send({ error: 'Cannot connect' });
    }
}); */

module.exports = { getAllPlaces }