import React from 'react';
import {render} from '@testing-library/react'
import {Dashboard} from './Dashboard'

//Write test

test('Test buttons display on Dashboard', () => {
    const {getByText} = render(<Dashboard/>);
    
    const checkstrikes = getByText(/strikes/i)

    // Act   Assert  Arrange
    expect(checkstrikes).toBeInTheDocument();


})