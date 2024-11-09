import {useEffect, useState} from "react";
import Preloader from "../Preloader";
import {
    useFooterContext,
} from "../../contexts/admin/FooterContext";
import usePostData from "../../hooks/usePostData";
import {toast} from "react-toastify";
const AdminFooterHeader = (props) => {
    const [headerData, setHeaderData] = useState(props.header);
    let footerContext = useFooterContext();

    const handleHeaderData = (e) => {
        setHeaderData(e.target.value);
        footerContext.header = e.target.value;
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

const AdminButtonsSingleButton = ({item, index}) => {
    const [titleData, setTitleData] = useState(item.title);
    const [typeData, setTypeData] = useState(item.type);
    let footerContext = useFooterContext();

    const handleTitleData = (e) => {
        setTitleData(e.target.value);
        footerContext.footerCtaButtons[index].title = e.target.value;
    };

    const handleTypeData = (e) => {
        setTypeData(e.target.value);
        footerContext.footerCtaButtons[index].type = e.target.value;
    };

    return (
        <div className="block__card">
            <div className="block__item">
                <label>Наименование кнопки:</label>
                <input type="text" value={titleData} onChange={handleTitleData} />
            </div>
            <div className="block__item">
                <label>Тип:</label>
                <input type="text" value={typeData} onChange={handleTypeData} />
            </div>
        </div>
    );
};

const AdminButtons = ({ footerCtaButtons }) => {
    if (!Array.isArray(footerCtaButtons)) {
        footerCtaButtons = [footerCtaButtons]; // Преобразовать в массив, если это объект
    }

    return (
        <div className="admin_container__block">
            <h3>Кнопки:</h3>
            {footerCtaButtons.map((item, index) => (
                <AdminButtonsSingleButton key={index} item={item} index={index} />
            ))}
        </div>
    );
};

const AdminImage = ({ image }) => {
    const [srcData, setSrcData] = useState(image.src);
    const [altData, setAltData] = useState(image.alt);
    let footerContext = useFooterContext();

    const handleSrcData = (e) => {
        setSrcData(e.target.value);
        footerContext.image.src = e.target.value;
    };

    const handleAltData = (e) => {
        setAltData(e.target.value);
        footerContext.image.alt = e.target.value;
    }

    return (
        <div className="admin_container__block">
            <h3>Gpt3:</h3>
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

const AdminGpt3 = ({item, index}) => {
    const [textData, setTextData] = useState(item.text);
    let footerContext = useFooterContext();

    const handleTextData = (e) => {
        setTextData(e.target.value);
        footerContext.gpt3[index].text = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <div className="block__item">
                <label>Текст:</label>
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

const AdminRealGpt3 = ({ gpt3 }) => {
    return (
        <div className="admin_container__block">
            {gpt3.map((item, index) => (
                <AdminGpt3 key={index} item={item} index={index} />
            ))}
        </div>
    );
};

const AdminSsilki = ({item, index}) => {
    const [hrefData, setHrefData] = useState(item.href);
    const [titleData, setTitleData] = useState(item.title);
    let footerContext = useFooterContext();

    const handleHrefData = (e) => {
        setHrefData(e.target.value);
        footerContext.ssilki[index].href = e.target.value;
    };
    const handleTitleData = (e) => {
        setTitleData(e.target.value);
        footerContext.ssilki[index].title = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <div className="block__item">
                <label>Cсылка:</label>
                <input
                    className="item__long_input"
                    type="text"
                    value={hrefData}
                    onChange={handleHrefData}
                />
            </div>
            <div className="block__item">
                <label>Заголовок:</label>
                <input
                    className="item__long_input"
                    type="text"
                    value={titleData}
                    onChange={handleTitleData}
                />
            </div>
        </div>
    );
};

const AdminRealSsilki = ({ssilki}) => {
    return (
        <div className="admin_container__block">
            <h3>Cсылки:</h3>
            {ssilki.map((item, index) => (
                <AdminSsilki key={index} item={item} index={index}/>
            ))}
        </div>
    );
};

const AdminCompany = ({item, index}) => {
    const [hrefData, setHrefData] = useState(item.href);
    const [titleData, setTitleData] = useState(item.title);
    let footerContext = useFooterContext();

    const handleHrefData = (e) => {
        setHrefData(e.target.value);
        footerContext.company[index].href = e.target.value;
    };
    const handleTitleData = (e) => {
        setTitleData(e.target.value);
        footerContext.company[index].title = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <div className="block__item">
                <label>Cсылка:</label>
                <input
                    className="item__long_input"
                    type="text"
                    value={hrefData}
                    onChange={handleHrefData}
                />
            </div>
            <div className="block__item">
                <label>Заголовок:</label>
                <input
                    className="item__long_input"
                    type="text"
                    value={titleData}
                    onChange={handleTitleData}
                />
            </div>
        </div>
    );
};

const AdminRealCompany = ({company}) => {
    return (
        <div className="admin_container__block">
            <h3>Компания:</h3>
            {company.map((item, index) => (
                <AdminCompany key={index} item={item} index={index}/>
            ))}
        </div>
    );
};

const AdminContacts = ({item, index}) => {
    const [textData, setTextData] = useState(item.text);
    let footerContext = useFooterContext();

    const handleTextData = (e) => {
        setTextData(e.target.value);
        footerContext.contacts[index].text = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <div className="block__item">
                <label>Текст:</label>
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

const AdminRealContacts = ({ contacts }) => {
    return (
        <div className="admin_container__block">
            <h3>Контакты:</h3>
            {contacts.map((item, index) => (
                <AdminContacts key={index} item={item} index={index} />
            ))}
        </div>
    );
};

const AdminCopyright = (props) => {
    const [textData, setTextData] = useState(props.copyrightText);
    let footerContext = useFooterContext();

    const handleTextData = (e) => {
        setTextData(e.target.value);
        footerContext.copyrightText = e.target.value;
    };

    return (
        <div className="admin_container__block">
            <h3>Копирайт:</h3>
            <div className="block__item">
                <label>Копирайт:</label>
                <input
                    type="text"
                    className="item__long_input"
                    value={textData}
                    onChange={handleTextData}
                />
            </div>
        </div>
    );
};

const AdminFooter = () => {
    const footerContext = useFooterContext();

    const {
        postData: data,
        status,
        statusDescription,
        postDataFunc,
    } = usePostData({ endpoint: "footer" });

    useEffect(() => {
        if (status === "success" || status === "error") toast(statusDescription);
    }, [status, statusDescription]);

    const handlePostData = (e) => {
        e.preventDefault();
        postDataFunc({ payload: footerContext });
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
            <h2>Подвал.</h2>
            <AdminFooterHeader header={data.header} />
            <AdminButtons footerCtaButtons={data.footerCtaButtons} />
            <AdminImage image={data.image} />
            <AdminRealGpt3 gpt3={data.gpt3} />
            <AdminRealSsilki ssilki={data.ssilki} />
            <AdminRealCompany company={data.company} />
            <AdminRealContacts contacts={data.contacts} />
            <AdminCopyright copyrightText={data.copyrightText} />
            <button className="btn primary-btn" onClick={handlePostData}>
                Сохранить
            </button>
        </div>
    );
};

export default AdminFooter;