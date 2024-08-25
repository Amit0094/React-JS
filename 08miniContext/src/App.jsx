import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

// Yes, your code is correct. In React, when you wrap components inside a context provider like <UserContextProvider>, the components inside are passed as children. The children prop is implicitly passed to UserContextProvider without needing to explicitly specify it.

// <UserContextProvider> is wrapping the components <h1>, <Login />, and <Profile />.
// These components are automatically passed as children to UserContextProvider.

export default App
