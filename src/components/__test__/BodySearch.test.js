import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
import MOCK_DATA_RESTO from "../mokes/bodySearchMock.json"
import "@testing-library/jest-dom"

test('Should Test the Search Functionality is working as expected ', async () => {

    global.fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(MOCK_DATA_RESTO)
            }
        })
    })

    await act(async () => render(

        <BrowserRouter><Body /></BrowserRouter>
    )
    )


    const inputSearch = screen.getByTestId("searchinput")
    expect(inputSearch).toBeInTheDocument()

    fireEvent.change(inputSearch, { target: { value: "pizza" } })

    const searchBtn = screen.getByRole("button", { name: "Search" })
    expect(searchBtn).toBeInTheDocument()

    fireEvent.click(searchBtn)

    const resCard1 = screen.getAllByTestId("resCard");
    expect(resCard1.length).toBe(1)

})

test("Search for top rated Restaurant", async () => {

    global.fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(MOCK_DATA_RESTO)
            }
        })
    })

    await act(async () => {
        render(
            <BrowserRouter><Body /></BrowserRouter>

        )
    })

    const topRestoBtn = screen.getByRole("button", { name: "Click For Top Rated Restaurant" })
    expect(topRestoBtn).toBeInTheDocument()
    const cards = screen.getAllByTestId("resCard");
    // console.log(cards.length)
    fireEvent.click(topRestoBtn)
    const cards1 = screen.getAllByTestId("resCard");
    // console.log(cards1.length)
    expect(cards1.length).toBe(3)
})