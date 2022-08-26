import Greeting from './Greeting'
import {render,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
describe('Greeting Component',()=> {

    test('renders "Hello World" as a text',()=> {
        //Arrange
        render(<Greeting/>)
    
        //Act-> We want to perform the main action that's interesting to us. //for now its nothing
    
        //Assert
        //we import 'screen' which gives us access to virtual DOM 
        const helloWorldElement = screen.getByText('Hello World',{exact:false})
    
        expect(helloWorldElement).toBeInTheDocument()
    
    })
    test('renders "Nice to meet you" if the button was NOT clicked ',()=> {
        //Arrange
        render(<Greeting/>)
    
        //Act-> We want to perform the main action that's interesting to us. //for now its nothing
    
        //Assert
        //we import 'screen' which gives us access to virtual DOM 
        const notClickedElement = screen.getByText('Nice to meet you.',{exact:false})
    
        expect(notClickedElement).toBeInTheDocument()
    
    })

    test('renders "Nice to meet you too" if the button was Clicked ',()=> {
        //Arrange
        render(<Greeting/>)
    
        //Act-> We want to perform the main action that's interesting to us. 

        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

    
        //Assert
        //we import 'screen' which gives us access to virtual DOM 
        const clickedElement = screen.getByText('Nice to meet you too.',{exact:false})
    
        expect(clickedElement).toBeInTheDocument()
    
    })

    test('does not render "Nice to meet you" if the button was Clicked ',()=> {
        //Arrange
        render(<Greeting/>)
    
        //Act-> We want to perform the main action that's interesting to us. 

        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

    
        //Assert
        //we import 'screen' which gives us access to virtual DOM 
        const clickedElement = screen.queryByText('Nice to meet you.',{exact:false})
    
        expect(clickedElement).toBeNull()
    
    })
})


