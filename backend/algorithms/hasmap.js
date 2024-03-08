import jobApplicantsJson from "./job_applicants.json" assert { type: "json" };
import { mergeSort, merge } from "./mergeSort.js";
class HashMap {
    constructor() {
        this.map = new Map();
    }

    insert(data) {
        let key =
            data.workExperience +
            "-" +
            data.skills[0].replace(/[\[\]]/g, "").split(", ").length;
        if (this.map.has(key)) {
            this.map.get(key).push(data);
        } else {
            this.map.set(key, [data]);
        }
    }

    toArray() {
        let array = [];
        for (let value of this.map.values()) {
            array.push(...value);
        }
        return array;
    }

    sort() {
        let unsortedArray = Array.from(this.map.values()).flat();
        let sortedArray = mergeSort(unsortedArray, true);
        return sortedArray;
    }

    searchBySkill(skill) {
        let nodes = [];
        for (let value of this.map.values()) {
            for (let node of value) {
                let Skills = node.skills[0].replace(/[\[\]]/g, "").split(", ");
                const includesSkills = Skills.map((item) =>
                    item.toLowerCase().replace(/\s/g, "")
                ).includes(skill);
                if (includesSkills) {
                    nodes.push(node);
                }
            }
        }
        // Sort the nodes array using mergeSort
        let sortedNodes = mergeSort(nodes, true);
        return sortedNodes;
    }
}

let hashMap = new HashMap();

for (let item of jobApplicantsJson) {
    hashMap.insert(item);
}

let sorteddata = hashMap.sort();
// console.log(sorteddata);
console.log(hashMap.searchBySkill("spring"));
