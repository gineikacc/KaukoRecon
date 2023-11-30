const axios = require("axios");
require('dotenv').config();

const makeURL = (name) => `https://www.tevu-darzelis.lt/vaiku-vardai/${name}/`;
let names = [
  "modesta",
  "kahdjkqw",
  "jurga",
  "simona",
  "leeeeeerooooyyyyy",
  "laurynas",
  "migle",
];

names.forEach((name) => {
    getGenderOfName(name).then(gender => console.log(`${name} ${gender}`));
});

loginToMoodle();
console.log(process.env.password);


async function getGenderOfName(name){
    let gender = "N/A";
    await axios
    .get(makeURL(name))
    .then((res) => {
      if (res.data.includes("Klaida: 404")) {
        gender = "Apache Helicopter ahahahahahah Comedy Gold !"
      } else {
        let [genderGifString, ..._] = new RegExp(/\w+symbol.gif/).exec(res.data);
        gender = genderGifString.slice(0, -10);
      }
    })
    .catch((err) => {
    });
    return gender;
}


function loginToMoodle(){
    axios.post('https://moodle.kauko.lt/login/index.php', {
        username: 'aironas.gin793',
        password: process.env.key
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log("error");
      });
}
