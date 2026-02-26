import React from 'react'

export default function IntervalSelector({ value, onChange }) {
  return (
    <div>
        <label className="flex items-center space gap-2">
            Time:
        </label>
        <select
        value="{value}"
        onChange = {(e) => onChange(e.target.value)}
        className="px-3 py-2 rounded-lg text-sm font-medium
        border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option value="{1000}">1 sec</option>
            <option value="{2000}">2 sec</option>
            <option value="{5000}">5 sec</option>
            <option value="{10000}">10 sec</option> 
        </select>

      
    </div>
  )
}
