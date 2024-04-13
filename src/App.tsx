import CustomerEditForm from './components/CustomerEditForm'
import CustomerForm from './components/CustomerForm'
import CustomerList from './components/CustomerList'
import { Button } from './components/ui/button'
import { CustomerProvider } from './context/CustomerContext'
import { customers } from './db'

export default function App() {
  return (
    <>
      <div className='flex'>
        <CustomerProvider>
          <CustomerEditForm />
          <CustomerForm />
          <div className='w-[1px] min-h-screen bg-slate-300'></div>
          <CustomerList />
        </CustomerProvider>
      </div>
      <Button onClick={() => generateSampleData()}>Add sample data</Button>
    </>
  )
}

function generateSampleData() {
  localStorage.setItem('customers', JSON.stringify(customers))
}
