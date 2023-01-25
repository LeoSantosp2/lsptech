import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import PrivateRoute from "./PrivateRoute";

import HomePage from "../pages/Home";

import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

import HospedagemPage from "../pages/Hospedagem";
import CreateYourWebsitePage from "../pages/CreateYourWebsite";

import { HospedagemSitesPage } from "../pages/Hospedagem/hospedagem-hs";
import { VpsPage } from "../pages/Hospedagem/hospedagem-vps";
import { DedicatedServerPage } from "../pages/Hospedagem/hospedagem-ds";

import ToHirePage from "../pages/ToHire";
import Payment from "../pages/ToHire/payment";

import Page404 from "../pages/Page404";

import GlobalStyles from "../styles/GlobalStyles";

export default function MyRoutes(){
	return (
		<BrowserRouter>

			<GlobalStyles />

			<ToastContainer autoClose={3000} className="toast-container" />

			<Routes>

				<Route path='/' element={<HomePage />} />

				<Route path='/login' element={<LoginPage />} />
				<Route path='/cadastro' element={<RegisterPage />} />

				<Route path='/hospedagens' element={<HospedagemPage />} />
				<Route path='/crie-seu-site' element={<CreateYourWebsitePage />} />

				<Route path='/hospedagem-sites' element={<HospedagemSitesPage />} />
				<Route path='/vps' element={<VpsPage />} />
				<Route path='/servidores-dedicados' element={<DedicatedServerPage />} />

				<Route path='/contratar/:id' element={<ToHirePage />} />

				<Route path='/payment/:id' element={<Payment />} />

				<Route path='*' element={<Page404 />} />

			</Routes>

		</BrowserRouter>
	);
}