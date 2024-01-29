import '../styles/cards.css'
import Input from './InputControl/inputControl';

function PersonalDetailsCard() {
    return (
        <form className='card shadow'>
            <h2>Personal Details</h2>
            <Input required label='Full Name' placeholder='Enter your full name' />
            <Input required label='Email' placeholder='Email' />
            <Input required label='Job Title' placeholder='Job Title' />
            <Input required label='City and Providence' placeholder='City,Providence' />
            <Input required label='LinkedIn' placeholder='LinkedIn profile url' />
            <Input label='Github (optional)' placeholder='Github profile url' />
            <Input label='Portfolio (optional)' placeholder='Portfolio url' />
        </form>
    )
}
function ExperienceCard() {
    return (
        <form className='card shadow'>
            <h2>Experience</h2>
            <Input label='Company Name' placeholder='Enter company name' />
            <Input label='Location' placeholder='City,Providence' />
            <Input label='Job Title' placeholder='Enter Job Title' />
            <Input label='Start Date' type='date' />
            <Input label='End Date' type='date' />
            <label>Job Responsibilities</label>
            <textarea placeholder='Enter Job Responsibilities'></textarea>
        </form>
    )
}
function EducationCard() {
    return (
        <form className='card shadow'>
            <h2>Education</h2>
            <Input label='School/University' placeholder='Enter School/University name' />
            <Input label='Location' placeholder='City,Providence' />
            <Input label='Degree' placeholder='Enter degree name' />
            <Input label='Field of study' placeholder='e.g. Engineering' />
            <Input label='Graduation year' type='number' placeholder='Enter graduation year' />
        </form>
    )
}
function ProjectsCard() {
    return (
        <form className='card shadow'>
            <h2>Projects</h2>
            <Input label='Project Title' placeholder='Enter project title' />
            <label for='p-description' >Project description</label>
            <textarea placeholder='Enter project description'></textarea>
            <Input label='Github' placeholder='Github link' />
            <Input label='Deployment' placeholder='Deployment link' />
        </form>
    )
}
function CertificationsCard() {
    return (
        <form className='card shadow' >
            <h2>Certifications</h2>
            <Input label='Certificate title' placeholder='Enter certificate title' />
            <Input label='Issued by' placeholder='Enter certificate issuer' />
            <label>Description</label>
            <textarea placeholder='Enter description'></textarea>
        </form>
    )
}
function SkillsCard() {
    return (
        <form className='card shadow'>
            <h2>Skills</h2>
            <Input label='Section name' placeholder='e.g. Web Development Skills' />
            <Input label='Skills' placeholder='e.g. JavaScript, React.js, etc' />
        </form>
    )
}
function Cards() {

    return (
        <>
            <PersonalDetailsCard />
            <ExperienceCard />
            <ProjectsCard />
            <SkillsCard />
            <CertificationsCard />
            <EducationCard />
        </>
    )
}

export default Cards;