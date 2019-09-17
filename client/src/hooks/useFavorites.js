import { useLocalStorage } from './useLocalStorage';

export const useFavorites = () => {
    const [ favorites, setFavorites] = useLocalStorage(false);

    return [ favorites, setFavorites];
}