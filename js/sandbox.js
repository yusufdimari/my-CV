const skillSet=[
    {
    title:'HTML',
    range:90,
},
{
    title:'CSS',
    range:50
},
{
    title:'JavaScript',
    range:70
},
{
    title:'C',
    range:80
},
{
    title:'C++',
    range:30
},
{
    title:'Python',
    range:10
},
{
    title:'React',
    range:40,
},
{
    title:'React Native',
    range:90
},
{
    title:' Firebase',
    range:100
},
]
const experiencesSet=[
    {
    title:"Rahza Soft LTD",
    period:'August 2017'
},
{
    title:"Sheikh Abubakar Gummi Academy",
    period:'SEP 2019 TO JUN 2019'
},
{
    title:"Nile University of Nigeria",
    period:'SEP 2019 till date'
},
{
    title:"Leadership Perspectives Limited",
    period:'OCT 2019 to date'
},
{
    title:"Nigerian National Petroleum Corporation",
    period:'JUL 2021 to OCT 2021'
},
]
const projectsSet=[
    {
        from:'AUG 2017',
        to:'SEP2017',
        title:"SIMPLE WEBPAGE",
        client:"Rahza Soft, Abuja",
        environment:"Notepad++"
    },
    {
        from:'NOV 2018',
        to:'JAN 2019',
        title:"SCRATCH",
        client:"Sheikh Gummi Academy, Abuja",
        environment:"Gaming and Animation, Scratch"
    },
    {
        from:'NOV 2020',
        to:'DEC 2020',
        title:"STATIC WEBSITE",
        client:"MR Umar Adam Ibrahim",
        environment:"HTML & CSS, Notepad++"
    },
    {
        from:'NOV 2020',
        to:'DEC 2020',
        title:"DYNAMIC WEBSITE",
        client:"MR Umar Adam Ibrahim",
        environment:"HTML, CSS & PHP, Notepad++ & Xampp"
    },
    {
        from:'AUG 2021',
        to:'SEP 2021',
        title:"TO-DO LIST",
        client:"MR Mahdi Aminu",
        environment:"Mobile App, React Native"
    },
    {
        from:'SEP 2021',
        to:'OCT 2019',
        title:"TIC-TAC-TOE GAME",
        client:"MR Badero",
        environment:"Mobile App, React Native"
    },

]

const loadSkills=()=>{
    const skills=document.querySelector('.skills')
    const sortedArray=skillSet.sort(function(a,b){return b.range-a.range})
    for (let i=0;i<sortedArray.length; i++){
                    let html=`<div class="skill">
                    <div class="skill-name">
                    ${sortedArray[i].title}
                    </div>
                    <div class="range-container">
                    <div class="range" style="width:${sortedArray[i].range}%"></div>
                    </div>
                    </div>`
                    skills.innerHTML+=html   
                }
}
const loadExperiences=()=>{
    const experiences=document.querySelector('.experiences')
    experiencesSet.forEach(experience=>{
        let html=`<li>${experience.title}</br><span class="detail2">${experience.period}</span></li>`
        experiences.innerHTML+=html
    })
}

const loadProjects=()=>{
    const projects=document.querySelector('.projects')
    projectsSet.forEach(project=>{
        let html=`<div class="project">
        <div class="section1">
            <p>${project.from}</p>
            <p>to</p>
            <p>${project.to}</p>
        </div>
        <div class="separator">
            <div class="v-line"></div>
        </div>
        <div class="section2">
            <p class="project-title">${project.title}</p>
            <p class="client">Client: ${project.client}</p>
            <p class="env-details">Environment: ${project.environment}</p>
        </div>
    </div>`
        projects.innerHTML+=html
    })
}

const load=()=>{
    loadSkills()
    loadExperiences()
    loadProjects()
}
document.onload=load()
