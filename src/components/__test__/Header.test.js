import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../store/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


// beforeAll(() => {
//     console.log("before all")
// })
// beforeEach(() => {
//     console.log("before each")
// })
// afterAll(() => {
//     console.log("after all")
// })
// afterEach(() => {
//     console.log("after each")
// })


test('should  header component is rendered', () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const aboutText = screen.getByText("About Us")
    expect(aboutText).toBeInTheDocument()
})

test('should header component is rendered with cart', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const cartText = screen.getByText(/Cart/)
    expect(cartText).toBeInTheDocument()
})

it('should header component is rendered loginbutton', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginBtn = screen.getByText("Login")
    fireEvent.click(loginBtn)
    const logoutBtn = screen.getByText("Logout")
    expect(logoutBtn).toBeInTheDocument()

})

