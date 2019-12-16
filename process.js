'use strict';

const serviceSum = require('./service-sum');
const serviceSqr = require('./service-sqr');

/*
 * Calculates square root of sum of a and b
**/
module.exports = async (req, res) => {
  const { a, b } = req.query;
  const sum = await serviceSum(req, a, b);
  
  const sqr = await serviceSqr(req, sum);
  
  res.json({
    result: sqr
  });
};
