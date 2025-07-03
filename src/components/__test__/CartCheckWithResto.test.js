import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA_RES_MENU from "../mokes/cartCheckWithResto.json"
import "@testing-library/jest-dom"
import { act } from "react"
import { Provider } from "react-redux"
import appStore from "../../store/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"

test("Should Resto items are loaded and onClick its updating in cart or not", async () => {

    global.fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(MOCK_DATA_RES_MENU)
            }
        })
    })
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}><RestaurantMenu />
                    <Header />
                </Provider></BrowserRouter>)
    })


    const checkPasta = screen.getByText("Recommended (11)");
    // fireEvent.click(checkPasta)
    // expect(checkPasta).toBeInTheDocument()
    const addbtn = screen.getAllByTestId("btnofadd")
    fireEvent.click(addbtn[0])

    const checkCart = screen.getByText("(1)Cart")
    expect(checkCart).toBeInTheDocument()



})