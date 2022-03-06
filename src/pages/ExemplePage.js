



/**
 * An exemple to how create a page in our app ...
 * 
 * @param {*} param1 What you want ...
 * @param {*} param2 What you want ...
 * @returns 
 */
const ExemplePage = (param1, param2) => {

    /*
    Add ? there
    */
    return `<div>Return the html associated, we can also use parameters, like there : ${param1} & ${param2}</div>`;
}

/**
 * You can add function to page like this ..
 */
 ExemplePage.test = () => {
    console.log("Hey test")
}


/**
 * Export the page, to make them accessible 
 */
export { ExemplePage };