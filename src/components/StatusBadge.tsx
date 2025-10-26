import { Badge } from '@/components/ui/badge'

interface StatusBadgeProps {
  status: 'Active' | 'Inactive' | 'Pending' | 'Completed'
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const statusStyles: Record<string, string> = {
    Active: 'bg-green-100 text-green-700 border border-green-200',
    Inactive: 'bg-gray-100 text-gray-600 border border-gray-200',
    Pending: 'bg-yellow-100 text-yellow-700 border border-yellow-200',
    Completed: 'bg-blue-100 text-blue-700 border border-blue-200',
  }

  return (
    //Renders a badge conditionally based on the status on the ui
    <Badge
      className={`${statusStyles[status]} text-sm font-medium px-3 py-1.5 rounded-full min-w-[90px] text-center capitalize`}
    >
      {status}
    </Badge>
  )
}
