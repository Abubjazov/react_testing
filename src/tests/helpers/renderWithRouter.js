import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { AppRouter } from '../../components/Router/AppRouter'
import { createReduxStore } from '../../store/store'

export const renderWithRouter = (component, initialRoute = '/') => {
	return render(
		<Provider store={createReduxStore()}>
			<MemoryRouter initialEntries={[initialRoute]}>
				<AppRouter />
				{component}
			</MemoryRouter>
		</Provider>
	)
}
