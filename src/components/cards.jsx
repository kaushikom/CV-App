import '../styles/cards.css'
import Input from './InputControl/inputControl';
import GenericCard from './genericCard';
import { useState } from 'react';

function PersonalDetailsCard() {
    return (
        <GenericCard title='Personal Details'>
            <Input required label='Full Name' placeholder='Enter your full name' />
            <Input required label='Email' placeholder='Email' />
            <Input required label='Job Title' placeholder='Job Title' />
            <Input required label='City and Providence' placeholder='City,Providence' />
            <Input required label='LinkedIn' placeholder='LinkedIn profile url' />
            <Input label='Github (optional)' placeholder='Github profile url' />
            <Input label='Portfolio (optional)' placeholder='Portfolio url' />
        </GenericCard>
    )
}
function ExperienceCard() {

    return (
        <GenericCard title='Experience' >
            <Input label='Company Name' placeholder='Enter company name' />
            <Input label='Location' placeholder='City,Providence' />
            <Input label='Job Title' placeholder='Enter Job Title' />
            <Input label='Start Date' type='date' />
            <Input label='End Date' type='date' />
            <label>Job Description</label>
            <textarea placeholder='Enter Job Description'></textarea>
        </GenericCard>
    )
}
function EducationCard() {
    return (
        <GenericCard title='Education'>

            <Input label='School/University' placeholder='Enter School/University name' />
            <Input label='Location' placeholder='City,Providence' />
            <Input label='Degree' placeholder='Enter degree name' />
            <Input label='Field of study' placeholder='e.g. Engineering' />
            <Input label='Graduation year' type='number' placeholder='Enter graduation year' />
        </GenericCard>
    )
}
function ProjectsCard() {
    return (
        <GenericCard title='Projects'>

            <Input label='Project Title' placeholder='Enter project title' />
            <label for='p-description' >Project description</label>
            <textarea placeholder='Enter project description'></textarea>
            <Input label='Github' placeholder='Github link' />
            <Input label='Deployment' placeholder='Deployment link' />
        </GenericCard>
    )
}
function CertificationsCard() {
    return (
        <GenericCard title='Certifications'>

            <Input label='Certificate title' placeholder='Enter certificate title' />
            <Input label='Issued by' placeholder='Enter certificate issuer' />
            <label>Description</label>
            <textarea placeholder='Enter description'></textarea>
        </GenericCard>

    )
}
function SkillsCard() {
    return (
        <GenericCard title='Skills'>

            <Input label='Section name' placeholder='e.g. Web Development Skills' />
            <Input label='Skills' placeholder='e.g. JavaScript, React.js, etc' />
        </GenericCard>
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