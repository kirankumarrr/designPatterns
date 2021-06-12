const browserDB = () => {
    return {
        dbInfo : (browser)=>{
            const { id,engine,speed } = browser
           return `Browser Engine ${engine} & Speed ${speed} & version ${id}`
        }
    }
}

module.exports = browserDB()