import { render,screen } from '@testing-library/react';
import fireEvent from '@testing-library/user-event'
import Counter from './Counter';
describe("unit test counter component", () => {
    it("should render the counter component on to the screen", () => {
        render(<Counter />);
        const h1Element = screen.getByText(/Count/i);
        expect(h1Element).toBeInTheDocument();
    })
    it("should render the button", () => {
        render(<Counter />);
        const button = screen.getAllByTestId('btnInc');
        console.log(button);
        expect(button[0]).toBeInTheDocument();
    })
    it('should update the count on Click',async()=>{
        render(<Counter />);
        const button = screen.getAllByTestId('btnInc');
        await fireEvent.click(button[0]);
        const h1Element = screen.getByText(/Count 101/i);
        expect(h1Element).toBeInTheDocument();
        await fireEvent.click(button[0]);
        const h2Element = screen.getByText(/Count 102/i);
        expect(h2Element).toBeInTheDocument();
    })


});