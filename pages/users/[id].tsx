import Header from '../../components/Header';
import Form from '../../components/Form/Form';
import { UserData } from '../../types/types';
import { GetServerSideProps } from 'next'

interface UserProps {
    user: UserData
};

const User = ({ user }: UserProps): JSX.Element => {

    return (
        <>
            <Header keywords={user.name}/>
            <div className='main'>
                <div className='container'>
                    <h2>User information</h2>
                    <Form userData={user}/>
                </div>
            </div>
        </>
    )
};

export default User;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const response = await fetch(`http://localhost:3001/usersList/${params?.id}`);
    const user = await response.json();

    return {
      props: {user},
    }
  }