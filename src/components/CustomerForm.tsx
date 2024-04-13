import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { CustomerAddSchema, CustomerAddType } from '@/zod/schema'
import { useCustomers } from '@/context/CustomerContext'
import { PasswordInput } from './ui/password-input'

export default function CustomerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<CustomerAddType>({
    resolver: zodResolver(CustomerAddSchema),
  })

  const { addCustomer, selectedCustomer } = useCustomers()

  function onSubmit(data: CustomerAddType): void {
    console.log(data)
    addCustomer(data)

    reset()
  }

  if(selectedCustomer !== null) {
    return null
  }


  return (
    <div className='p-10'>
      <h2 className='text-xl font-bold'>Add Customer</h2>

      <form className='mt-10 space-y-6' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex gap-6'>
          <div>
            <Label htmlFor='firstName'>First Name</Label>
            <Input type='text' id='firstName' {...register('firstName')} />
            {errors.firstName && (
              <p className='text-red-500 mt-1 text-sm'>
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor='lastName'>Last Name</Label>
            <Input type='text' id='lastName' {...register('lastName')} />
            {errors.lastName && (
              <p className='text-red-500 mt-1 text-sm'>
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor='company'>Company</Label>
          <Input type='text' id='company' {...register('company')} />
          {errors.company && (
            <p className='text-red-500 mt-1 text-sm'>
              {errors.company.message}
            </p>
          )}
        </div>

        <div className='flex gap-2 p-1 bg-slate-100 rounded-lg justify-center'>
          <input
            type='radio'
            id='user'
            value='user'
            className='hidden peer/user'
            checked
            {...register('status')}
          />
          <label
            htmlFor='user'
            className='cursor-pointer peer-checked/user:bg-white peer-checked/user:shadow-md rounded-md w-full px-6 py-1 text-center'>
            User
          </label>

          <input
            type='radio'
            id='administrator'
            value='administrator'
            className='hidden peer/admin'
            {...register('status')}
          />
          <label
            htmlFor='administrator'
            className='cursor-pointer peer-checked/admin:bg-white peer-checked/admin:shadow-md rounded-md w-full px-6 py-1 text-center'>
            Administrator
          </label>
        </div>

        <div>
          <Label htmlFor='email'>Email</Label>
          <Input type='email' id='email' {...register('email')} />
          {errors.email && (
            <p className='text-red-500 mt-1 text-sm'>{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor='password'>Password</Label>
          <PasswordInput type='password' id='password' {...register('password')} color='#858585'/>
          {errors.password && (
            <p className='text-red-500 mt-1 text-sm'>
              {errors.password.message}
            </p>
          )}
        </div>

        <Button
          className='w-full bg-sky-600 font-bold text-base disabled:cursor-not-allowed hover:bg-sky-500 hover:translate-y-1 transition-all duration-150'
          disabled={!isValid}>
          Save
        </Button>
      </form>
    </div>
  )
}
