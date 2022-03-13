import Form from '../../components/Form/Form';
import Header from '../../components/Header';
import { UserData } from '../../types/types';

const CreateNew = (): JSX.Element => {
    const initialState: UserData = {id: null, name: '', email: '', country: '', age: null};

    return (
        <>
            <Header keywords=''/>
            <div className='main'>
                <div className='container'>
                    <h2>Create New User</h2>
                    <Form userData={initialState}/>
                </div>
            </div>
        </>
    ); 
};

export default CreateNew;