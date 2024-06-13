import { getUsers } from '@/lib/prisma/users';
import Users from './users';

async function getData() {
	const {users} = await getUsers();
	if (!users) {
		throw new Error('Failed to fetch the data');
	}
	return users
}

const UsersLayout = async ({ children }) => {
	const users = await getData();
	return (
		<section className='flex h-full'>
			<aside className='w-1/3 lg:w-1/4 h-full'>
				<Users users={users}/>
			</aside>
			<main>{children}</main>
		</section>
	);
};

export default UsersLayout;
