'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

interface StatusSelectProps {
  value: 'Active' | 'Inactive' | 'Pending' | 'Completed'
  onChange?: (value: string) => void
}

// Define the background + text color per status
const statusColors: Record<string, string> = {
  Active: 'bg-blue-100 text-blue-700 border border-blue-300',
  Inactive: 'bg-gray-100 text-gray-700 border border-gray-300',
  Pending: 'bg-yellow-100 text-yellow-700 border border-yellow-300',
  Completed: 'bg-green-100 text-green-700 border border-green-300',
}

export default function StatusSelect({ value, onChange }: StatusSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className={cn(
          'w-[130px] justify-center rounded-full font-semibold text-sm capitalize transition',
          statusColors[value]
        )}
      >
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value='Active'>Active</SelectItem>
        <SelectItem value='Inactive'>Inactive</SelectItem>
        <SelectItem value='Pending'>Pending</SelectItem>
        <SelectItem value='Completed'>Completed</SelectItem>
      </SelectContent>
    </Select>
  )
}
