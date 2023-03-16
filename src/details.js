const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
const labOutputsDetails = [
    [

        {
            id: "lab-1-output-1",
            labName: "Lab 1 Output 1",
            labCount: "1",
            labOutput:
                `This code is running in the parent process. ID: ${generateRandom(1300, 1700)}
Child Process created with process ID: ${generateRandom(13000, 17000)} `
        },
        {
            id: "lab-1-output-2",
            labName: "Lab 1 Output 2",
            labCount: "2",
            labOutput: `Main thread ID: 1
Process ID: ${generateRandom(100, 1000)}
This statement is being printed under thread 3 with ID: 2
This statement is being printed under thread 3 with ID: 3
This statement is being printed under thread 4 with ID: 4
This statement is being printed under thread 0 with ID: 5
This statement is being printed under thread 1 with ID: 6 `
        },
        {
            id: "lab-1-output-3",
            labName: "Lab 1 Output 3",
            labCount: "3",
            labOutput: `Parent thread started. ID: ${generateRandom(1100, 4000)}
Child thread started. ID: ${generateRandom(4000, 12000)}
Waiting for child thread to finish...
Child thread finished.
Parent thread finished.`
        },
    ],
    [
        {
            id: "lab-2-output-1",
            labName: "Lab 2 Output 1",
            labCount: "1",
            labOutput:
                `This code is running in the parent process. ID: ${generateRandom(1300, 1700)}
Child Process created with process ID: ${generateRandom(13000, 17000)} `
        },
        {
            id: "lab-2-output-2",
            labName: "Lab 2 Output 2",
            labCount: "2",
            labOutput: `Main thread ID: 1
Process ID: ${generateRandom(100, 1000)}
This statement is being printed under thread 3 with ID: 2
This statement is being printed under thread 3 with ID: 3
This statement is being printed under thread 4 with ID: 4
This statement is being printed under thread 0 with ID: 5
This statement is being printed under thread 1 with ID: 6 `
        },
        {
            id: "lab-2-output-3",
            labName: "Lab 2 Output 3",
            labCount: "3",
            labOutput: `Parent thread started. ID: ${generateRandom(1100, 4000)}
Child thread started. ID: ${generateRandom(4000, 12000)}
Waiting for child thread to finish...
Child thread finished.
Parent thread finished.`
        },
    ]
]

export default labOutputsDetails
