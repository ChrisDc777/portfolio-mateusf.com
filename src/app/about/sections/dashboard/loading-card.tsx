export function LoadingCard() {
  return (
    <div className="flex animate-pulse flex-col justify-center gap-2 rounded-3xl bg-neutral-200 p-4 dark:bg-neutral-950 md:p-7">
      <div className="h-4 w-1/3 bg-neutral-300 dark:bg-neutral-800" />
      <div className="h-5 w-2/3 bg-neutral-400 dark:bg-neutral-700" />
    </div>
  )
}
