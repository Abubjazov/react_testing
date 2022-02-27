import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Users = () => {
	const [users, setUsers] = useState([])

	const loadUsers = async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users') || []

		setUsers(response.data)
	}

	useEffect(() => {
		loadUsers()
	}, [])

	return (
		<ul data-testid={'users-list'}>
			{users.map(user => <li key={user.id}><Link to={`/users/${user.id}`} data-testid={'user-item'}>{user.name}</Link></li>)}
		</ul>
	)
}
