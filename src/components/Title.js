import React from 'react'

export default function Title({ name, title }) {
    return (
        <div className='row'>
            <div className="col-10 mx-auto my-t text-center text-title">
                <h1 className="text-catitalize font-weight-bold">
                    {name} <strong className="text-blue">{title}</strong>
                </h1>
            </div>
        </div>
    )
}
