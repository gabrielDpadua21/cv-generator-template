'use client';

import AsideMenu from "../asideMenu";
import TopBar from "../topBar";
import Cv from "../cv";


const Layout = () => {
	return (
		<div className={`flex h-full w-screen`}>
			<AsideMenu />
			<div className={`flex flex-col bg-gray-300 w-full p-7 h-full`}>
				<TopBar title="CV Generator" />
				<Cv />
			</div>
		</div>
	)
}

export default Layout;