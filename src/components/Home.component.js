import { useQuery } from "react-query";
import { useState } from 'react';
import '../styles/Home.style.css';

function Home() {

    const [username, setUsername] = useState('');
    const [repo, setRepo] = useState('');
    const [repoData, setRepoData] = useState({});


    const { status, data, error, refetch } = useQuery('repoData', fetchData, {
        enabled: false,
    });


    function fetchData() {

        setRepoData({});

        if (username.toString().length > 4 && repo.toString().length > 4) {

            return fetch(`https://api.github.com/repos/${username}/${repo}`).
                then(res => res.json()).
                then(res => setRepoData(res));

        }

    }


    return (
        <>

            <div className='formElements'>
                <input onChange={(e) => setUsername(e.target.value)} placeholder='Username...' />
                <input onChange={(e) => setRepo(e.target.value)} placeholder='Repo Name...' />
                <button onClick={refetch}>Load</button>
            </div>

            <div className='resultsFrame'>
                {
                    repoData.message === 'Not Found' &&
                    <p className='errorMessage'>Username or repo name is incorrect.</p>
                }
            </div>

        </>
    );
}

export default Home;