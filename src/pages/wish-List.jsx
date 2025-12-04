import WishListItem from "../component/Wish-List/wishListItem"

// image 
import image from '../Image/man/1_3baf70f5-9b45-4f7a-a6e7-4eba306e9d92_300x.avif'

function WishList() {
  return (
    <section className="w-3/4 h-screen overflow-x-scroll mx-auto my-8">
        {/* heading  */}
      <section className="flex p-2 bg-gray-50">
        <span className="basis-1/6">Product Image</span>
        <span className="basis-2/6">Product Name</span>
        <span className="basis-1/6 text-center">Unit Price</span>
        <span className="basis-1/6 text-center">Remove</span>
        <span className="basis-1/6 text-center">Add</span>
      </section>

      {/* body section  */}
      <section className="my-4">
        <WishListItem image={image} name={'New Air Jordan'} price={'2500'} />
        
      </section>
    </section>
  )
}

export default WishList
