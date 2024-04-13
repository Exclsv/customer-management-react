import { CustomerType } from '@/db'
import { generateRandomFrom1To7 } from '@/lib/utils'
import { CustomerAddType } from '@/zod/schema'
import { createContext, useContext, useState } from 'react'

const CustomerContext = createContext({
  customers: [] as CustomerType[],
  selectedCustomer: null as null | CustomerType,
  setSelectedCustomer: (customer: null | CustomerType) => {},
  addCustomer: (data: CustomerAddType) => {},
  editCustomer: (data: CustomerType) => {},
  deleteCustomer: (id: number) => {},
})

function getCustomers(): CustomerType[] {
  // use localStorage to store and get customers
  const customers = JSON.parse(localStorage.getItem('customers') || '[]')
  // localStorage.setItem('customers', JSON.stringify(customers))
  return customers
}

function CustomerProvider({ children }: { children: React.ReactNode }) {
  const [customers, setCustomers] = useState<CustomerType[]>(getCustomers())
  const [selectedCustomer, setSelectedCustomer] = useState<null | CustomerType>(
    null
  )

  const addCustomer = (customer: CustomerAddType) => {
    const newCustomer = {
      ...customer,
      id: customers.length + 1,
      avatar: `icons/${generateRandomFrom1To7()}.png`,
    }

    setCustomers([...customers, newCustomer])
    // Update localStorage with new customer list
    localStorage.setItem(
      'customers',
      JSON.stringify([...customers, newCustomer])
    )
  }

  const editCustomer = (customer: CustomerType) => {
    const updatedCustomers = customers.map(c => {
      if (c.id === customer.id) {
        return customer
      }
      return c
    })

    setCustomers(updatedCustomers)
    // Update localStorage with new customer list
    localStorage.setItem('customers', JSON.stringify(updatedCustomers))
  }

  const deleteCustomer = (id: number) => {
    const updatedCustomers = customers.filter(customer => customer.id !== id)
    setCustomers(updatedCustomers)
    // Update localStorage with new customer list
    localStorage.setItem('customers', JSON.stringify(updatedCustomers))
  }

  return (
    <CustomerContext.Provider
      value={{
        customers,
        addCustomer,
        editCustomer,
        selectedCustomer,
        setSelectedCustomer,
        deleteCustomer,
      }}>
      {children}
    </CustomerContext.Provider>
  )
}

function useCustomers() {
  const context = useContext(CustomerContext)
  if (!context) {
    throw new Error('useCustomers must be used within a CustomerProvider')
  }
  return context
}

export { CustomerProvider, useCustomers }
