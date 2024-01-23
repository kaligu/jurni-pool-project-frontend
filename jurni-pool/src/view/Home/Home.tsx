import NavigationBar from '../../components/NavigationBar'

function Home() {
  return (
    <div>
      <NavigationBar clickedState={0}/>
      <h1 className='text-white'>home</h1>
    </div>
  )
}

export default Home
