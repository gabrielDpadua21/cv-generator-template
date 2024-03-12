'use client';
import { useState } from 'react';
import { MailIcon, PhoneIcon } from '@/components/icons'

import {Data} from '@/data';

const Cv = (props: any) => {
	const renderExperience = (experience) => {
		return (
			<div className={`border border-gray-600 rounded-xl p-5 mb-10 w-full`}>
				<span className={`font-bold text-xl`}>{experience.year_start} - {experience.year_end}</span>
				<h2 className={`font-black text-3xl`}>{experience.job_title}</h2>
				<span className={`font-black text-2xl`}>{experience.company_name}</span>
				<p>{experience.job_description}</p>
		   </div>
		)
	}

	const renderEducation = (education) => {
		return (
			<div className={`p-5 mb-10 w-full border border-gray-400 rounded-xl`}>
				<span className={`font-bold text-xl`}>{education.year_conclusion}</span>
				<h2 className={`font-black text-3xl`}>{education.description}</h2>
				<span className={`font-black text-2xl`}>{education.institution}</span>
			</div>
		)
	}

	const renderList = (list, color) => {
		return (
			<div className={`w-full my-2`}>
				<span className={`font-bold`}>
					{list.name}
				</span>
				<div className="w-full bg-gray-200 rounded-full h-2.5">
				  <div className={`${color} h-2.5 rounded-full`} style={{width: (list.level * 25) + "%"}}></div>
				</div>
			</div>
		)
	}


	return (
		<div className={`bg-white mt-5 p-10 m-10 rounded-xl grid grid-cols-3 gap-4`}>
			<div className={`flex flex-col items-center`}>
				<div className={`size-40 mb-5`}>
					<img 
	                    className={`rounded-full size-40 object-cover`}
	                    src={'https://source.unsplash.com/random'}  
	                    alt="Photo"
	                />
				</div>
				<h1 className={`font-black text-5xl`}>{Data.first_name} {Data.last_name}</h1>
				<h3 className={`font-bold text-xl`}>{Data.job}</h3>
				<hr className={`w-full px-10 my-10 border-1 border-gray-400`}/>
				<div className={`flex flex-col items-center rounded-xl bg-gray-200 p-10`}>
					<div className={`flex items-center justify-center mb-5`}>
						{MailIcon}
						<span className={`font-bold ml-5`}>
							{Data.mail}
						</span>
					</div>
					<div className={`flex items-center justify-center`}>
						{PhoneIcon}
						<span className={`font-bold ml-5`}>
							{Data.phone}
						</span>
					</div>
				</div>
				<hr className={`w-full px-10 mt-10 border-1 border-gray-400`}/>
				<div className={`flex flex-col items-center mt-5 w-full p-10`}>
					{Data.skills.map((skill) => (
						renderList(skill, 'bg-blue-600')
					))}
				</div>
				<hr className={`w-full px-10 border-1 border-gray-400`}/>
				<div className={`flex flex-col items-center mt-5 w-full p-10`}>
					{Data.languages.map((languages) => (
						renderList(languages, 'bg-red-600')
					))}
				</div>
			</div>
			<div className={`col-span-2`}>
				<div className={`flex flex-col items-center p-10`}>
					<div className={`rounded-xl bg-gray-200 w-full p-5`}>
						<p>
						  {Data.description}	
						</p>
					</div>
					<hr className={`w-full px-10 my-10 border border-gray-400`}/>
					<div className={`flex flex-col items-left w-full`}>
						{Data.experience.map(exp => (
							renderExperience(exp)
						))}
					</div>
					<hr className={`w-full px-10 mb-10 border border-gray-400`}/>
					<div className={`flex flex-col items-left w-full`}>
						{Data.education.map(edu => (
							renderEducation(edu)
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cv