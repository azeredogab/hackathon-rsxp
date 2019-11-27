const range = (min, max) => {
    let random = parseInt(Math.random() * (max - min) + min);
    return random;
}

export { range }