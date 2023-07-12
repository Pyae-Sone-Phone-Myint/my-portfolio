import React from "react";

const Experience = () => {
	return (
		<>
			<div
				className="2xl:max-w-[1305px] xl:max-w-[1240px] lg:max-w-[945px] md:max-w-[705px] sm:max-w-[525px] max-w-[435px] mx-auto
"
			>
				{/* title */}
				<div className="">
					<div className=" text-center">
						<span className=" text-[#f9004d] leading-1 mb-[10px] text-sm font-normal">
							OVER 10 YEARS OF EXPERIENCE
						</span>
						<h2 className=" text-[#c4cfde] font-bold text-[60px]">
							My Experience
						</h2>
					</div>
				</div>
				{/* experience card */}
				<div className=" ">
					{/* first card */}
					<div className=" flex flex-col lg:flex-row  items-center  gap-10  w-[80%]  mx-auto mt-[40px] mb-0 p-[30px] shadow-one rounded-md">
						{/* img  */}
						<div className="  w-full lg:w-1/4">
							<div className=" hover:scale-[1.1] duration-200">
								<img
									className="  w-full  h-full overflow-hidden rounded-md"
									src="../../../public/p-1.png"
								/>
							</div>
						</div>
						<div className=" w-full lg:w-2/4">
							<span className=" bg-[#545961] text-sm px-2 py-1 text-[#c4cfde] rounded-3xl">
								2023 -present
							</span>
							<h4 className=" text-[26px] text-[#c4cfde] font-bold mt-3">
								Contact App
							</h4>
							<h6 className=" text-[20px] font-normal my-3 text-[#c4cfde]">
								Co-Founder, Web Designer & Developer
							</h6>
							<p className=" text-[16px] text-[#878e99]">
								Reinvetning the way you create websites
							</p>
						</div>
						{/* button */}
						<div className=" w-full lg:w-1/4  ">
							<button className=" text-end px-8 py-3 capitalize text-sm cv-button shadow-one text-[#ff014f]">
								Contact Me
							</button>
						</div>
					</div>
					<div className=" flex flex-col lg:flex-row  items-center  gap-10  w-[80%]  mx-auto mt-[40px] mb-0 p-[30px] shadow-one rounded-md">
						{/* img  */}
						<div className="flex  w-full lg:w-1/4">
							<div className=" hover:scale-[1.1] duration-200">
								<img
									className=" w-full lg:w-auto h-auto overflow-hidden rounded-md"
									src="../../../public/p-2.png"
								/>
							</div>
						</div>
						<div className=" w-full lg:w-2/4">
							<span className=" bg-[#545961] text-sm px-2 py-1 text-[#c4cfde] rounded-3xl">
								2023 -present
							</span>
							<h4 className=" text-[26px] text-[#c4cfde] font-bold mt-3">
                            Go Wild Tour Pages
							</h4>
							<h6 className=" text-[20px] font-normal my-3 text-[#c4cfde]">
								Co-Founder, Web Designer & Developer
							</h6>
							<p className=" text-[16px] text-[#878e99]">
								Reinvetning the way you create websites
							</p>
						</div>
						{/* button */}
						<div className="w-full lg:w-1/4 ">
							<button className=" text-end px-8 py-3 capitalize text-sm cv-button shadow-one text-[#ff014f]">
								Contact Me
							</button>
						</div>
					</div>
					<div className=" flex flex-col lg:flex-row  items-center  gap-10  w-[80%]  mx-auto mt-[40px] mb-0 p-[30px] shadow-one rounded-md">
						{/* img  */}
						<div className=" w-full lg:w-1/4">
							<div className="hover:scale-[1.1] duration-200">
								<img
									className="  w-full lg:w-auto h-auto overflow-hidden rounded-md"
									src="../../../public/p-3.png"
								/>
							</div>
						</div>
						<div className=" w-full lg:w-2/4">
							<span className=" bg-[#545961] text-sm px-2 py-1 text-[#c4cfde] rounded-3xl">
								2023 -present
							</span>
							<h4 className=" text-[26px] text-[#c4cfde] font-bold mt-3">
								Dashboard for you..
							</h4>
							<h6 className=" text-[20px] font-normal my-3 text-[#c4cfde]">
								Co-Founder, Web Designer & Developer
							</h6>
							<p className=" text-[16px] text-[#878e99]">
								Reinvetning the way you create websites
							</p>
						</div>
						{/* button */}
						<div className="w-full lg:w-1/4 ">
							<button className=" text-end px-8 py-3 capitalize text-sm cv-button shadow-one text-[#ff014f]">
								Contact Me
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Experience;
