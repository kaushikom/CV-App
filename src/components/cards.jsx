import '../styles/cards.css'
import deleteIcon from '../assets/delete-icon.png'
import Input from './InputControl/inputControl';
import GenericCard from './genericCard';
import { useState } from 'react';

function PersonalDetailsCard({ information, updateResumeInfo }) {
    const generateInitialState = () => ({
        name: '',
        email: '',
        job: '',
        location: '',
        linkedIn: '',
        github: '',
        portfolio: ''
    })
    const [formData, setFormData] = useState(generateInitialState());
    const handleInputChange = (fieldName, value) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateResumeInfo('personalDetails', formData);
        setFormData(generateInitialState());
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
function ExperienceCard({ information, updateResumeInfo, deleteResumeInfo }) {
    const [cardSate, setCardState] = useState(false);
    const generateInitialState = () => ({
        name: '',
        location: '',
        job: '',
        sDate: '',
        eDate: '',
        description: ''
    })
    const [formData, setFormData] = useState(generateInitialState());
    const handleInputChange = (fieldName, value) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateResumeInfo('experience', formData);
        setFormData(generateInitialState());
        toggleCardState();
    };
    const toggleCardState = () => {
        setCardState(!cardSate);
    }
    const handleEdit = (e) => {
        const index = information.details.findIndex(item => item.name === e.target.innerText);
        setFormData(information.details[index]);
        toggleCardState();
    }
    const handleDelete = (e) => {
        const index = information.details.findIndex(item => item.name === e.target.alt);
        deleteResumeInfo('experience', index);
    }
    return (
        <GenericCard title='Experience' onSubmit={handleSubmit} >

            {cardSate ? (
                <>

                    <Input label='Company Name' placeholder='Enter company name' value={formData.name} onChange={e => handleInputChange('name', e.target.value)} />
                    <Input label='Location' placeholder='City,Providence' value={formData.location} onChange={e => handleInputChange('location', e.target.value)} />
                    <Input label='Job Title' placeholder='Enter Job Title' value={formData.job} onChange={e => handleInputChange('job', e.target.value)} />
                    <Input label='Start Date' type='month' value={formData.sDate} onChange={e => handleInputChange('sDate', e.target.value)} />
                    <Input label='End Date' type='month' value={formData.eDate} onChange={e => handleInputChange('eDate', e.target.value)} />
                    <label>Job Description</label>
                    <textarea placeholder='Enter Job Description' value={formData.description} onChange={e => handleInputChange('description', e.target.value)} ></textarea>
                    <button>Submit</button>

                </>
            ) :
                (<>
                    {information.details.map(item => <div className='section-name' key={item.name} ><h2 onClick={handleEdit}>{item.name}</h2><img onClick={handleDelete} src={deleteIcon} alt={item.name} /></div>)}
                    <button onClick={toggleCardState} >Add Experience</button>
                </>)
            }
        </GenericCard>
    )
}
function EducationCard({ information, updateResumeInfo, deleteResumeInfo }) {
    const [cardSate, setCardState] = useState(false);
    const generateInitialState = () => ({
        name: '',
        location: '',
        degree: '',
        field: '',
        gYear: ''
    })
    const [formData, setFormData] = useState(generateInitialState());
    const handleInputChange = (fieldName, value) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateResumeInfo('education', formData);
        setFormData(generateInitialState());
        toggleCardState();
    }
    const toggleCardState = () => {
        setCardState(!cardSate);
    }
    const handleEdit = (e) => {
        const index = information.details.findIndex(item => item.name === e.target.innerText);
        setFormData(information.details[index]);
        toggleCardState();
    }
    const handleDelete = (e) => {
        const index = information.details.findIndex(item => item.name === e.target.alt);
        deleteResumeInfo('education', index);
    }
    return (
        <GenericCard title='Education' onSubmit={handleSubmit} >
            {cardSate ? (
                <>
                    <Input label='School/University' placeholder='Enter School/University name' value={formData.name} onChange={e => handleInputChange('name', e.target.value)} />
                    <Input label='Location' placeholder='City,Providence' value={formData.location} onChange={e => handleInputChange('location', e.target.value)} />
                    <Input label='Degree' placeholder='Enter degree name' value={formData.degree} onChange={e => handleInputChange('degree', e.target.value)} />
                    <Input label='Field of study' placeholder='e.g. Engineering' value={formData.field} onChange={e => handleInputChange('field', e.target.value)} />
                    <Input label='Graduation year' type='number' placeholder='Enter graduation year' value={formData.gYear} onChange={e => handleInputChange('gYear', e.target.value)} />
                    <button>Submit</button>
                </>
            ) :
                (
                    <>
                        {information.details.map(item => <div className='section-name' key={item.name} ><h2 onClick={handleEdit} >{item.name}</h2><img onClick={handleDelete} src={deleteIcon} alt={item.name} /></div>)}
                        <button onClick={toggleCardState} >Add Education</button>
                    </>
                )
            }

        </GenericCard>
    )
}
function ProjectsCard({ information, updateResumeInfo, deleteResumeInfo }) {
    const [cardSate, setCardState] = useState(false);
    const generateInitialState = () => ({
        name: '',
        description: '',
        github: '',
        liveLink: ''
    })
    const [formData, setFormData] = useState(generateInitialState());
    const handleInputChange = (fieldName, value) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateResumeInfo('projects', formData);
        setFormData(generateInitialState());
        toggleCardState();
    }
    const toggleCardState = () => {
        setCardState(!cardSate);
    }
    const handleEdit = (e) => {
        const index = information.details.findIndex(item => item.name === e.target.innerText);
        setFormData(information.details[index]);
        toggleCardState();
    }
    const handleDelete = (e) => {
        const index = information.details.findIndex(item => item.name === e.target.alt);
        deleteResumeInfo('projects', index);
    }
    return (
        <GenericCard title='Projects' onSubmit={handleSubmit} >
            {cardSate ? (<>
                <Input label='Project Title' placeholder='Enter project title' value={formData.name} onChange={e => handleInputChange('name', e.target.value)} />
                <label for='p-description' >Project description</label>
                <textarea placeholder='Enter project description' value={formData.description} onChange={e => handleInputChange('description', e.target.value)} ></textarea>
                <Input label='Github' placeholder='Github link' value={formData.github} onChange={e => handleInputChange('github', e.target.value)} />
                <Input label='Deployment' placeholder='Deployment link' value={formData.liveLink} onChange={e => handleInputChange('liveLink', e.target.value)} />
                <button>Submit</button>
            </>) :
                (
                    <>
                        {information.details.map(item => <div className='section-name' key={item.name} ><h2 onClick={handleEdit}>{item.name}</h2><img onClick={handleDelete} src={deleteIcon} alt={item.name} /></div>)}
                        <button onClick={toggleCardState} >Add Projects</button>
                    </>)

            }

        </GenericCard>
    )
}
function CertificationsCard({ information, updateResumeInfo, deleteResumeInfo }) {
    const [cardSate, setCardState] = useState(false);
    const generateInitialState = () => ({
        name: '',
        issuer: '',
        description: ''
    })
    const [formData, setFormData] = useState(generateInitialState());
    const handleInputChange = (fieldName, value) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateResumeInfo('certifications', formData);
        setFormData(generateInitialState());
        toggleCardState();
    }
    const toggleCardState = () => {
        setCardState(!cardSate);
    }
    const handleEdit = (e) => {
        const index = information.details.findIndex(item => item.name === e.target.innerText);
        setFormData(information.details[index]);
        toggleCardState();
    }
    const handleDelete = (e) => {
        const index = information.details.findIndex(item => item.name === e.target.alt);
        deleteResumeInfo('certifications', index);
    }
    return (
        <GenericCard title='Certifications' onSubmit={handleSubmit} >
            {cardSate ? (
                <>
                    <Input label='Certificate title' placeholder='Enter certificate title' value={formData.name} onChange={e => handleInputChange('name', e.target.value)} />
                    <Input label='Issued by' placeholder='Enter certificate issuer' value={formData.issuer} onChange={e => handleInputChange('issuer', e.target.value)} />
                    <label>Description</label>
                    <textarea placeholder='Enter description' value={formData.description} onChange={e => handleInputChange('description', e.target.value)} ></textarea>
                    <button>Submit</button>
                </>
            ) :
                (<>
                    {information.details.map(item => <div className='section-name' key={item.name} ><h2 onClick={handleEdit}>{item.name}</h2><img onClick={handleDelete} src={deleteIcon} alt={item.name} /></div>)}
                    <button onClick={toggleCardState} >Add Experience</button>
                </>)}

        </GenericCard>

    )
}
function SkillsCard({ information, updateResumeInfo, deleteResumeInfo }) {
    const [cardSate, setCardState] = useState(false);
    const generateInitialState = () => ({
        name: '',
        skills: ''
    })
    const [formData, setFormData] = useState(generateInitialState());
    const handleInputChange = (fieldName, value) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateResumeInfo('skills', formData)
        setFormData(generateInitialState());
        toggleCardState();
    }
    const toggleCardState = () => {
        setCardState(!cardSate);
    }
    const handleEdit = (e) => {
        const index = information.details.findIndex(item => item.name === e.target.innerText);
        setFormData(information.details[index]);
        toggleCardState();
    }
    const handleDelete = (e) => {
        const index = information.details.findIndex(item => item.name === e.target.alt);
        deleteResumeInfo('skills', index);
    }
    return (
        <GenericCard title='Skills' onSubmit={handleSubmit} >
            {cardSate ? (
                <>
                    <Input label='Section name' value={formData.name} onChange={e => handleInputChange('name', e.target.value)} placeholder='e.g. Web Development Skills' />
                    <Input label='Skills' value={formData.skills} onChange={e => handleInputChange('skills', e.target.value)} placeholder='e.g. JavaScript, React.js, etc' />
                    <button>Submit</button>
                </>
            ) : (
                <>
                    {information.details.map(item => <div className='section-name' key={item.name} ><h2 onClick={handleEdit}>{item.name}</h2><img onClick={handleDelete} src={deleteIcon} alt={item.name} /></div>)}
                    <button onClick={toggleCardState} >Add Experience</button>
                </>
            )}

        </GenericCard>
    )
}
function Cards(props) {
    const information = props.info;
    const updateResumeInfo = props.updateResumeInfo;
    const deleteResumeInfo = props.deleteResumeInfo;

    return (
        <>
            <PersonalDetailsCard information={information.personalDetails} updateResumeInfo={updateResumeInfo} deleteResumeInfo={deleteResumeInfo} />
            <ExperienceCard information={information.experience} updateResumeInfo={updateResumeInfo} deleteResumeInfo={deleteResumeInfo} />
            <ProjectsCard information={information.projects} updateResumeInfo={updateResumeInfo} deleteResumeInfo={deleteResumeInfo} />
            <SkillsCard information={information.skills} updateResumeInfo={updateResumeInfo} deleteResumeInfo={deleteResumeInfo} />
            <CertificationsCard information={information.certifications} updateResumeInfo={updateResumeInfo} deleteResumeInfo={deleteResumeInfo} />
            <EducationCard information={information.education} updateResumeInfo={updateResumeInfo} deleteResumeInfo={deleteResumeInfo} />
        </>
    )
}

export default Cards;