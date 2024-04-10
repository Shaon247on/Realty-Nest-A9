import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";

const SocialLogin = () => {
    const { googleLogin, githubLogin, twitterLogin } = useContext(AuthContext)
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    return (
        <div className='flex gap-10 justify-center items-center'>
            <button className='hover:bg-blue-400/40 rounded-full'><FcGoogle className='text-[50px]'></FcGoogle></button>
            <button className='hover:bg-blue-400/40 rounded-full'><FaGithub className='text-[50px]'></FaGithub></button>
            <button className='hover:bg-blue-400/40 rounded-lg'><FaSquareXTwitter className='text-[50px]'></FaSquareXTwitter></button>
                
            
        </div>
    );
};

export default SocialLogin;