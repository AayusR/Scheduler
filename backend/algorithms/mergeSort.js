// import jobApplicantsJson from "./job_applicants.json" assert { type: "json" };
// import jobApplicationJson from "./job_application.json" assert { type: "json" };
// import fs from "fs";
// import { fileURLToPath } from "url";
// import { dirname } from "path";
// import path from "path";
export function mergeSort(arr, isApplicants) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(
        mergeSort(left, isApplicants),
        mergeSort(right, isApplicants),
        isApplicants
    );
}

export function merge(left, right, isApplicants) {
    let resultArray = [],
        leftIndex = 0,
        rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (isApplicants == true) {
            if (
                left[leftIndex].workExperience >
                right[rightIndex].workExperience
            ) {
                resultArray.push(left[leftIndex]);
                leftIndex++;
            } else if (
                left[leftIndex].workExperience <
                right[rightIndex].workExperience
            ) {
                resultArray.push(right[rightIndex]);
                rightIndex++;
            } else {
                let leftSkills = left[leftIndex].skills[0]
                    .replace(/[\[\]]/g, "")
                    .split(", ");
                let rightSkills = right[rightIndex].skills[0]
                    .replace(/[\[\]]/g, "")
                    .split(", ");

                if (leftSkills.length >= rightSkills.length) {
                    resultArray.push(left[leftIndex]);
                    leftIndex++;
                } else {
                    resultArray.push(right[rightIndex]);
                    rightIndex++;
                }
            }
        } else {
            if (left[leftIndex].salary > right[rightIndex].salary) {
                resultArray.push(left[leftIndex]);
                leftIndex++;
            } else {
                resultArray.push(right[rightIndex]);
                rightIndex++;
            }
        }
    }

    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

// let sortedApplicants = mergeSort(jobApplicantsJson, true);
// let applicantsString = JSON.stringify(sortedApplicants);

// let sortedJobApplication = mergeSort(jobApplicationJson, false);
// let jobString = JSON.stringify(sortedJobApplication);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// fs.writeFile(
//     path.join(__dirname, "applicants_mergeSort.json"),
//     applicantsString,
//     (err) => {
//         if (err) throw err;
//         console.log("The file has been saved!");
//     }
// );

// fs.writeFile(
//     path.join(__dirname, "application_mergeSort.json"),
//     jobString,
//     (err) => {
//         if (err) throw err;
//         console.log("The file has been saved!");
//     }
// );
