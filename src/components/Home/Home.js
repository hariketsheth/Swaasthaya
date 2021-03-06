import { Button } from '@progress/kendo-react-buttons';
import { Ripple } from '@progress/kendo-react-ripple';

import { useHistory } from 'react-router';
import { motion } from 'framer-motion';
import './Home.css';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';
import { Error } from '@progress/kendo-react-labels';

const Home = () => {
    const history = useHistory();
    const showSignInPage = () => {
        history.push('/login');
    }

    const showRegisterPage = () => {
        history.push('/register');
    }

    const HeaderVariants = {
        initial: {
            x: "-100vw",
        },
        animate: {
            x: 0,
        },
        transition: {
            transition: "easeInOut",
            duration: 2,
        },
        exit: {
            x: "-100vw",
            transition: { ease: "easeInOut", duration: 1}
        }
    }

    const subHeaderVariants = {
        initial: {
            y: "100vh",
        },
        animate: {
            y: 0,
            transition: {ease: "easeInOut", delay: 0.5, duration: 1}
        },
        exit: {
            y: "+100vw",
            transition: { ease: "easeInOut", duration: 1}
        }
    }

    const [authErrorMessage, setAuthErrorMessage] = useState('');
    const { login } = useAuth();

    async function handleDemo() {
        login("test@gmail.com", "test1234")
        .then((userCredential) => {
            var user = userCredential.user;
            history.push("/user");
        })
        .catch((error) => {
            setAuthErrorMessage(error.message);
        });
    }

    return (
        <motion.div>
            <div className="home__container">
                <div className="home__doodle">
                    <motion.img
                        initial={{ x: "-100vw", y: "-100vh"}}
                        animate={{ x: 0, y: 0}}
                        transition={{ transition: "ease", duration: 1}}
                        className="doodle-triangle"
                        src="assets/doodle_triangle.png"
                        alt=""
                    />
                    <motion.img
                        initial={{ x: "-100vw", y: "+100vh", rotate: "+50deg"  }}
                        animate={{ x: 0, y: 0, rotate: "-10deg" }}
                        transition={{ transition: "ease", duration: 1}}
                        className="doodle"
                        src="assets/loving.png"
                        alt=""
                    />
                </div>
                <div className="home__text">
                    <motion.div variants={HeaderVariants} initial="initial" animate="animate" className="home__text-top">
                        <div className="top__line-one">
                            <h3>Swaasthaya</h3>
                        </div>
                        
                    </motion.div>
                    <motion.div variants={subHeaderVariants} initial="initial" animate="animate" className="home__text-bottom">
                        <div className="bottom__line-one">
                            <h3>Building habits</h3>
                        </div>
                        <div className="bottom__line-two">
                            <h3 style={{"color": "#2856ec"}}>Gamified</h3>
                            <h3>!</h3>
                        </div>
                    </motion.div>
                </div>
                <motion.div variants={subHeaderVariants} initial="initial" animate="animate" className="auth__buttons">
                    <Error>
                        {authErrorMessage}
                    </Error>
                    {/* Add ripple effect for extra pizzazz */}
                    <Ripple>
                        <div className="buttons__two">
                            <Button className="login-with-google">Click Here for Demo</Button>
                        </div>
                        <div className="buttons__one">
                            <Button className="auth-button" primary={true} onClick={showSignInPage}>Sign-In</Button>
                            <Button className="auth-button" primary={true} onClick={showRegisterPage}>Register</Button>
                        </div>
                    </Ripple>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Home;