import React, {useState, useEffect} from 'react';
import Child from './Children';

function Fetcher () {
    const [item, setItem] = useState(false)

    useEffect(()=> {
        setTimeout(
            function(){
                fetch('https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items')
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(data){
                        setItem(data)
                    })
            }, 3000
        )
    },[])

    return item ? item.map((p, i) => (
            <div key={i}>
                <Child value={item[i]}/>
            </div>
        ))

        : 'loading'
}
export default Fetcher;