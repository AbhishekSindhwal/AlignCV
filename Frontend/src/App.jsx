import { RouterProvider } from "react-router"
import { router } from "./app.routes"
import { InterviewProvider } from "./features/interview/interview.context"

import { AuthProvider } from "./features/auth/auth.context"
function App() {
  return (



    <AuthProvider>
      <InterviewProvider>
        <RouterProvider router={router} />
      </InterviewProvider>
    </AuthProvider>

  )
}

export default App
