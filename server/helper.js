import fs from 'fs'

export const readFile = () =>{
    return new Promise((resolve, reject) => {
        fs.readFile('./posts.json',(err,data)=>{
            if (err) reject(err)
            else{
                resolve(JSON.parse(data.toString()))
            }
        })
    })
}

export const writeFile = (data) =>{
    return new Promise((resolve, reject) =>{
        fs.writeFile('./posts.json', JSON.stringify(data, null, 2), (err) =>{
            if (err) reject(err)
            else {
                resolve("Daten geschrieben")}
        })
    })
}

export const appendFile = (newPost) =>{
    return new Promise((resolve, reject) =>{
        readFile()
        .then(oldPosts =>{
            const newData =[...oldPosts, newPost]
            writeFile(newData)
            .then(res => resolve(newData))
            .catch(err => reject(err))
        })
    })
}