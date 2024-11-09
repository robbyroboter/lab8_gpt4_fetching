import {useEffect, useState} from "react";
import Preloader from "../Preloader";
import {
    useHappensBlogContext,
} from "../../contexts/admin/HappensBlogContext";
import usePostData from "../../hooks/usePostData";
import {toast} from "react-toastify";

const AdminHappensBlogHeader = (props) => {
    const [headerData, setHeaderData] = useState(props.header);
    let happensBlogContext = useHappensBlogContext();

    const handleHeaderData = (e) => {
        setHeaderData(e.target.value);
        happensBlogContext.header = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Контент:</h3>
            <div className="block__item">
                <label>Заголовок:</label>
                <input
                    type="text"
                    className="item__long_input"
                    value={headerData}
                    onChange={handleHeaderData}
                />
            </div>
        </div>
    );
};

const AdminHappensBlogItemLarge = ({ blog__item__large }) => {
    const [srcData, setSrcData] = useState(blog__item__large.image.src);
    const [altData, setAltData] = useState(blog__item__large.image.alt);
    const [textData, setTextData] = useState(blog__item__large.text);
    const [headerData, setHeaderData] = useState(blog__item__large.header);
    let happensBlogContext = useHappensBlogContext();

    const handleSrcData = (e) => {
        setSrcData(e.target.value);
        happensBlogContext.blog__item__large.image.src = e.target.value;
    };

    const handleAltData = (e) => {
        setAltData(e.target.value);
        happensBlogContext.blog__item__large.image.alt = e.target.value;
    };

    const handleTextData = (e) => {
        setTextData(e.target.value);
        happensBlogContext.blog__item__large.text = e.target.value;
    };

    const handleHeaderData = (e) => {
        setHeaderData(e.target.value);
        happensBlogContext.blog__item__large.header = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Большой блок:</h3>
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
                <label>Описание:</label>
                <input
                    className="item__long_input"
                    type="text"
                    value={textData}
                    onChange={handleTextData}
                />
            </div>
        </div>
    );
};

const AdminHappensBlogSmall = ({item, index}) => {
    const [srcData, setSrcData] = useState(item.image.src);
    const [altData, setAltData] = useState(item.image.alt);
    const [textData, setTextData] = useState(item.text);
    const [headerData, setHeaderData] = useState(item.header);
    let happensBlogContext = useHappensBlogContext();

    const handleSrcData = (e) => {
        setSrcData(e.target.value);
        happensBlogContext.blog__small[index].image.src = e.target.value;
    };

    const handleAltData = (e) => {
        setAltData(e.target.value);
        happensBlogContext.blog__small[index].image.alt = e.target.value;
    };

    const handleTextData = (e) => {
        setTextData(e.target.value);
        happensBlogContext.blog__small[index].text = e.target.value;
    };

    const handleHeaderData = (e) => {
        setHeaderData(e.target.value);
        happensBlogContext.blog__small[index].header = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Малый блок:</h3>
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
                <label>Описание:</label>
                <input
                    className="item__long_input"
                    type="text"
                    value={textData}
                    onChange={handleTextData}
                />
            </div>
        </div>
    );
};

const AdminHappensBlogBlocks = ({ blog__small }) => {
    return (
        <div className="admin_container__block">
            <h3>Малые блоки:</h3>
            {blog__small.map((item, index) => (
                <AdminHappensBlogSmall key={index} item={item} index={index} />
            ))}
        </div>
    );
};

const AdminHappensBlog = () => {
    const happensBlogContext = useHappensBlogContext();

    const {
        postData: data,
        status,
        statusDescription,
        postDataFunc,
    } = usePostData({ endpoint: "happens" });

    useEffect(() => {
        if (status === "success" || status === "error") toast(statusDescription);
    }, [status, statusDescription]);

    const handlePostData = (e) => {
        e.preventDefault();
        postDataFunc({ payload: happensBlogContext });
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
            <h2>Чё как блок</h2>
            <AdminHappensBlogHeader header={data.header} />
            <AdminHappensBlogItemLarge blog__item__large={data.blog__item__large} />
            <AdminHappensBlogBlocks blog__small={data.blog__small} />
            <button className="btn primary-btn" onClick={handlePostData}>
                Сохранить
            </button>
        </div>
    );
};

export default AdminHappensBlog;