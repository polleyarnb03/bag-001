import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function LazyLoadingExample() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">🧠 Code Splitting & Lazy Loading</h2>
      <Suspense fallback={<p>Loading lazy component...</p>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default LazyLoadingExample;
