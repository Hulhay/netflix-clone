const getRandomPage = () => {
    const page = Math.floor(Math.random() * 5) + 1 
    return page
}

export {
    getRandomPage
}