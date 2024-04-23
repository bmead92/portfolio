import './index.scss';
/* PDF styles */
import '@react-pdf-viewer/core/lib/styles/index.css';
import {Worker, Viewer, SpecialZoomLevel} from '@react-pdf-viewer/core';


const Resume = () => {
    return (
        <div className='resumeContainer'>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                    fileUrl="portfolio/src/assets/files/BryceMeadorsResume.pdf"
                    defaultScale={SpecialZoomLevel.PageFit}
                />
            </Worker>
        </div>
    )
}

export default Resume;