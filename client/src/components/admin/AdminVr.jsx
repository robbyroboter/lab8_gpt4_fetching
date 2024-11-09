import {useEffect, useState} from "react";
import Preloader from "../Preloader";
import {
    useVrContext,
} from "../../contexts/admin/VrContext";
import usePostData from "../../hooks/usePostData";
import {toast} from "react-toastify";

const AdminVrLeft = ({ womanImage }) => {
    const [srcData, setSrcData] = useState(womanImage.src);
    const [altData, setAltData] = useState(womanImage.alt);
    let vrContext = useVrContext();

    const handleSrcData = (e) => {
        setSrcData(e.target.value);
        vrContext.womanImage.src = e.target.value;
    };

    const handleAltData = (e) => {
        setAltData(e.target.value);
        vrContext.womanImage.alt = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Изображение:</h3>
            <div className="block__item">
                <label>Ссылка:</label>
                <input
                    type="text"
                    className="item__long_input"
                    value={srcData}
                    onChange={handleSrcData}
                />
            </div>
            <div className="block__item">
                <label>Описание:</label>
                <input
                    type="text"
                    className="item__long_input"
                    value={altData}
                    onChange={handleAltData}
                />
            </div>
        </div>
    );
};

const AdminVrRight = (props) => {
    const [textData, setTextData] = useState(props.text);
    const [headerData, setHeaderData] = useState(props.header);
    const [contentData, setContentData] = useState(props.content);
    let vrContext = useVrContext();

    const handleTextData = (e) => {
        setTextData(e.target.value);
        vrContext.text = e.target.value;
    };
    const handleHeaderData = (e) => {
        setHeaderData(e.target.value);
        vrContext.header = e.target.value;
    };

    const handleContentData = (e) => {
        setContentData(e.target.value);
        vrContext.content = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Контент:</h3>
            <div className="block__item">
                <label>Текст:</label>
                <input
                    className="item__long_input"
                    type="text"
                    value={textData}
                    onChange={handleTextData}
                />
            </div>
            <div className="block__item">
                <label>Заголовок:</label>
                <input
                    type="text"
                    className="item__long_input"
                    value={headerData}
                    onChange={handleHeaderData}
                />
            </div>
            <div className="block__item">
                <label>Контент:</label>
                <input
                    className="item__long_input"
                    type="text"
                    value={contentData}
                    onChange={handleContentData}
                />
            </div>
        </div>
    );
};

const AdminVr = () => {
    const vrContext = useVrContext();

    const {
        postData: data,
        status,
        statusDescription,
        postDataFunc,
    } = usePostData({ endpoint: "vr" });

    useEffect(() => {
        if (status === "success" || status === "error") toast(statusDescription);
    }, [status, statusDescription]);

    const handlePostData = (e) => {
        e.preventDefault();
        postDataFunc({ payload: vrContext });
    };

    if (status === "loading") return <Preloader />;
    if (!data)
        return (
            <div>
                <h3>Данные не загружены</h3>
            </div>
        );

    return (
        <div className="admin_container admin_Hero">
            <h2>Vr-секция.</h2>
            <AdminVrLeft womanImage={data.womanImage} />
            <AdminVrRight text={data.text} header={data.header} content={data.content} />
            <button className="btn primary-btn" onClick={handlePostData}>
                Сохранить
            </button>
        </div>
    );
};

export default AdminVr;
