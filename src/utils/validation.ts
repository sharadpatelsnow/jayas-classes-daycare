import { z } from 'zod'

export const admissionSchema = z.object({
  parentName: z.string().min(2, 'Parent name must be at least 2 characters').max(100),
  childName: z.string().min(2, 'Child name must be at least 2 characters').max(100),
  childAge: z.string().min(1, 'Please enter child age').refine(
    val => Number(val) >= 1 && Number(val) <= 18,
    'Age must be between 1 and 18'
  ),
  currentClass: z.string().optional(),
  board: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  phone: z
    .string()
    .min(10, 'Enter valid 10-digit mobile number')
    .regex(/^[6-9]\d{9}$/, 'Enter valid Indian mobile number (starts with 6-9)'),
  email: z.string().email('Enter valid email').optional().or(z.literal('')),
  timing: z.string().optional(),
  message: z.string().max(500, 'Message too long').optional(),
})

export type AdmissionSchema = z.infer<typeof admissionSchema>
