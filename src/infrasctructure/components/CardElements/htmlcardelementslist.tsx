import { setCardInfo } from '../setcardinfo/setcardinfo';

export const HTMLCardElementList =
    document.querySelectorAll('.character__card');

export const setAllCardsInfo = (
    HTMLCardElementList: NodeList,
    characters: [],
    listOfImages: []
) => {
    HTMLCardElementList.forEach((item, i) => {
        setCardInfo(item, characters[i], listOfImages[i]);
    });
};
