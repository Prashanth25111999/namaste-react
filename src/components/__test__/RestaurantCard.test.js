import { render, screen } from "@testing-library/react"
import RestaurantCard, { withLablePromoter } from "../RestaurantCard"
import MOKE_RES_DATA from "../mokes/restaurantCardMoke.json"
import "@testing-library/jest-dom"

test('should Restaurant Card is Rendered', async () => {

    render(<RestaurantCard resData={MOKE_RES_DATA} />)
    const name = screen.getByText("KFC");
    expect(name).toBeInTheDocument()
})

// test('should Restaurant Card is Rendered', async () => {
//     const RestaurantCardPromoted = withLablePromoter(RestaurantCard);

//     render(<RestaurantCardPromoted resData={MOKE_RES_DATA} />)
//     const name = screen.getByText("Promoter");
//     expect(name).toBeInTheDocument()
// })