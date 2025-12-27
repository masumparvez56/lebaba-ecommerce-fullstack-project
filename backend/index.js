const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

require('dotenv').config()


async function main() {
  await mongoose.connect(process.env.DB_URL);
}

main().then(() => console.log("Mongodb connected successfuly")).catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Lebaba E-commerce Server is running!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
