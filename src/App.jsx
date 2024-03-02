import { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print'
import Header from './components/header'
import Console from './components/console'
import Cards from './components/cards'
import exampleResume from './example.json'
import Display from './components/Display';
function App() {
  const resumeRef = useRef();
  const generateInitialState = () => ({
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
  const [resumeInfo, setResumeInfo] = useState(generateInitialState())
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
  const clearResume = () => {
    setResumeInfo(generateInitialState());
  }
  const loadExample = () => {
    setResumeInfo(exampleResume);
  }
  console.log(resumeInfo);
  return (
    <>
      <div className="left">
        <Header />
        <Console clearResume={clearResume} loadExample={loadExample} resumeRef={resumeRef} />
        <Cards info={resumeInfo} updateResumeInfo={updateResumeInfo} deleteResumeInfo={deleteResumeInfo} />
      </div>
      <div className="right">
        <Display info={resumeInfo} ref={resumeRef} />
      </div>
    </>
  )
}

export default App
