const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isFooterDataValid = (data) => {
    // проверяем объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(data, [
        "header",
        "footerCtaButtons",
        "image",
        "gpt3",
        "ssilki",
        "company",
        "contacts",
        "copyrightText"
    ]);

    const { footerCtaButtons, image, gpt3, ssilki, company, contacts } = data;
    //
    isObjectHasProps(image, ["src", "alt"]);
    isArrayHasLength(footerCtaButtons);
    isArrayHasLength(gpt3);
    isArrayHasLength(ssilki);
    isArrayHasLength(company);
    isArrayHasLength(contacts);

    footerCtaButtons.forEach((item) => isObjectHasProps(item, ["type", "title"]));


    gpt3.forEach((item) => {
        // проверяем внутренний объект на наличие полей и соответствие типу "объект"
        isObjectHasProps(item, ["text"]);
    });

    ssilki.forEach((item) => {
        // проверяем внутренний объект на наличие полей и соответствие типу "объект"
        isObjectHasProps(item, ["href", "title"]);
    });

    company.forEach((item) => {
        // проверяем внутренний объект на наличие полей и соответствие типу "объект"
        isObjectHasProps(item, ["href", "title"]);
    });

    contacts.forEach((item) => {
        // проверяем внутренний объект на наличие полей и соответствие типу "объект"
        isObjectHasProps(item, ["text"]);
    });
};

module.exports = isFooterDataValid;
