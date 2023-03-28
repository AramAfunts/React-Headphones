import React from 'react';
import { Header } from '../components/Header';
import { TopBar } from '../components/TopBar';

const Account = ({ favorites }) => {
  return (
    <div>
        <TopBar />
        <Header />
        <div className='account'>
            <h1>Favorite Products</h1>
            <div className='favorite-items'>
                {
                    favorites.map((favItem) => 
                        <div className='favorite-card' key={favItem.key}>
                            <div className='left-side'>
                                <img src={favItem.image} alt='product' />
                            </div>
                            <div className='right-side'>
                                <span>{favItem.name}</span>
                                <b>{favItem.price}$</b>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Account;
