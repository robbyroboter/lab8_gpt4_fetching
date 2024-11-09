const isHappensBlogDataValid = require("../validators/isHappensBlogDataValid");

const {
    getHappensBlogDataModel,
    postHappensBlogDataModel,
} = require("../model/files/happensBlogDataModel");

const getHappensBlogData = (req, res, next) => {
    try {
        const data = getHappensBlogDataModel();

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const postHappensBlogData = (req, res, next) => {
    try {
        const data = req.body;

        // валидируем данные
        // если невалидны, то бросит ошибку
        isHappensBlogDataValid(data);

        // если с данными все ок, тогда пишем в файл через модель файлов
        postHappensBlogDataModel(JSON.stringify(data));
        res.status(200).json({
            message: "Данные успешно обновлены",
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

module.exports = { getHappensBlogData, postHappensBlogData };
