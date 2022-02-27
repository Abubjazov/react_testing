import { Route, Routes } from 'react-router-dom'

import { AboutPage, MainPage, Page404, UserDetailsPage } from '../Pages'
import { Users } from '../Users/Users'

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<MainPage />} />
			<Route path='/about' element={<AboutPage />} />
			<Route path='/users' element={<Users />} />
			<Route path='/users/:id' element={<UserDetailsPage />} />
			<Route path='/*' element={<Page404/>} />
		</Routes>
	)
}
