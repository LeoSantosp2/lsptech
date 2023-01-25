import React from "react";
import { useParams } from 'react-router-dom'

import { ContainerImg } from "../../styles/GlobalStyles";

import HeaderHome from "./header";
import MainHome from "./main";
import AsideHome from "./aside";

import Footer from "../../components/Footer";

export default function HomePage(){
	return (
		<ContainerImg>

			<HeaderHome />

			<MainHome />

			<AsideHome />

			<Footer />

		</ContainerImg>
	);
}