import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

describe("Contact Page TestCases", () => {
    test("Should Contact Page is Renderd", () => {

        render(<Contact />)
        //querying
        const heading = screen.getByRole("heading")
        // assertion
        expect(heading).toBeInTheDocument()
    })

    test("Check Text", () => {

        render(<Contact />)
        const text = screen.getByText("ContatcUs Page...!")
        expect(text).toBeInTheDocument()
    })

    test('Check Button', () => {
        render(<Contact />)
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument()

    })

    // test('Check Inputs', () => {

    //     render(<Contact />)
    //     const inputs = screen.findAllByRole("text")
    //     expect(inputs).toBeInTheDocument()

    // })

    test('Check Inputs', () => {

        render(<Contact />)
        const inputsBox = screen.getAllByRole("textbox")
        expect(inputsBox.length).toBe(2)

    })
})