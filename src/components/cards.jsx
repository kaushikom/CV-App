import '../styles/cards.css'
import Input from './InputControl/inputControl';
import GenericCard from './genericCard';
import { useState } from 'react';

function PersonalDetailsCard({ information, updateResumeInfo }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        job: '',
        location: '',
        linkedIn: '',
        github: '',
        portfolio: ''
    })
    const handleInputChange = (fieldName, value) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateResumeInfo('personalDetails', formData);
    };
    return (
        <GenericCard title='Personal Details' onSubmit={handleSubmit}>
            <Input required label='Full Name' placeholder='Enter your full name' value={formData.name} onChange={e => handleInputChange('name', e.target.value)} />
            <Input required label='Email' placeholder='Email' value={formData.email} onChange={e => handleInputChange('email', e.target.value)} />
            <Input required label='Job Title' placeholder='Job Title' value={formData.job} onChange={e => handleInputChange('job', e.target.value)} />
            <Input required label='City and Providence' placeholder='City,Providence' value={formData.location} onChange={e => handleInputChange('location', e.target.value)} />
            <Input required label='LinkedIn' placeholder='LinkedIn profile url' value={formData.linkedIn} onChange={e => handleInputChange('linkedIn', e.target.value)} />
            <Input label='Github (optional)' placeholder='Github profile url' value={formData.github} onChange={e => handleInputChange('github', e.target.value)} />
            <Input label='Portfolio (optional)' placeholder='Portfolio url' value={formData.portfolio} onChange={e => handleInputChange('portfolio', e.target.value)} />
            <button>Submit</button>
        </GenericCard>
    )
}
function ExperienceCard({ information, updateResumeInfo }) {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        job: '',
        sDate: '',
        eDate: '',
        description: ''
    })
    const handleInputChange = (fieldName, value) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateResumeInfo('experience', formData);
    };
    return (
        <GenericCard title='Experience' onSubmit={handleSubmit} >
            <Input label='Company Name' placeholder='Enter company name' value={formData.name} onChange={e => handleInputChange('name', e.target.value)} />
            <Input label='Location' placeholder='City,Providence' value={formData.location} onChange={e => handleInputChange('location', e.target.value)} />
            <Input label='Job Title' placeholder='Enter Job Title' value={formData.job} onChange={e => handleInputChange('job', e.target.value)} />
            <Input label='Start Date' type='month' value={formData.sDate} onChange={e => handleInputChange('sDate', e.target.value)} />
            <Input label='End Date' type='month' value={formData.eDate} onChange={e => handleInputChange('eDate', e.target.value)} />
            <label>Job Description</label>
            <textarea placeholder='Enter Job Description' value={formData.description} onChange={e => handleInputChange('description', e.target.value)} ></textarea>
            <button>Submit</button>
        </GenericCard>
    )
}
function EducationCard({ information, updateResumeInfo }) {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        degree: '',
        field: '',
        gYear: ''
    })
    const handleInputChange = (fieldName, value) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateResumeInfo('education', formData);
    }
    return (
        <GenericCard title='Education' onSubmit={handleSubmit} >
            <Input label='School/University' placeholder='Enter School/University name' value={formData.name} onChange={e => handleInputChange('name', e.target.value)} />
            <Input label='Location' placeholder='City,Providence' value={formData.location} onChange={e => handleInputChange('location', e.target.value)} />
            <Input label='Degree' placeholder='Enter degree name' value={formData.degree} onChange={e => handleInputChange('degree', e.target.value)} />
            <Input label='Field of study' placeholder='e.g. Engineering' value={formData.field} onChange={e => handleInputChange('field', e.target.value)} />
            <Input label='Graduation year' type='number' placeholder='Enter graduation year' value={formData.gYear} onChange={e => handleInputChange('gYear', e.target.value)} />
            <button>Submit</button>
        </GenericCard>
    )
}
function ProjectsCard({ information, updateResumeInfo }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        github: '',
        liveLink: ''
    })
    const handleInputChange = (fieldName, value) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateResumeInfo('projects', formData);
    }
    return (
        <GenericCard title='Projects' onSubmit={handleSubmit} >
            <Input label='Project Title' placeholder='Enter project title' value={formData.name} onChange={e => handleInputChange('name', e.target.value)} />
            <label for='p-description' >Project description</label>
            <textarea placeholder='Enter project description' value={formData.description} onChange={e => handleInputChange('description', e.target.value)} ></textarea>
            <Input label='Github' placeholder='Github link' value={formData.github} onChange={e => handleInputChange('github', e.target.value)} />
            <Input label='Deployment' placeholder='Deployment link' value={formData.liveLink} onChange={e => handleInputChange('liveLink', e.target.value)} />
            <button>Submit</button>
        </GenericCard>
    )
}
function CertificationsCard({ information, updateResumeInfo }) {
    const [formData, setFormData] = useState({
        name: '',
        issuer: '',
        description: ''
    })
    const handleInputChange = (fieldName, value) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateResumeInfo('certifications', formData);
    }
    return (
        <GenericCard title='Certifications' onSubmit={handleSubmit} >
            <Input label='Certificate title' placeholder='Enter certificate title' value={formData.name} onChange={e => handleInputChange('name', e.target.value)} />
            <Input label='Issued by' placeholder='Enter certificate issuer' value={formData.issuer} onChange={e => handleInputChange('issuer', e.target.value)} />
            <label>Description</label>
            <textarea placeholder='Enter description' value={formData.description} onChange={e => handleInputChange('description', e.target.value)} ></textarea>
            <button>Submit</button>
        </GenericCard>

    )
}
function SkillsCard({ information, updateResumeInfo }) {
    const [formData, setFormData] = useState({
        name: '',
        skills: ''
    })
    const handleInputChange = (fieldName, value) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateResumeInfo('skills', formData)
    }
    return (
        <GenericCard title='Skills' onSubmit={handleSubmit} >
            <Input label='Section name' value={formData.name} onChange={e => handleInputChange('name', e.target.value)} placeholder='e.g. Web Development Skills' />
            <Input label='Skills' value={formData.skills} onChange={e => handleInputChange('skills', e.target.value)} placeholder='e.g. JavaScript, React.js, etc' />
            <button>Submit</button>
        </GenericCard>
    )
}
function Cards(props) {
    const information = props.info;
    const updateResumeInfo = props.updateResumeInfo;

    return (
        <>
            <PersonalDetailsCard information={information.personalDetails} updateResumeInfo={updateResumeInfo} />
            <ExperienceCard information={information.experience} updateResumeInfo={updateResumeInfo} />
            <ProjectsCard information={information.projects} updateResumeInfo={updateResumeInfo} />
            <SkillsCard information={information.skills} updateResumeInfo={updateResumeInfo} />
            <CertificationsCard information={information.certifications} updateResumeInfo={updateResumeInfo} />
            <EducationCard information={information.education} updateResumeInfo={updateResumeInfo} />
        </>
    )
}

export default Cards;