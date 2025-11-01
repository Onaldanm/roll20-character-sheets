const k = require('./source');
const fs = require('fs/promises');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const generate = async ()=>{
  const [pugOut] = await k.all({source:'./source',destination:'./'});
}

generate();