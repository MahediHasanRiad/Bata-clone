import DashboardMenuItem from './Dashboard-menu-item'

function DashboardMenu() {
  return (
    <section>
      <DashboardMenuItem text={'Address'}/>
      <DashboardMenuItem text={'Order'}/>
      <DashboardMenuItem text={'WishList'}/>
    </section>
  )
}

export default DashboardMenu
