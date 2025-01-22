// Create an array with 5 students name after that create a function which takes 2 parameter

// (allstudent,studentname) iterate all students and find that specific user 'Student Name'

const allStudents = ['jhon', 'alice', 'bob', 'sophie', 'bicky'];


// O(n) Notation

function student(allStudents, studentName) {
    const isPresentStudent = allStudents.find((student) => student === studentName);
    if (!isPresentStudent) {
        console.log(`${studentName} not Present in [${allStudents}] List `);
    }
    else {
        console.log(`${studentName} Present in [${allStudents}] List `);
    }
}

student(allStudents, 'jane');