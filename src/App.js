import React from 'react';
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/index'
import { Logo } from './components/Logo/index'

export const App = () => {
    return <div>
                <GlobalStyle />
                <Logo />
                <ListOfCategories />
                <ListOfPhotoCards />
            </div> 
}