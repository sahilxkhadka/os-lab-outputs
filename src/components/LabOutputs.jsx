import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import labOutputsDetails from "../details";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import rightArrow from "../images/right-arrow.svg";

function LabOutputs({ loginSuccess }) {
	const slider = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const name = localStorage.getItem("name");
	const symbol = localStorage.getItem("symbol");
	const logout = () => {
		loginSuccess(false);
		localStorage.setItem("verified", "false");
	};

	var settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: false,
		className: "slider",
		draggable: true,
	};
	const scrollToPrev = () => {
		slider?.current?.slickPrev();
	};
	const scrollToNext = () => {
		slider?.current?.slickNext();
	};
	return (
		<>
			<div>
				<button onClick={logout} className='btn logout-btn'>
					<span className='icon'>
						<svg
							viewBox='0 0 24 24'
							height='24'
							width='24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							stroke='#ffffff'
						>
							<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
							<g
								id='SVGRepo_tracerCarrier'
								stroke-linecap='round'
								stroke-linejoin='round'
							></g>
							<g id='SVGRepo_iconCarrier'>
								{" "}
								<path
									d='M21 12L13 12'
									stroke='#ffffff'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								></path>{" "}
								<path
									d='M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9'
									stroke='#ffffff'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								></path>{" "}
								<path
									d='M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19'
									stroke='#ffffff'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								></path>{" "}
							</g>
						</svg>
					</span>
					<span className='text'>Logout</span>
				</button>
			</div>
			<div className='navs-container'>
				{labOutputsDetails.map((item, index) => {
					return (
						<button
							className={`btn download-btn nav-btn ${
								activeIndex === index ? "focused-btn" : ""
							}`}
							key={index}
							onClick={() => setActiveIndex(index)}
						>
							Lab {index + 1}
						</button>
					);
				})}
			</div>
			<div className='outputs-container'>
				<Slider ref={slider} {...settings}>
					{labOutputsDetails[activeIndex].map((lab, index) => {
						const downloadImage = () => {
							const element = document.getElementById(lab.id);
							html2canvas(element, { dpi: 300 }).then((canvas) => {
								// Increase the DPI to 300
								const imgData = canvas.toDataURL("image/png");
								const pdf = new jsPDF();
								pdf.addImage(imgData, "PNG", 0, 15);
								pdf.save(`${lab.id}.pdf`);
							});
						};

						return (
							<>
								<div key={lab.id} className={`slide-container`}>
									<div className='output-container'>
										<h2>{lab.labName}</h2>
										<p align='center' style={{ color: "#fff" }}>
											(You can also edit the path name manually)
										</p>
										<div className='output-terminal' id={lab.id}>
											<blockquote
												className='output-path'
												spellCheck='false'
												contentEditable={true}
												key={lab.labName}
											>
												<span className='user-name'>
													{name.split(" ")[0]}@laptop
												</span>
												<span className='mingw'>MINGW64</span>
												<span className='file-path'>
													/f/{name}/{symbol}/lab-files-os
												</span>
											</blockquote>
											<div className='output-trigger'>
												$ gcc lab-{lab.labCount}.c
											</div>
											<pre className='output-main'>{lab.labOutput}</pre>
										</div>
									</div>
									<button onClick={downloadImage} className='btn download-btn'>
										<span className='icon'>
											<svg
												className='css-i6dzq1'
												stroke-linejoin='round'
												stroke-linecap='round'
												fill='none'
												stroke-width='2'
												stroke='currentColor'
												height='24'
												width='24'
												viewBox='0 0 24 24'
											>
												<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
												<polyline points='7 10 12 15 17 10'></polyline>
												<line y2='3' x2='12' y1='15' x1='12'></line>
											</svg>
										</span>
										<span className='text'>Download PDF</span>
									</button>
								</div>
							</>
						);
					})}
				</Slider>
				<div className='arrows-container'>
					<button className='previousButton' onClick={scrollToPrev}>
						<img src={rightArrow} alt='' />
					</button>
					<button className='nextButton' onClick={scrollToNext}>
						<img src={rightArrow} alt='' />
					</button>
				</div>
			</div>
		</>
	);
}

export default LabOutputs;
