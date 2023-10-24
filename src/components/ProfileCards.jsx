import React, { useEffect } from 'react';
import { useState } from 'react';
import { Input } from 'antd';


const { TextArea } = Input;

const img = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";


const ProfileCards = () => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
      fetch('http://localhost:4000/api/session-data', {
        method: 'GET',
        credentials: 'include',
      })
        .then((response) => {
          if (response.ok) {
            console.log(response)
            return response.json();
          } else {
            throw new Error('Session not found');
          }
        })
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);

    return(
        <div className="w-full flex justify-evenly relative top-24">
            <div className="w-2/5 shadow-lg p-8 rounded">
                <img className=" w-12 rounded-full mb-2" src={img}></img>
                <p className="text-lg mb-2">Nom: {!userData ? 'Loading' : userData.name} </p>
                <p className="text-lg mb-2">Prénom: {!userData ? 'Loading' : userData.name} </p>
                <p className="text-lg mb-2">Email:</p>
                <p className="text-lg mb-2">N° de téléphone:</p>
                <p className="text-lg mb-2">Biographie:</p>
                <button className="bg-blue-950 text-white border-blue-950 border p-2 rounded duration-200 hover:bg-white hover:text-blue-950">Se déconnecter</button>
            </div>
            <div className="w-2/5 shadow-lg p-8 rounded flex flex-col items-start justify-between">
                <p className="text-2xl">Faire une annonce</p> 
                <TextArea showCount maxLength={300}  />
                <form method='POST' action='http://localhost:4000/logout'><button className="text-white p-2 rounded border border-blue-950 bg-blue-950 hover:bg-white hover:text-blue-950 duration-200">Publier</button></form>
            </div>
        </div> 
    )
    
};

export default ProfileCards;