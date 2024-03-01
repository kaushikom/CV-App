import { useState } from 'react'
import Header from './components/header'
import Console from './components/console'
import Cards from './components/cards'
function App() {
  const [resumeInfo, setResumeInfo] = useState({
    personalDetails: {
      id: 'Personal Details',
      details: []
    },
    experience: {
      id: 'Experience',
      details: []
    },
    projects: {
      id: "Projects",
      details: []
    },
    skills: {
      id: 'Skills',
      details: []
    },
    certifications: {
      id: 'Certifications',
      details: []
    },
    education: {
      id: "Education",
      details: []
    }
  })
  const deleteResumeInfo = (section, indexToRemove) => {
    setResumeInfo(prevResumeInfo => ({
      ...prevResumeInfo,
      [section]: {
        ...prevResumeInfo[section],
        details: prevResumeInfo[section].details.filter((_, index) => index !== indexToRemove)
      }
    }));
  };
  const updateResumeInfo = (section, updatedDetails) => {
    setResumeInfo(prevResumeInfo => {
      const existingIndex = prevResumeInfo[section].details.findIndex(detail => detail.name === updatedDetails.name);
      if (existingIndex !== -1) {
        // if an object with same name exists, update it
        return {
          ...prevResumeInfo,
          [section]: {
            ...prevResumeInfo[section],
            details: prevResumeInfo[section].details.map((detail, index) => index === existingIndex ? updatedDetails : detail)
          }
        }
      }
      else {
        return {
          ...prevResumeInfo,
          [section]: {
            ...prevResumeInfo[section],
            details: [...prevResumeInfo[section].details, updatedDetails]
          }
        }
      }
    }
    )
  }
  console.log(resumeInfo);
  return (
    <>
      <Header />
      <Console />
      <Cards info={resumeInfo} updateResumeInfo={updateResumeInfo} deleteResumeInfo={deleteResumeInfo} />
    </>
  )
}

export default App
