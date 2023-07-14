const fs = require('fs');
const inquire = require('inquire');
const {Circle, Polygon, Square} = require('./main/lib/shapes');
const questions = require ('./main/lib/questions');

const init = () =>
    inquirer.prompt(questions)
        .then((data) => {
            console.log ("Create svg file...");
            switch ('${data.shape}') {
                case 'Square':
                    console.log('Suqre is being Created......')
                    const square = new Square(data.fill, data.stroke, data.
                        strokeWidth, data.text, data.textColor, data.width, data.width)
        
                    fs.writeFile("./main/output/logo.svg", square.rendesSqare(), (err) => {
                        if (err) {
                            console.error(err);
                        }  else {
                            console.log('Congratrularions!!! Square is now creaged!!');
                    })
                                                }
                    });
                    break: