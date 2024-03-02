import '../styles/display.css'
import emailIcon from '../assets/resumeIcons/icons8-email-48.png'
import githubIcon from '../assets/resumeIcons/icons8-github-48.png'
import linkedInIcon from '../assets/resumeIcons/icons8-linkedin-48.png'
import locationIcon from '../assets/resumeIcons/icons8-location-48.png'
import webIcon from '../assets/resumeIcons/icons8-web-48.png'
import { forwardRef } from 'react'

const display = forwardRef(({ info }, ref) => {
    const latestPersonalDetails = info.personalDetails.details[info.personalDetails.details.length - 1]
    return (
        <main className='display-container' ref={ref}>
            {latestPersonalDetails && <div className="personalDetails">
                <h1>{latestPersonalDetails.name}</h1>
                <nav>
                    <div className="details"><img src={emailIcon} alt="" /><span></span><a href={`mailto:${latestPersonalDetails.email}`}>{latestPersonalDetails.email}</a></div>
                    <div className="details"><img src={locationIcon} alt="" /><span>{latestPersonalDetails.location}</span></div>
                    <div className="details"><img src={linkedInIcon} alt="" /><span><a href={latestPersonalDetails.linkedIn}>{latestPersonalDetails.linkedIn}</a></span></div>
                    {latestPersonalDetails.github &&
                        <div className="details"><img src={githubIcon} alt="" /><span><a href={latestPersonalDetails.github}>{latestPersonalDetails.github}</a></span></div>
                    }
                    {latestPersonalDetails.portfolio &&
                        <div className="details"><img src={webIcon} alt="" /><span><a href={latestPersonalDetails.portfolio}>{latestPersonalDetails.portfolio}</a></span></div>
                    }
                </nav>
            </div>}
            <div className="container">
                <div className="small-sections">
                    {info.skills.details[0] && <div className="section-container">
                        <h2>Skills</h2>
                        {info.skills.details.map(skill => <div className='skill' key={skill.name}><h3>{skill.name}</h3><p>{skill.skills}</p></div>)}
                    </div>}
                    {info.education.details[0] && <div className="section-container">
                        <h2>Education</h2>
                        {info.education.details.map(detail => <div className="education" key={detail.name} ><h3>{detail.name}-{detail.location}</h3><p><i>{detail.degree}</i> in <i> {detail.field}</i> <br /> Graduated In : <b>{detail.gYear}</b> </p></div>)}
                    </div>}
                    {info.certifications.details[0] && <div className="section-container">
                        <h2>Certifications</h2>
                        {info.certifications.details.map(detail => <div className="cert" key={detail.name} ><h3>{detail.name}</h3><p>-<i>{detail.issuer}</i><br /> {detail.description}</p></div>)}
                    </div>}
                </div>
                <div className="large-sections">
                    {info.experience.details[0] && <div className="section-container">
                        <h2>Experience</h2>
                        {info.experience.details.map(detail => <div className="exp" key={detail.name} >
                            <h3>{detail.name}</h3>
                            <p>{detail.sdate} to {detail.edate} </p>
                            <p><b>{detail.job}</b></p>
                            <p>{detail.description}</p>
                        </div>)}
                    </div>}
                    {info.projects.details[0] && <div className="section-container">
                        <h2>Projects</h2>
                        {info.projects.details.map(detail => <div className="projects" key={detail.name} >
                            <h3>{detail.name}</h3>
                            <nav>{detail.github && <div className="details"><img src={githubIcon} alt="github link" /><span><a href={detail.github}>Repository Link</a></span></div>}
                                {detail.liveLink && <div className="details"><img src={webIcon} alt="live link" /><span><a href={detail.liveLink}>Live Link</a></span></div>}
                            </nav>
                            <p>{detail.description}</p>

                        </div>)}
                    </div>}
                </div>
            </div>
        </main>
    )
})
export default display;