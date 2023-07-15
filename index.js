const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Polygon, Square } = require('./lib/shapes');
const questions = require('./lib/questions');

const init = () => {
  inquirer.prompt(questions).then((data) => {
    console.log("Create svg file...");
    switch (data.shape) {
      case 'Square':
        console.log('Square is being created...');
        const square = new Square(
          data.fill,
          data.stroke,
          data.strokeWidth,
          data.text,
          data.textColor,
          data.width
        );

        fs.writeFile("./main/output/logo.svg", square.renderSquare(), (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log('Congratulations! Square is now created!');
          }
        });
        break;

      case 'Circle':
        console.log('Circle is being created...');
        const circle = new Circle(
          data.fill,
          data.stroke,
          data.strokeWidth,
          data.textColor,
          data.text,
          data.radius
        );

        fs.writeFile("./main/output/logo.svg", circle.renderCircle(), (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log('Congratulations! Circle is now created!');
          }
        });
        break;

      case 'Triangle':
        console.log('Triangle is being created...');
        const triangle = new Polygon(
          data.fill,
          data.stroke,
          data.strokeWidth,
          data.textColor,
          data.text,
          data.radius
        );

        fs.writeFile("./main/output/logo.svg", triangle.renderPolygon(), (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log('Congratulations! Triangle is now created!');
          }
        });
        break;

      default:
        console.log('Invalid shape entered.');
    }
  });
};

init();
