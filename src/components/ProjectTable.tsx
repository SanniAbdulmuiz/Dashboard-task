'use client'

import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Eye, Trash2 } from 'lucide-react'
import StatusSelect from './StatusSelect'
import { colorMap, Data } from '@/app/data'

interface Props {
  data: Data[]
}

export default function ProjectTable({ data }: Props) {
  const [projects, setProjects] = useState<Data[]>(data)

  const handleStatusChange = (index: number, newStatus: Data['status']) => {
    const updated = [...projects]
    updated[index].status = newStatus
    setProjects(updated)
  }

  return (
    <div className='overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white p-4'>
      <Table className='text-[15px] md:text-base lg:text-lg border-separate border-spacing-y-3 w-full'>
        {/* HEADER */}
        <TableHeader>
          <TableRow className='bg-gray-50 hover:bg-gray-50 border-b border-gray-200'>
            <TableHead className='w-[40%] text-gray-700 font-semibold py-4 pl-6'>
              Project Name
            </TableHead>
            <TableHead className='text-gray-700 font-semibold py-4'>Location</TableHead>
            <TableHead className='text-gray-700 font-semibold py-4'>Status</TableHead>
            <TableHead className='text-gray-700 font-semibold py-4'>Start Date</TableHead>
            <TableHead className='text-gray-700 font-semibold py-4'>Drill Holes</TableHead>
            <TableHead className='text-center text-gray-700 font-semibold py-4'>Actions</TableHead>
          </TableRow>
        </TableHeader>

        {/* BODY */}
        <TableBody>
          {projects.map((project, index) => (
            <TableRow
              key={index}
              className='group relative hover:shadow-md transition-all duration-200 bg-white rounded-xl'
              style={{
                backgroundImage: `linear-gradient(to right, ${
                  colorMap[project.type]
                } 4px, transparent 4px)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left center',
                backgroundSize: '4px 100%',
                height: '72px',
              }}
            >
              <TableCell className='pl-6 font-semibold text-gray-900'>{project.name}</TableCell>

              <TableCell className='text-gray-600'>{project.location}, NG</TableCell>

              <TableCell>
                <StatusSelect
                  value={project.status}
                  onChange={(newValue) => handleStatusChange(index, newValue as Data['status'])}
                />
              </TableCell>

              <TableCell className='text-gray-600'>{project.startDate}</TableCell>

              <TableCell className='font-semibold text-gray-800'>{project.holes}</TableCell>

              <TableCell className='text-center align-middle'>
                <div className='flex items-center justify-center gap-3 h-full'>
                  <button className='flex items-center justify-center p-2 bg-orange-50 rounded-full text-orange-500 hover:bg-orange-100 transition'>
                    <Eye size={18} />
                  </button>
                  <button className='flex items-center justify-center p-2 bg-orange-50 rounded-full text-orange-500 hover:bg-orange-100 transition'>
                    <Trash2 size={18} />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
