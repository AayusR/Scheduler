import jobApplicantsJson from "./job_applicants.json" assert { type: "json" };
import jobApplicationJson from "./job_application.json" assert { type: "json" };
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    height(node) {
        if (node === null) {
            return 0;
        }
        return node.height;
    }

    rotationLL(node) {
        let temp = node.left;
        node.left = temp.right;
        temp.right = node;
        node.height =
            Math.max(this.height(node.left), this.height(node.right)) + 1;
        temp.height = Math.max(this.height(temp.left), node.height) + 1;
        return temp;
    }

    rotationRR(node) {
        let temp = node.right;
        node.right = temp.left;
        temp.left = node;
        node.height =
            Math.max(this.height(node.left), this.height(node.right)) + 1;
        temp.height = Math.max(this.height(temp.right), node.height) + 1;
        return temp;
    }

    rotationLR(node) {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    }

    rotationRL(node) {
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node);
    }

    balance(node) {
        let balanceFactor = this.height(node.left) - this.height(node.right);
        if (balanceFactor > 1) {
            if (this.height(node.left.left) >= this.height(node.left.right)) {
                node = this.rotationLL(node);
            } else {
                node = this.rotationLR(node);
            }
        } else if (balanceFactor < -1) {
            if (this.height(node.right.right) >= this.height(node.right.left)) {
                node = this.rotationRR(node);
            } else {
                node = this.rotationRL(node);
            }
        }
        return node;
    }

    insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.root = this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (node === null) {
            node = newNode;
        } else if (newNode.data.workExperience > node.data.workExperience) {
            node.left = this.insertNode(node.left, newNode);
            node = this.balance(node);
        } else if (newNode.data.workExperience < node.data.workExperience) {
            node.right = this.insertNode(node.right, newNode);
            node = this.balance(node);
        } else {
            let newNodeSkills = newNode.data.skills[0]
                .replace(/[\[\]]/g, "")
                .split(", ");
            let nodeSkills = node.data.skills[0]
                .replace(/[\[\]]/g, "")
                .split(", ");
            if (newNodeSkills.length > nodeSkills.length) {
                node.left = this.insertNode(node.left, newNode);
                node = this.balance(node);
            } else {
                node.right = this.insertNode(node.right, newNode);
                node = this.balance(node);
            }
        }
        return node;
    }

    inOrderTraverse(node, callback) {
        if (node !== null) {
            this.inOrderTraverse(node.left, callback);
            callback(node);
            this.inOrderTraverse(node.right, callback);
        }
    }

    toArray() {
        let array = [];
        this.inOrderTraverse(this.root, (node) => array.push(node.data));
        return array;
    }

    searchBySkill(skill) {
        let nodes = [];
        this.searchNodeBySkill(this.root, skill, nodes);
        return nodes;
    }

    searchNodeBySkill(node, skill, nodes) {
        if (node === null) {
            return;
        }

        this.searchNodeBySkill(node.left, skill, nodes);

        let Skills = node.data.skills[0].replace(/[\[\]]/g, "").split(", ");
        const includesSkills = Skills.map((item) =>
            item.toLowerCase().replace(/\s/g, "")
        ).includes(skill);

        if (Skills && includesSkills) {
            nodes.push(node.data);
        }

        this.searchNodeBySkill(node.right, skill, nodes);
    }
}

let applicantTree = new AVLTree();
for (let item of jobApplicantsJson) {
    applicantTree.insert(item);
}

let string = "Spri ng";
let searchString = string.toLowerCase().replace(/\s/g, "");
console.log(applicantTree.searchBySkill(searchString));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let data = applicantTree.toArray();
let json = JSON.stringify(data, null, 2); // convert array to formatted JSON string

let filePath = path.join(__dirname, "output.json");
fs.writeFile(filePath, json, (err) => {
    if (err) throw err;
    console.log("The JSON file has been saved!");
});
