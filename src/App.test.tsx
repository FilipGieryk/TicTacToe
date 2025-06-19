import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('App component render correctly',() =>{
    render(<App/>)


    expect(screen.getByText(/currentplayer/i)).toBeInTheDocument();
})


