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
  ],
  [
    {
      id: "lab-3-output-1",
      labName: "Lab 3 Output 1",
      labCount: "3",
      labOutput: `Enter the no of processes : 2

Enter the no of resources : ${generateRandom(1, 10)}

Enter the Max Matrix for each process : 
For process 0 : ${generateRandom(1, 10)}
${generateRandom(1, 10)}
6

For process 1 : ${generateRandom(1, 10)}
${generateRandom(1, 10)}
${generateRandom(1, 10)}

Enter the allocation for each process : 
For process 0 : ${generateRandom(1, 10)}
${generateRandom(1, 10)}
${generateRandom(1, 10)}

For process 1 : ${generateRandom(1, 10)}
${generateRandom(1, 10)}
${generateRandom(1, 10)}

Enter the Current Available Resources with OS : ${generateRandom(1, 10)}
${generateRandom(1, 10)}
${generateRandom(1, 10)}

Process 0 runs to completion!
Process 1 runs to completion!
The system is in a safe state!!
Safe Sequence : < 0 1 > `
    }
  ],
  [
    {
      id: "lab-5-output-1",
      labName: "Lab 5 Output 1",
      labCount: "5",
      labOutput: `
                        Memory Management Scheme - First Fit
Enter the number of blocks:6
Enter the number of processes:5

Enter the size of the blocks:-
Block no.1:24
Block no.2:28
Block no.3:56
Block no.4:66
Block no.5:85
Block no.6:96

Enter the size of the processes :-
Process no.1:2
Process no.2:3
Process no.3:5
Process no.4:8
Process no.5:6

Block no.  size          process no.        size
1          1997332848    1                  1997308285
2          24            2                  2
3          28            3                  3
4          56            4                  5
5          66            5                  8
6          85            Not allocated
`
    }
  ]
]

export default labOutputsDetails
