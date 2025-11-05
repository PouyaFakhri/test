import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-background/95">
      <div className="w-full max-w-5xl space-y-8 animate-fadeIn">
        <div className="glass p-8 md:p-12 rounded-2xl space-y-6">
          <Skeleton className="h-12 w-3/4 mx-auto rounded-xl" />
          <Skeleton className="h-6 w-1/2 mx-auto rounded-lg" />
          <div className="flex flex-wrap gap-4 justify-center">
            <Skeleton className="h-12 w-36 rounded-xl" />
            <Skeleton className="h-12 w-36 rounded-xl" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="neo p-6 rounded-xl space-y-4" style={{ animationDelay: `${i * 100}ms` }}>
              <Skeleton className="w-14 h-14 rounded-xl mx-auto" />
              <Skeleton className="h-6 w-3/4 mx-auto rounded-md" />
              <Skeleton className="h-4 w-1/2 mx-auto rounded-sm" />
              <Skeleton className="h-6 w-16 mx-auto rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}