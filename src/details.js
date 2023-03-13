const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
const labOutputsDetails = [
    {
        id: "lab-1-output-1",
        labName : "Lab 1 Output 1",
        labCount : "1",
        labOutput : 
        `This code is running in the parent process. ID: ${generateRandom(1300, 1700)}
Child Process created with process ID: ${generateRandom(13000, 17000)} `
    },
    {
        id: "lab-1-output-2",
        labName : "Lab 1 Output 2",
        labCount : "2",
        labOutput : `Parent thread started. ID: ${generateRandom(11000, 15000)}
Child thread started. ID: ${generateRandom(20000, 25000)}
Waiting for child thread to finish...
Child thread finished.
Parent thread finished. `
    },
    {
        id: "lab-1-output-3",
        labName : "Lab 1 Output 3",
        labCount : "3",
        labOutput : `Parent thread started. ID: ${generateRandom(1100, 4000)}
Child thread started. ID: ${generateRandom(4000, 12000)}
Waiting for child thread to finish...
Child thread finished.
Parent thread finished.`
    },
]

export default labOutputsDetails
