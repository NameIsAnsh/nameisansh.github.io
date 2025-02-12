document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "Traffic Anomaly Detection in Urban Traffic",
            tools: "Python, TensorFlow, OpenCV",
            description: [
                "Built a deep learning system to detect traffic anomalies using CCTV footage.",
                "Used CNNs and RNNs for spatiotemporal analysis of traffic data.",
                "Implemented real-time anomaly detection for traffic authorities."
            ]
        },
        {
            title: "AWS-Based Real-Time Traffic Data Pipeline",
            tools: "AWS (Kinesis, Lambda, S3, Redshift)",
            description: [
                "Designed a serverless pipeline for real-time traffic data processing.",
                "Used Amazon Kinesis for data streaming and Lambda for preprocessing.",
                "Stored processed data in Redshift and visualized insights via a dashboard."
            ]
        },
        {
            title: "Publication Summary Generator",
            tools: "Flask, BeautifulSoup, SQLite/PostgreSQL",
            description: [
                "Developed a web app to generate summaries from Google Scholar and DBLP.",
                "Supported input via Excel/BibTeX and export to Word/Excel.",
                "Stored faculty data in a database for year-wise publication breakdowns."
            ]
        }
    ];

    const skills = [
        "Programming Languages: Python (Advanced), C (Basic), C++ (Basic)",
        "Frameworks and Libraries: Django, Flask, Vue.js, TensorFlow, PyTorch, OpenCV, NumPy, Pandas, Matplotlib, Scikit-learn",
        "Database Management: SQLite, PostgreSQL",
        "Cloud Technologies: AWS (EC2, S3, RDS, Lambda, Kinesis, Redshift, IAM, CloudFormation, API Gateway)",
        "Linux Administration: Basic shell scripting, system monitoring, process management, networking, user and permission management",
        "Version Control: Git"
    ];

    const coursework = [
        "Data Structures and Algorithms",
        "Software Engineering",
        "Computer Networking",
        "Database Management Systems",
        "Compiler Design",
        "Operating Systems"
    ];

    const experience = [
        {
            company: "PhysioPlus",
            role: "Machine Learning Intern",
            duration: "July 2024 -- August 2024",
            description: [
                "Developed ML models to predict patient interaction patterns.",
                "Integrated models into the healthcare management system using Python.",
                "Preprocessed and analyzed large datasets for insights."
            ]
        }
    ];

    const education = [
        {
            institution: "Poornima College of Engineering",
            location: "Jaipur, Rajasthan",
            degree: "Bachelor of Technology in Computer Science and Engineering (CGPA-9.1)",
            duration: "Aug. 2022 -- May 2026"
        },
        {
            institution: "Central Academy Sr Sec School",
            location: "Jaipur, Rajasthan",
            degree: "CBSE Board, 12th Standard",
            duration: "2021"
        }
    ];

    // Populate Projects
    const projectList = document.querySelector('.project-list');
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `
            <h3>${project.title} | <em>${project.tools}</em></h3>
            <ul>
                ${project.description.map(desc => `<li>${desc}</li>`).join('')}
            </ul>
        `;
        projectList.appendChild(projectItem);
    });

    // Populate Skills
    const skillsList = document.querySelector('.skills-list');
    skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });

    // Populate Coursework
    const courseworkList = document.querySelector('.coursework-list');
    coursework.forEach(course => {
        const courseItem = document.createElement('li');
        courseItem.textContent = course;
        courseworkList.appendChild(courseItem);
    });

    // Populate Experience
    const experienceList = document.querySelector('.experience-list');
    experience.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = 'experience-item';
        expItem.innerHTML = `
            <h3>${exp.company}</h3>
            <p><em>${exp.role}</em> | ${exp.duration}</p>
            <ul>
                ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
            </ul>
        `;
        experienceList.appendChild(expItem);
    });

    // Populate Education
    const educationList = document.querySelector('.education-list');
    education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = 'education-item';
        eduItem.innerHTML = `
            <h3>${edu.institution}</h3>
            <p>${edu.location}</p>
            <p><em>${edu.degree}</em> | ${edu.duration}</p>
        `;
        educationList.appendChild(eduItem);
    });
});
