/**
 * Created by dy on 2018/9/12.
 *
 */

const Joi = require('joi');

const schema = Joi.number();

let result = schema.validate('213aa');
console.log(result);