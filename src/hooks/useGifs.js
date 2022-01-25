
import {useEffect,useState} from  "react";
import getGifts from "../Services/getGifs";

export function useGifs({keywords}) {

    const [gifs, updateValue] = useState([]);

    useEffect(() => {
        getGifts({keywords}).then(gifs => updateValue(gifs))
    }, [keywords])

    return gifs
}
