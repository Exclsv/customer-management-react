import { useState } from 'react'
import { Button } from './ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { useCustomers } from '@/context/CustomerContext'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination'

export default function CustomerList() {
  const { customers, selectedCustomer, setSelectedCustomer } = useCustomers()

  // ^ Pagination
  const pageSize = 10
  const totalPages = Math.ceil(customers.length / pageSize)
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentCustomers = customers.slice(startIndex, endIndex)

  function handleSelectCustomer(id: number) {
    if (selectedCustomer?.id === id) {
      setSelectedCustomer(null)
      return
    }
    const customer = customers.find(item => item.id === id)
    if (customer) {
      setSelectedCustomer(customer)
    } else {
      setSelectedCustomer(null)
    }
  }

  return (
    <div className='p-10 flex-1'>
      <h2 className='text-xl font-bold'>Customers</h2>

      <Table className='mt-10'>
        <TableHeader>
          <TableRow className='border-none'>
            <TableHead className='text-slate-400'>Name</TableHead>
            <TableHead className='text-slate-400'>Company</TableHead>
            <TableHead className='text-slate-400'>Email</TableHead>
            <TableHead className='text-slate-400'>Admin</TableHead>
            <TableHead className='text-slate-400 w-[10%]'>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {currentCustomers.map(item => (
            <TableRow className='border-none' key={item.id}>
              <TableCell>
                <img
                  src={item.avatar}
                  alt='icon'
                  className='w-6 inline-block mr-3'
                />
                <span>
                  {item.firstName} {item.lastName}
                </span>
              </TableCell>
              <TableCell>{item.company}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>
                {item.status === 'user' ? (
                  <div className='rounded-md bg-slate-200 w-12 h-6'></div>
                ) : (
                  <div className='rounded-md bg-sky-600 w-12 h-6'></div>
                )}
              </TableCell>
              <TableCell className='space-x-4'>
                <Button
                  className='bg-transparent p-0 hover:bg-transparent'
                  onClick={() => handleSelectCustomer(item.id)}>
                  <img src='/src/assets/Edit.svg' className='w-full' />
                </Button>
                <Button className='bg-transparent p-0 hover:bg-transparent'>
                  <img src='/src/assets/Trash.svg' className='w-full' />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination className='mt-10'>
        <PaginationContent>
          <PaginationItem>
            {currentPage > 1 && (
              <PaginationPrevious
                onClick={() => setCurrentPage(currentPage - 1)}
              />
            )}
          </PaginationItem>

          {[...Array(3)].map((_, index) => {
            const page = currentPage + index - 1
            return page > 0 && page <= totalPages ? (
              <PaginationItem key={page}>
                <PaginationLink onClick={() => setCurrentPage(page)} isActive={page === currentPage}>
                  {page}
                </PaginationLink>
              </PaginationItem>
            ) : null
          })}

          <PaginationItem>
            {currentPage < totalPages && (
              <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
