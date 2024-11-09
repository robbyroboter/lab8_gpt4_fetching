const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isPurpleDataValid = (data) => {
    // проверяем объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(data, [
        "text",
        "header",
        "purpleCtaButtons",
    ]);

    const { purpleCtaButtons } = data;

    isArrayHasLength(purpleCtaButtons);

    // проверяем внутренний объект на наличие полей и соответствие типу "объект"
    purpleCtaButtons.forEach((item) => isObjectHasProps(item, ["type", "title"]));
};

module.exports = isPurpleDataValid;