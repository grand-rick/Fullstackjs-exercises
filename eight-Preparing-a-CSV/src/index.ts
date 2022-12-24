import express from 'express';
import {promises as fs} from 'fs';
import csvtojson from 'csvtojson';
import morgan from 'morgan';

const app = express();
const port = 3000;

const csvFile = './users.csv';
const jsonFile = 'users.json';
interface Person {
    firstName: string;
    lastName: string;
    phone: string;
}

app.use(morgan('common'));

app.get('/convert', async (req, res) => {
    res.send('Converting to json');
    const jsonArray = await csvtojson().fromFile(csvFile);
    jsonArray.forEach((person: Person) => {
        if (!person.phone) {
            person.phone = 'missing data'
        }
    })
    await fs.writeFile(jsonFile, JSON.stringify(jsonArray));
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})