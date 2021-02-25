import React from 'react'

export default function LandingPage(props) {
    return (
        <div>
            <h3>Landing Page</h3>
            <button onClick={()=>{
                // auth.login(()=>{
                //     props.history.push("/app")
                // })
            }}>Go</button>
        </div>
    )
}
