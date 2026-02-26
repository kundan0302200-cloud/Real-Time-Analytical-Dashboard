import React from 'react'

export default function AutoRefreshToggle({enabled, onToggle}) {
  return (
    <div>
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          checked={enabled}
          onChange={onToggle}
          className="sr-only"
        />
        <div className={`w-12 h-6 py-0.5 rounded-full transition-colors duration-200 ease-in-out
             ${enabled ? 'bg-purple-600' : 'bg-gray-300'
             }`}>
          <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200
             ${enabled ? 'translate-x-6' : 'translate-x-1'
             }`
             }>
                
             </div>
        </div>
        <span className="text-sm font-medium text-gray-700">Auto Refresh</span>
      </label>
    </div>
  )
}
