const isVrDataValid = require("../validators/isVrDataValid");

const {
    getVrDataModel,
    postVrDataModel,
} = require("../model/files/vrDataModel");

const getVrData = (req, res, next) => {
    try {
        const data = getVrDataModel();

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const postVrData = (req, res, next) => {
    try {
        const data = req.body;

        // валидируем данные
        // если невалидны, то бросит ошибку
        isVrDataValid(data);

        // если с данными все ок, тогда пишем в файл через модель файлов
        postVrDataModel(JSON.stringify(data));
        res.status(200).json({
            message: "Данные успешно обновлены",
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

module.exports = { getVrData, postVrData };