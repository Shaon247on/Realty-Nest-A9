import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleLogin, githubLogin, twitterLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    const handleTwitterLogin = () => {
        twitterLogin()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    return (
        <div className='flex gap-10 justify-center items-center'>
            <button onClick={handleGoogleLogin} className='hover:bg-blue-400/40 duration-[400ms] ease-in-out rounded-full'><FcGoogle className='text-[50px]'></FcGoogle></button>
            <button onClick={handleGithubLogin} className='hover:bg-blue-400/40 duration-[400ms] ease-in-out rounded-full'><FaGithub className='text-[50px]'></FaGithub></button>
            <button onClick={handleTwitterLogin} className='hover:bg-blue-400/40 duration-[400ms] ease-in-out rounded-lg'><FaSquareXTwitter className='text-[50px]'></FaSquareXTwitter></button>


        </div>
    );
};

export default SocialLogin;