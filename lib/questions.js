const questions = [
  {
    type: "input",
    name: "title",
    message: "Please name your Project.",
  },
  {
    type: "input",
    name: "text",
    message: "Please enter up to three letters, numbers, or symbols.",
  },
  {
    type: "input",
    name: "textcolor",
    message:
      "What color would you like the text to be? Enter a base color or hex value.",
  },
  {
    type: "list",
    name: "shape",
    message: "What shape would you like?",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapecolor",
    message:
      "What color would you like the shape to be? Enter a base color or hex value.",
  },
];

module.exports = questions;
