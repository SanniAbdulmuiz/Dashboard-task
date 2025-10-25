import React from 'react'
import { Badge } from '@/components/ui/badge'

interface StatusBadgeProps {
  status: 'Active' | 'Inactive'
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const styles =
    status === 'Active'
      ? 'bg-green-100 text-green-700 border border-green-200'
      : 'bg-gray-100 text-gray-700 border border-gray-200'

  return <Badge className={`${styles} text-xs font-medium px-2 py-1 rounded-md`}>{status}</Badge>
}
