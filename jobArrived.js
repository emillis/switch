import fs from "fs";

function createVariableDump(v) {
    let result = {}

    if (typeof v !== "object") {return "value supplied is not an object"}

    let keys = Object.keys(v)
    for (let i=0; i<keys.length; i++) {
        let key = keys[i];
        result[key] = {};
        let r = result[key];
        r["key"] = key;
        r["value_type"] = typeof v[key];
        r["value"] = "undefined";

        if (r["value_type"] === "object") {
            r["value"] = JSON.stringify(v[key])
            continue
        }

        if (r["value_type"] === "undefined") {
            continue
        }

        r["value"] = v[key].toString()
    }

    return result
}

async function jobArrived(s, flowElement, job) {
    let desktop = "";

    fs.appendFile(desktop+"status.txt", "job_arrived", () => {})

    fs.appendFile(desktop+"s_keys.txt", JSON.stringify(createVariableDump(s)),() => {})

    fs.appendFile(desktop+"flowElement_keys.txt", JSON.stringify(createVariableDump(flowElement)), () => {})

    fs.appendFile(desktop+"job_keys.txt", JSON.stringify(createVariableDump(job)), () => {})

    fs.appendFile(desktop+"status.txt", "job_exited", () => {})
}