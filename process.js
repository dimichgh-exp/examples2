'use strict';

/*
 * Calculates square root of sum of a and b
**/
module.exports = async context => {
  const { a, b } = context.parameters;
  const sum = await context.action('sum', a, b);
  
  const sqr = await context.action('sqr', sum);
  
  return {
    result: sqr
  };
};
