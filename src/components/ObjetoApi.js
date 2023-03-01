import React from 'react'

const ObjetoApi = ({ objetoApi  = []}) => {
    return (
        <div className='row'>
            {objetoApi.map((item, index) => (
                <div key={index} className='col mb-4'>
                    <div className='card' style={{minWidth: '200px'}}>
                        <img src={item.image} alt='' />
                        <div className='card-body'>
                            <h5 className='card.title'>
                                {item.name}
                            </h5>
                            <hr />
                            <p> location: {item.location.name} </p>
                            <p> species: {item.species} </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ObjetoApi
