import '../styles/console.css'
function Console({ clearResume, loadExample }) {
    return (
        <section className='shadow console'>
            <button onClick={loadExample} >Load Example</button>
            <button onClick={clearResume} >Clear</button>
            <button >Download</button>
        </section>
    )
}
export default Console