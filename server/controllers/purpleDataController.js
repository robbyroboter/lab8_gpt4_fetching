const isPurpleDataValid = require("../validators/isPurpleDataValid");

const {
    getPurpleDataModel,
    postPurpleDataModel,
} = require("../model/files/purpleDataModel");

const getPurpleData = (req, res, next) => {
    try {
        const data = getPurpleDataModel();

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const postPurpleData = (req, res, next) => {
    try {
        const data = req.body;

        // валидируем данные
        // если невалидны, то бросит ошибку
        isPurpleDataValid(data);

        // если с данными все ок, тогда пишем в файл через модель файлов
        postPurpleDataModel(JSON.stringify(data));
        res.status(200).json({
            message: "Данные успешно обновлены",
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

module.exports = { getPurpleData, postPurpleData };
