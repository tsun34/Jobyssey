export const getRandomBackgroundColor = () => {
    const colors = [
        "#cab2d6",
        "#1f78b4",
        "#33a02c",
        '#F4976C',
        "rgba(10, 180, 87, 0.85)",
        "rgba(76, 106, 164, 0.85)",
        "rgba(252, 84, 100, 0.85)",
        "#0077b5",
    ]; 
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};