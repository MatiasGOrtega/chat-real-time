function MessageSkeleton() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="skeleton h-10 w-10 shrink-0 rounded-full"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-3 w-20"></div>
          <div className="skeleton h-3 w-28"></div>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-end">
        <div className="flex flex-col gap-4">
          <div className="skeleton h-3 w-20"></div>
          <div className="skeleton h-3 w-28"></div>
        </div>
        <div className="skeleton h-10 w-10 shrink-0 rounded-full"></div>
      </div>
    </div>
  );
}

export default MessageSkeleton;
