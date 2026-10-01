// 'async' tells the engine that this function handles asynchronous tasks and returns a Promise
async function getUserData() {
    try {
        // 'await' pauses this function until the network request finishes, without blocking the browser
        const response = await fetch('https://github.com');

        // 'await' pauses again while the response is converted into readable JSON
        const data = await response.json();

        console.log(data.name);
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
}

// Call the function
getUserData();

// START: Program begins.
// 1.[JS Engine] Entering function. Handing task to the OS...
// 2.[JS Engine] The Call Stack is empty! The OS is working in the background.
//    I can run other code here without freezing the app.
// * ( 2-second pause here while the OS timer ticks and the Task Queue waits)*
// 3.[JS Engine] Task Queue callback executed! Code resumes.
// 4.[Result] Success! Received your data: { name: 'khush', age: 23, contact: 9702500000 }
// END: Program finishes.
