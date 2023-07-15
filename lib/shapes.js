class Shapes {
    fill;
    stroke;
    stokeWidth;
    text;
    textColor;
    constructor(fill, stroke, strokeWidth, textColor, text) {
        this.fill= fill;
        this.stroke =stroke;
        this.strokeWidth = strokeWidth;
        this.text = text;
        this.textColor = textColor;

    }

    setText() {
        return `<text x="50% y="50%" dominante-baselilne="middle" text-anchor="middle" font-size="60px" font-weight=700" 
        fill="${this.textColor}">${this.text}</text>`;
    }

}