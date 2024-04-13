import { z } from 'zod'

const nameRegex = /^[a-zA-Z\s]*$/

export const CustomerAddSchema = z.object({
  firstName: z
    .string()
    .min(1, 'Required')
    .regex(nameRegex, 'First Name should only contain letters and spaces'),
  lastName: z
    .string()
    .min(1, 'Required')
    .regex(nameRegex, 'Last Name should only contain letters and spaces'),
  company: z.string().min(1, 'Required'),
  status: z.enum(['user', 'administrator']),
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string',
    })
    .email('Invalid email address'),
  password: z
    .string({
      required_error: 'Password is required',
      invalid_type_error: 'Password must be a string',
    })
    .min(8, 'Password must be at least 8 characters long'),
})

export const CustomerEditSchema = z.object({
  firstName: z
    .string()
    .min(1, 'Required')
    .regex(nameRegex, 'First Name should only contain letters and spaces'),
  lastName: z
    .string()
    .min(1, 'Required')
    .regex(nameRegex, 'Last Name should only contain letters and spaces'),
  company: z.string().min(1, 'Required'),
  status: z.enum(['user', 'administrator']),
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string',
    })
    .email('Invalid email address'),
})

export type CustomerEditType = z.infer<typeof CustomerEditSchema>

export type CustomerAddType = z.infer<typeof CustomerAddSchema>