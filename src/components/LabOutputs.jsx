import html2canvas from "html2canvas"
import jsPDF from 'jspdf';
import { useEffect, useRef } from "react";

function LabOutputs({ loginSuccess }) {
    const name = localStorage.getItem("name")
    const symbol = localStorage.getItem("symbol")

    const pathref = useRef(null)
    useEffect(() => {
        pathref.current.focus()
    }, [])
    const downloadImage = () => {
        const element = document.getElementById('output-terminal'); // ID of the element to be converted to PDF
        html2canvas(element).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 15);
            pdf.save("download.pdf");
        });
    }
    const logout = () => {
       loginSuccess(false)
       localStorage.setItem("verified", "false")
    }
    return (
        <>
            <div>
                <button onClick={logout} className="btn logout-btn">
                    <span class="icon">
                        <svg viewBox="0 0 24 24" height="24" width="24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12L13 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </span>
                    <span class="text">Logout</span>
                </button>
            </div>
            <div className="outputs-container">
                <div className="output-container">
                    <h2>Lab 1 Output 1</h2>
                    <p align="center">(You can also edit the path name manually)</p>
                    <div className="output-terminal" id="output-terminal">
                        <blockquote contentEditable spellCheck="false" ref={pathref}>
                            <p className="output-path">
                                <span className="user-name">{name.split(" ")[0]}@laptop</span>
                                <span className="mingw">MINGW64</span>
                                <span className="file-path">/f/{name}/{symbol}/lab-files-os</span>
                            </p>
                        </blockquote>
                        <div className="output-trigger">
                            $ gcc lab-1.c
                        </div>
                        <div className="output-main">
                            This code is running in the parent process. ID: {Math.floor(Math.random() * (1700 - 1400 + 1)) + 1400} <br />
                            Child Process created with process ID {Math.floor(Math.random() * (18000 - 12000 + 1)) + 12000}
                        </div>
                    </div>
                </div>
                <button onClick={downloadImage} className="btn">
                    <span class="icon">
                        <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line></svg>
                    </span>
                    <span class="text">Download PDF</span>
                </button>
            </div>
        </>
    )
}

export default LabOutputs
