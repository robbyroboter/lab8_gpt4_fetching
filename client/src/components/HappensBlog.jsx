import happensBlogData from "../mockData/happensBlogData";
import useData from "../hooks/useData";
import Preloader from "./Preloader";

export const Header = ({ header }) => (
    <h1 className="top__header">{header}</h1>
);

export const BlogItemLarge = ({ blog__item__large }) => {
    const {image:{src, alt}, text, header}=blog__item__large
    return (
        <>
    <div className="blog__item__large">
        <div className="image">
          <img src={src} alt={alt}/>
        </div>
        <div className="text">
            <p className="p text__blog">{text}</p>
            <h3
                className="h3 big__text__blog"
                dangerouslySetInnerHTML={{__html: header}}
            />
        </div>
        <div className="bottom__text">
            <a className="a text__blog" href="/happensBlog">Читать полную статью</a>
        </div>
    </div>
        </>
    );
};

export const BlogSmall = ({ item }) => {
    const {image:{src, alt}, text, header}=item
    return (
        <>
            <div className="blog__small">
                <div className="image">
                    <img src={src} alt={alt}/>
                </div>
                <div className="text">
                    <p className="p text__blog">{text}</p>
                    <h3
                        className="h3 big__text__blog"
                        dangerouslySetInnerHTML={{__html: header}}
                    />
                </div>
                <div className="bottom__text">
                    <a className="a text__blog" href="/happensBlog">Читать полную статью</a>
                </div>
            </div>
        </>
    );
};

export const BlogItem = ({ blog__small }) => {
    return blog__small.map((item, index) => (
        <BlogSmall key={index} item={item} />
    ));
};

const HappensBlog = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "happens",
        options: {
            method: "GET",
        },
    });

    if (isError) {
        console.log("error");
        console.log(error);
    }

    // if (!isLoading) {
    //   console.log("!isLoading");
    //   console.log("data");
    //   console.log(data);
    // }

    if (isLoading) return <Preloader />;
    const renderedData = data || happensBlogData;

    const { header, blog__item__large, blog__small } =
        renderedData;

    return (
        <>
            <div className="text__block">
                <Header header={header} />
            </div>
            <div className="blog__block">
                <BlogItemLarge blog__item__large={blog__item__large} />
                <div className="blog__item">
                    <BlogItem blog__small={blog__small} />
                </div>
            </div>
        </>
    );
};

export default HappensBlog;