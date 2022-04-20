import { render, screen } from '@testing-library/react';
import React from 'react';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
// import { render, screen } from '@testing-library/react';
// import React from 'react';
// import {Gif} from './pages/search/Gif';


// test('render gif component', () => {
//     render(<Gif/>);
//     screen.debug();
// });

// test('check gif component', () => {
//     render(<Gif/>);
//     const gif_title = screen.getByTestId('gif_title');
//     expect(gif_title).toBeInTheDocument();

    // const gif_image= screen.getByLabelText('gif_image');
    // expect(gif_image).toBeInTheDocument();
// });
