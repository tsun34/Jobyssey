export const getRandomBackgroundColor = () => {
    const colors = [
        '#FBE8A6',
        '#F4976C',
        '#303C6C',
        '#B4DFE5',
        '#D2FDFF',
        "rgba(10, 180, 87, 0.85)",
        "rgba(76, 106, 164, 0.85)",
        "rgba(252, 84, 100, 0.85)",
        "#0077b5",
    ]; 
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};