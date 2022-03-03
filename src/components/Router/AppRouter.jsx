import { Route, Routes } from 'react-router-dom'

import { AboutPage, HelloWorld, MainPage, Page404, UserDetailsPage } from '../Pages'
import { Users } from '../Users/Users'
import { UsersForTest } from '../UsersForTest/UsersForTest'

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<MainPage />} />
			<Route path='/hello' element={<HelloWorld />} />
			<Route path='/about' element={<AboutPage />} />
			<Route path='/users' element={<Users />} />
			<Route path='/users/:id' element={<UserDetailsPage />} />
			<Route path='/users-test' element={<UsersForTest />} />
			<Route path='/*' element={<Page404/>} />
		</Routes>
	)
}
