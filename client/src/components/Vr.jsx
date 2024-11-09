import {vrData} from "../mockData/vrData";
import useData from "../hooks/useData";
import Preloader from "./Preloader";

export const WomanImage = ({ womanImage: { alt, src } }) => (
    <img src={src} alt={alt} />
);

export const Text = ({ text }) => (
    <p className="blue__text">{text}</p>
);
export const Header = ({ header }) => (
    <h2 className="right__header">{header}</h2>
);

export const Content = ({ content }) => (
    <p className="container__content">{content}</p>
);

const Vr = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "vr",
        options: {
            method: "GET",
        },
    });

    if (isError) {
        console.log("error");
        console.log(error);
    }

    if (isLoading) return <Preloader />;
    const renderedData = data || vrData;
    const {womanImage, header, text, content} = renderedData;

    return (
        <>
            <div className="vr_left">
                <WomanImage womanImage={womanImage} />
            </div>
            <div className="vr_right">
                <Text text={text}/>
                <Header header={header}/>
                <Content content={content}/>
                <a href="/vr" className="right__cta">Запросить ранний доступ</a>
            </div>
        </>
    );
};

export default Vr;