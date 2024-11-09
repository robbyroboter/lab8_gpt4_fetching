import {createContext, useContext, useRef, useState} from "react";
import happensBlogData from "../../mockData/happensBlogData";

// настройки для запроса
const controller = new AbortController();
const signal = controller.signal;
const endpoint = "happens";
const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
};

const HappensBlogContext = createContext();
const PostHappensBlogContext = createContext();

const HappensBlogContextProvider = ({ children }) => {
    const data = useRef(happensBlogData);
    const [isPostDataLoading, setIsPostDataLoading] = useState(false);
    const [isPostDataError, setIsPostDataError] = useState(false);
    const [postDataError, setPostDataError] = useState(null);

    const postData = async () => {
        const url = `${process.env.REACT_APP_API_URL}${endpoint}`;
        options.body = JSON.stringify(data.current);

        const fetchData = async () => {
            setIsPostDataLoading(true);

            try {
                const response = await fetch(url, options, signal);

                const jsonData = await response.json();

                if (!response.ok) {
                    setIsPostDataError(true);
                    setPostDataError(jsonData.error);
                    return;
                }

                setIsPostDataError(false);
                setPostDataError(null);
            } catch (error) {
                setIsPostDataError(true);
                setPostDataError(error.message);
            }

            setIsPostDataLoading(false);

            return {
                isPostDataLoading,
                isPostDataError,
                postDataError,
            };
        };

        return await fetchData();
    };

    // Возвращаем 2 контекста
    // 1 - для получения данных
    // 2 - для отправки данных на сервер и получения результата
    return (
        <HappensBlogContext.Provider value={data.current}>
            <PostHappensBlogContext.Provider value={postData}>
                {children}
            </PostHappensBlogContext.Provider>
        </HappensBlogContext.Provider>
    );
};

// кастомные хуки для простоты получения
const useHappensBlogContext = () => useContext(HappensBlogContext);
const usePostHappensBlogContext = () => useContext(PostHappensBlogContext);

export { useHappensBlogContext, usePostHappensBlogContext };
export default HappensBlogContextProvider;
