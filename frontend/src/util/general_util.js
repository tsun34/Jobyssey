export const getRandomBackgroundColor = () => {
    const colors = [
        '#FBE8A6',
        '#F4976C',
        '#303C6C',
        '#B4DFE5',
        '#D2FDFF',
    ]; 
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};