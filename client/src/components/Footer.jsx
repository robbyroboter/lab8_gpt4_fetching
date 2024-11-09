import footerData from "../mockData/footerData";
import useData from "../hooks/useData";
import Preloader from "./Preloader";

export const Header = ({ header }) => (
    <h1>{header}</h1>
);

export const Button = ({ctaButton:{type, title} }) => {
    switch (type) {
        case "button":
            return (
                <button className="cta_buttons__signin btn footer-button">{title}</button>
            );
        default:
            return null;
    }
};

export const Buttons = ({ ctaButtons }) => {
    return (
        <div className="left__cta_buttons">
            {ctaButtons.map((ctaButton, index) => (
                <Button key={index} ctaButton={ctaButton} />
            ))}
        </div>
    );
};

export const Image = ({ image: { alt, src } }) => (
    <img src={src} alt={alt} />
);

export const Gpt3 = ({item}) => {
    const {text}=item
    return (
        <div
            className="external__text"
            dangerouslySetInnerHTML={{__html: text}}
        />
    );
};

export const Ssilki = ({item}) => {
    const {href, title} = item
    return (
        <div className="external__text">
        <a href={href}>{title}</a>
    </div>
);
}

export const Company=({item})=>{
    const {href, title}=item
    return (
        <div className="external__text">
            <a href={href}>{title}</a>
        </div>
    );
}

export const Contacts = ({item}) => {
    const {text}=item
    return (
        <div
            className="external__text"
            dangerouslySetInnerHTML={{__html: text}}
        />
    );
};

export const RealGpt3 = ({gpt3}) => {
    return gpt3.map((item, index) => (
        <Gpt3 key={index} item={item} />
    ));
};

export const RealSsilki = ({ ssilki }) => {
    return ssilki.map((item, index) => (
        <Ssilki key={index} item={item} />
    ));
};

export const RealCompany = ({ company }) => {
    return company.map((item, index) => (
        <Company key={index} item={item} />
    ));
};

export const RealContacts = ({ contacts }) => {
    return contacts.map((item, index) => (
        <Contacts key={index} item={item} />
    ));
};

export const Copyright = ({copyrightText}) => (
    <div className="copyright__text">
        {copyrightText}
    </div>
);

const Footer = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "footer",
        options: {
            method: "GET",
        },
    });

    if (isError) {
        console.log("error");
        console.log(error);
    }

    if (isLoading) return <Preloader />;
    const renderedData = data || footerData;

    const {
        header,
        footerCtaButtons,
        image,
        gpt3,
        ssilki,
        company,
        contacts,
        copyrightText
    } = renderedData;
    return (
        <>
            <div className="future__step">
                <div className="big__text">
                    <Header header={header}/>
                </div>
                <div className="nonback__button">
                    <Buttons ctaButtons={footerCtaButtons} />
                </div>
            </div>
            <div className="info">
                <div className="gpt-3">
                    <div className="GPT-3">
                        <Image image={image}/>
                    </div>
                    <RealGpt3 gpt3={gpt3}/>
                </div>
                <div className="ssilki">
                    <div className="main__text">
                        Ссылки
                    </div>
                    <RealSsilki ssilki={ssilki}/>
                </div>
                <div className="company">
                    <div className="main__text">
                        Компания
                    </div>
                    <RealCompany company={company}/>
                </div>
                <div className="contacts">
                    <div className="main__text">
                        Контакты
                    </div>
                    <RealContacts contacts={contacts}/>
                </div>
            </div>
            <Copyright copyrightText={copyrightText}/>
        </>
    );
};

export default Footer;