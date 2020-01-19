const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {

    const { github_username, techs, latitude, longitude } = req.body;
    
    let dev = await Dev.findOne({ github_username });

    if (!dev) {

      const apiRes = await axios.get(`https://api.github.com/users/${github_username}`);

      const { name = login, avatar_url, bio } = apiRes.data;

      const techsArray = parseStringAsArray(techs);

      const location ={
        type: 'Point',
        coordinates: [longitude, latitude]
      }

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }

    console.log(dev);
    return res.json(dev);
  },

  //TODO - DEVO IMPLEMENTAR ESSES MÉTODOS ATÉ O DIA 31 DE JANEIRO (COMPROMISSO PRÓPIO)
  async update(req, res) {

  },

  async destroy(req, res) {

  }
};