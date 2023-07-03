const data = {
  employees: [
    {
      id: 1,
      name: "John Doe",
      position: "Manager",
      salary: 5000,
      skills: ["javascript", "React", "Node.js"],
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Developer",
      salary: 4000,
      skills: ["Leadership, Problem solving, Project management"],
    },
  ],
  companyname: "Eldohub",
};
//tasks
//1.log the word manager from this dataset
console.log(data.employees[0].position);
//2.log the salary of the second employee

console.log(data.employees[1].salary);
//3.print the last skill for the employee Joh Doe(node js)
console.log(data.employees[0].skills[2]);
