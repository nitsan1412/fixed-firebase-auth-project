import React from 'react'


export default function AppLayout(props) {
    return (
        <div>
            App Layout
            <button
        onClick={() => {
        //   auth.logout(() => {
        //     props.history.push("/");
        //   });
        }}
      >off</button>
        </div>
    )
}
