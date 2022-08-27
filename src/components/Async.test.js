import {render,screen} from '@testing-library/react'
import Async from './Async'

describe('Async component',()=> {
    test('renders posts if request succeeds',async()=> {
        //Arrange
        render(<Async/>)

        //Act
        //we dont need to act rendering is already does everything because we use useEffect hook  
    
        //Assert
        const listItemElements = await screen.findAllByRole('listitem') //instead of using getAllByRole-> findAllByRole we get back a promise with 'find', 'find' returns a promise
        expect(listItemElements).not.toHaveLength(0)
    })
})