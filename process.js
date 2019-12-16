'use strict';

const request = require('request');

/*
 * Calculates square root of sum of a and b
**/
module.exports = async (req, res) => {
  const { a, b } = req.query;
  const sum = await new Promise((resolve, reject) => {
    request(`http://service.xyz/sum?a=${a}&b=${b}`, (err, response) => {
      if (err) {
        return reject(err);
      }
      return response.body;
    });
  });
  
  const sqr = await new Promise((resolve, reject) => {
    request('http://service.xyz/sqr?value=${sum}', (err, response) => {
      if (err) {
        return reject(err);
      }
      return response.body;
    });
  });
  
  res.json({
    result: sqr
  });
};
