import { UserData } from '../types/types';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { createUseStyles } from 'react-jss';

interface TableProps {
    users: UserData[],
};

interface SortConfig {
    direction: string,
    key: string,
}

const useStyles = createUseStyles({
    sort__container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    sort__button: {
        width: 15,
        minWidth: 15,
        backgroundColor: '#fff',
        outline: 'none',
        border: 'none',
        marginTop: 3,
        color: '#000',
        padding: 5,
        marginRight: 5, 
        '&:hover': {
            color: '#529dee',
        },
        '&:last-child': {
            marginRight: 10,
        },
    },
    df: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-evenly',
    },
    caption: {
        fontSize: 20,
    }
})

const Table = ({ users }: TableProps) => {
    const classes = useStyles();
    const thList = ['id', 'name', 'email', 'age', 'country'];
    const [ sortConfig, setSortConfig ] = useState({} as SortConfig);
    const [ sortedUsers, setSortedUsers] = useState(users as UserData[]);

    const handleSortABS = (key: string): void => {
        const direction = sortConfig.direction === 'asc' ? 'des' : 'acs';
        const sortedArray = sortedUsers.sort((a, b) => {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        });
        setSortedUsers(sortedArray);
        setSortConfig({ direction, key });
    };

    const handleSortDES = (key: string): void => {
        const direction = sortConfig.direction === 'asc' ? 'des' : 'acs';
        const sortedArray = sortedUsers.sort((a, b) => {
            if (a[key] < b[key]) return 1;
            if (a[key] > b[key]) return -1;
            return 0;
        });
        setSortedUsers(sortedArray);
        setSortConfig({ direction, key });
    };

    useEffect(() => {
        setSortConfig({ ...sortConfig, direction: sortConfig.direction === 'asc' ? 'des' : 'acs' });
    }, [sortedUsers])

    return (
      <table>
        <caption className={classes.caption}><h2>Users list</h2></caption>
        <thead>
          <tr>
              {thList.map((keyName, index) => {
                  return (
                    <th key={index}>
                        <div className={classes.sort__container}>
                            <button
                                className={classes.sort__button}
                                onClick={() => handleSortABS(keyName)}
                            >↑
                            </button>
                            <button
                                className={classes.sort__button}
                                onClick={() => handleSortDES(keyName)}
                            >↓
                            </button>
                            <p>{keyName}</p>
                        </div>
                    </th>
                  );
              })}
          </tr>
        </thead>
        <tbody>
            {sortedUsers.map((user) => (
                <tr key={user.id}>
                    <Link href={'/users/' + user.id}><td>{user.id}</td></Link>
                    <Link href={'/users/' + user.id}><td>{user.name}</td></Link>
                    <Link href={'/users/' + user.id}><td>{user.email}</td></Link>
                    <Link href={'/users/' + user.id}><td>{user.age}</td></Link>
                    <Link href={'/users/' + user.id}><td>{user.country}</td></Link>
                </tr>
            ))}
        </tbody>
      </table>
    );  
};

export default Table;
