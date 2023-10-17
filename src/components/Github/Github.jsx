// import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/hadiraza04')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
  return (
    <div className='md:w-[800px] bg-gray-100  lg:h-[500px]  p-4 py-6 m-auto my-6 flex justify-center items-center rounded-md'>
        <div className='mr-5 w-[50%] h-[50%] p-5 flex items-center justify-between rounded-lg'>
            <img src={data.avatar_url} alt='profile-image'  className='md:w-[150px] rounded-[50%]'/>
        </div>
        <div>
            <ul className='font-bold tracking-tight'>
                <li>Name: {data.name}</li>
                <li>Github UserName: {data.login}</li>
                <li>Followers: {data.followers}</li>
                <li>Site: <a href="https://hadirazaportfolio.web.app" target='_blank' className='text-blue-500'>{data.blog}</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Github