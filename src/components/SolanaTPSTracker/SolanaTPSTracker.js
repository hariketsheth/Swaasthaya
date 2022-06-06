import React, { useEffect, useState } from 'react';
import axios from 'axios';


const SolanaTPSTracker = () => {
    const [tps, setTps] = useState('');

    // Note: For this file, you are required to run our backend locally on your own device to
    // access the solana TPS portion. Check the Readme file for more info.


    useEffect( () => {

        const callAPI = async () => {
            let tpshere = await axios.get('http://localhost:5000/mints/solanatps')
            .then(async(response) => {
                await sleep(5000);
                console.log(response);
                setTps(response.data);

            })

        }
        callAPI();



    }, [])

    function sleep (milliseconds) {
        return new Promise((resolve) => setTimeout(resolve, milliseconds))
      }
    



    return (
    <>
    <br></br>
        <h3>Solana TPS is: {tps}</h3>
        {tps<1000 
        ?  <h4>Solana TPS is LOW. Time to prioritize your mental health!</h4> 
        :(<h4>Solana TPS is around normal. Have fun minting!</h4>)
        }
    </>
    );
}

export default SolanaTPSTracker;