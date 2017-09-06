const fs = require('fs');

const promesify = (func) => (...params) => new Promise (
    (f, r) => func(...params, (err, c) => err ? r(err) : f(c))
);

const readDir = promesify(fs.readdir);
const readFile = promesify(fs.readFile);
const readJSONFile = (f) => readFile(f).then(JSON.parse)
const writeFile = promesify(fs.writeFile)

const dataFolder = './src/assets/data';

readDir(dataFolder)
    .then(res => res.filter((f) => /edition\.[0-9]*\.json/.test(f)))
    .then(files => Promise.all(
        files.map(f => readJSONFile(`${dataFolder}/${f}`))
    ))
    .then(aggregate)
    .then(save)
    .catch(console.error);

function aggregate(editions) {
    editions = editions.sort((n, p) => p.number < n.number);
    return {
        last : editions[ editions.length - 1 ],
        editions : editions.map(e => {
            return {
                number: e.number,
                name: e.name,
                cover: e.cover,
                date: e.date
            }
        })
    }
}

function save(data) {
    return writeFile(
        `${dataFolder}/last_edition.json`,
        JSON.stringify(data.last)
    )
        .then(() => writeFile(
            `${dataFolder}/editions.json`,
            JSON.stringify(data.editions)
        ));
}

