const employees = [
    {
        id: 1,
        firstname: "Aarav",
        email: "employee1@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Task 1",
                description: "Complete the project report.",
                date: "2025-01-07",
                category: "Documentation"
            },
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                title: "Task 2",
                description: "Fix login page bugs.",
                date: "2025-01-06",
                category: "Bug Fixing"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Task 3",
                description: "Prepare presentation slides.",
                date: "2025-01-05",
                category: "Presentation"
            }
        ],
        taskNumber: { active: 1, newTask: 1, completed: 1, failed: 0 }
    },
    {
        id: 2,
        firstname: "Ishaan",
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Task 1",
                description: "Design new homepage layout.",
                date: "2025-01-07",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Task 2",
                description: "Update user profile API.",
                date: "2025-01-04",
                category: "Backend"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Task 3",
                description: "Refactor code for dashboard.",
                date: "2025-01-02",
                category: "Code Refactoring"
            }
        ],
        taskNumber: { active: 1, newTask: 1, completed: 1, failed: 1 }
    },
    {
        id: 3,
        firstname: "Vedant",
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                title: "Task 1",
                description: "Write unit tests for the payment module.",
                date: "2025-01-03",
                category: "Testing"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Task 2",
                description: "Optimize database queries.",
                date: "2025-01-06",
                category: "Database Optimization"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Task 3",
                description: "Deploy application to staging server.",
                date: "2025-01-01",
                category: "Deployment"
            }
        ],
        taskNumber: { active: 1, newTask: 1, completed: 1, failed: 0 }
    },
    {
        id: 4,
        firstname: "Diya",
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Task 1",
                description: "Create a new feature for file upload.",
                date: "2025-01-07",
                category: "Feature Development"
            },
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                title: "Task 2",
                description: "Research on new libraries for the project.",
                date: "2025-01-05",
                category: "Research"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Task 3",
                description: "Fix CSS issues on the dashboard.",
                date: "2025-01-03",
                category: "UI/UX"
            }
        ],
        taskNumber: { active: 1, newTask: 1, completed: 1, failed: 0 }
    },
    {
        id: 5,
        firstname: "Ananya",
        email: "employee5@example.com",
        password: "123",
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Task 1",
                description: "Set up automated CI/CD pipeline.",
                date: "2025-01-07",
                category: "DevOps"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Task 2",
                description: "Update product documentation.",
                date: "2025-01-06",
                category: "Documentation"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Task 3",
                description: "Implement new notification system.",
                date: "2025-01-04",
                category: "Feature Development"
            }
        ],
        taskNumber: { active: 1, newTask: 1, completed: 1, failed: 1 }
    }
];

const admin = [
    {
        id: 1,
        firstname:'Vivek',
        email: "admin@example.com",
        password: "123"
    }
];

export const setLocalStorage = () => {

    console.log('Set local storage is called');
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
    
}

export const getLocalStorage = () => {
    
   const employees = JSON.parse(localStorage.getItem('employees'));
   const admin = JSON.parse(localStorage.getItem('admin'));
   
    return {employees,admin}
}