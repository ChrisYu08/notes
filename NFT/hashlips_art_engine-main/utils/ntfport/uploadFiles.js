const fs = require('fs');
const fetch = require('node-fetch');
const basePath = process.cwd();
const { NETWORK } = require(`${basePath}/constants/network.js`);
const fs = require("fs");
const FormData = require('form-data'); 

fs.readFileSync(`${basePath}/build/images`).forEach(file => {
  const form = new FormData();
  const fileStream = fs.createReadStream(`${basePath}/build/images/${file}`);
  form.append('file', fileStream);

  const options = {
    method: 'POST',
    body: form,
    headers: {
      "Authorization": "0x438470d64d5f8a8c11c9f370b2977a45841b61b5",
    },
  };
  
  fetch("https://api.nftport.xyz/v0/files", options)
    .then(response => {
      return response.json()
    })
    .then(responseJson => {
      // Handle the response
      console.log(responseJson);
    })
})


