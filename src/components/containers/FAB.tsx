type iFab = {
  onClick: () => void
}

export const FAB = ({ onClick }: iFab) => (
  <button data-testid="FAB" onClick={onClick} className="flex items-center justify-center h-20 w-20 animate-bounce fixed right-10 bottom-10 rounded-full bg-slate-800 p-10" title="answer the survey">
    <p className="text-white font-semibold text-sm uppercase">Start the survey</p>
  </button>
  )