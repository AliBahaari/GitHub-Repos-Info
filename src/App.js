import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './components/Home.component';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
