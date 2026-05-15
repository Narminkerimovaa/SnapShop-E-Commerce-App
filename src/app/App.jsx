import { AuthRouter } from "./routes/auth/AuthRouter";
import { ProtectedRouter } from "./routes/protected/ProtectedRouter";

const App = () => {
  const user = localStorage.getItem('user');

  return user ? <ProtectedRouter /> : <AuthRouter />;
};

export default App;