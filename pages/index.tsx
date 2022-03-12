import Link from 'next/link';
import Header from '../components/Header';
import { GetStaticProps } from 'next'
import { UsersData} from '../types/types';
import Table from '../components/Table';

const Users = ({ users }: UsersData): JSX.Element => {
    return (
        <div className='main'>
            <Header keywords='users'/>
            <div className='container'>
                <Table users={users}/>
                <Link href='/users/createNew'><button>Create New</button></Link>
            </div>
        </div>
    );
};

export default Users;

export const getStaticProps: GetStaticProps = async (context) => {
    const response = await fetch('http://localhost:3001/usersList');
    const users = await response.json();

    return {
      props: {users}, // will be passed to the page component as props
    }
  }