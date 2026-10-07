import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AppShell } from '@/components/layout/AppShell'
import { PageFallback } from '@/components/layout/PageFallback'

const OverviewPage = lazy(() => import('@/pages/OverviewPage').then((m) => ({ default: m.OverviewPage })))
const RecommendationsPage = lazy(() =>
  import('@/pages/RecommendationsPage').then((m) => ({ default: m.RecommendationsPage })),
)
const InstallationPage = lazy(() => import('@/pages/InstallationPage').then((m) => ({ default: m.InstallationPage })))
const ConfigurationPage = lazy(() => import('@/pages/ConfigurationPage').then((m) => ({ default: m.ConfigurationPage })))
const TroubleshootingPage = lazy(() =>
  import('@/pages/TroubleshootingPage').then((m) => ({ default: m.TroubleshootingPage })),
)
const ReferencePage = lazy(() => import('@/pages/ReferencePage').then((m) => ({ default: m.ReferencePage })))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<Lazy page={OverviewPage} />} />
          <Route path="rekomendasi" element={<Lazy page={RecommendationsPage} />} />
          <Route path="instalasi" element={<Lazy page={InstallationPage} />} />
          <Route path="konfigurasi" element={<Lazy page={ConfigurationPage} />} />
          <Route path="troubleshooting" element={<Lazy page={TroubleshootingPage} />} />
          <Route path="referensi" element={<Lazy page={ReferencePage} />} />
          <Route path="*" element={<Lazy page={NotFoundPage} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function Lazy({ page: Page }: { page: React.LazyExoticComponent<() => React.JSX.Element> }) {
  return (
    <Suspense fallback={<PageFallback />}>
      <Page />
    </Suspense>
  )
}
