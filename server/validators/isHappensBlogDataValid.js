const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isHappensBlogDataValid = (data) => {
    // проверяем объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(data, [
        "header",
        "blog__item__large",
        "blog__small",
    ]);

    const { blog__item__large, blog__small } = data;
    //
    isObjectHasProps(blog__item__large, ["image", "text", "header"]);
    isArrayHasLength(blog__small);
    const { image } = blog__item__large;

    // проверяем внутренний объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(image, ["src", "alt"]);

    blog__small.forEach((item) => {
        const {image}=item
        // проверяем внутренний объект на наличие полей и соответствие типу "объект"
        isObjectHasProps(item, ["image", "text", "header"]);
        isObjectHasProps(image, ["src", "alt"]);
    });
};

module.exports = isHappensBlogDataValid;
