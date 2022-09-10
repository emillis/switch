import * as fs from "fs"

let location = "C:\\Users\\Emilis\\Desktop\\go"
let lookingFor = "r"

//Scans the location supplied and returns all the folders that matched the query
function FindMatchingFoldersInLocation(location, find) {
    try {
        let x = fs.readdirSync(location)

        let results = [];

        for (let i=0;i<x.length; i++) {
            let name  = x[i];

            if (x[i].search(find) === -1) {
                continue
            }

            results.push({
                folderName: name,
                location: location + "\\" + name,
            });
        }

        return results

    } catch (err) {
        console.log(err.toString())
    }
}

console.log(FindMatchingFoldersInLocation(location, lookingFor));