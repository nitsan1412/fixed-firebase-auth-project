import React from 'react'
import auth from '../auth';


export default function AppLayout(props) {
    return (
        <div>
            App Layout
            <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >off</button>
        </div>
    )
}
