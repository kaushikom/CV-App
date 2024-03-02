import '../styles/console.css'
import ReactToPrint from 'react-to-print';
import Display from './Display';

function Console({ clearResume, loadExample, resumeRef }) {
    return (
        <section className='shadow console'>
            <button onClick={loadExample} >Load Example</button>
            <button onClick={clearResume} >Clear</button>
            <ReactToPrint
                trigger={() => <button>Download</button>}
                content={() => resumeRef.current} // Pass the Display component as content
            />
        </section>
    )
}
export default Console