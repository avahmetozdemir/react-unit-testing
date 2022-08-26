import Greeting from './Greeting'
import {render,screen} from '@testing-library/react'

describe('Greeting Component',()=> {

    test('renders Hello World as a text',()=> {
        //Arrange
        render(<Greeting/>)
    
        //Act-> We want to perform the main action that's interesting to us. //for now its nothing
    
        //Assert
        //we import 'screen' which gives us access to virtual DOM 
        const helloWorldElement = screen.getByText('Hello World',{exact:false})
    
        expect(helloWorldElement).toBeInTheDocument()
    
    })
})


