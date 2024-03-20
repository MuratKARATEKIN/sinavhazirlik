// const jsonString = '{"people":[{"name":"John","age":30},{"name":"Anna","age":25},{"name":"Peter","age":35}]}';

const jsonString = '{}'
const parsedData = JSON.parse(jsonString);

for (let i = 0; i < parsedData.people.length; i++) {

    console.log('No: ', parsedData.people[i].No, 'Soru: ', parsedData.people[i].Soru, 'Cevap: ', parsedData.people[i].cevap);
}