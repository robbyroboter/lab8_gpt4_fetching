const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isVrDataValid = (data) => {
    // проверяем объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(data, [
        "womanImage",
        "text",
        "header",
        "content",
    ]);

    const { womanImage } = data;

    // проверяем внутренний объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(womanImage, ["src", "alt"]);
};

module.exports = isVrDataValid;