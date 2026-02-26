import React from 'react'

export default function RefreshButton({ onRefresh, isLoading }) {
  return (
    <div>
      <button
      onClick={onRefresh}
      disabled={isLoading}
      className={`px-4 py-2 rounded-lg text-sm font-medium
        bg-purple-600 text-white
        hover:bg-purple-700
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors duration-200
`}  aria-label="Refresh metrics"
>
    {isLoading ? 'refreshing....' : "Refresh"}
</button>

    </div>
  )
}
