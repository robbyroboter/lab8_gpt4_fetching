import {createContext, useContext, useRef, useState} from "react";
import {vrData} from "../../mockData/vrData";
// настройки для запроса
const controller = new AbortController();
const signal = controller.signal;
const endpoint = "vr";
const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
};

const VrContext = createContext();
const PostVrContext = createContext();

const VrContextProvider = ({ children }) => {
    const data = useRef(vrData);
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
        <VrContext.Provider value={data.current}>
            <PostVrContext.Provider value={postData}>
                {children}
            </PostVrContext.Provider>
        </VrContext.Provider>
    );
};

// кастомные хуки для простоты получения
const useVrContext = () => useContext(VrContext);
const usePostVrContext = () => useContext(PostVrContext);

export { useVrContext, usePostVrContext };
export default VrContextProvider;
