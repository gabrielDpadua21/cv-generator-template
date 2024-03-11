

interface TopBarProps {
	title: string
}

const TopBar = (props: TopBarProps) => {
	return (
		<div className={`flex`}>
			<div>
				<h1 className={`font-primary font-black text-3xl text-gray-900`}>{props.title}</h1>
			</div>
			<div className={`flex flex-grow justify-end items-center`}>
				<button className={`bg-red-400 text-gray-100 hover:bg-red-600 p-2 rounded-xl`}>Export to PDF</button>
			</div>
		</div>
	)
}

export default TopBar;