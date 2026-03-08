import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Bone, Search, Calculator, Star, BookOpen } from 'lucide-react';
import { FavoritesProvider } from './context/FavoritesContextProvider';
import BodyDiagramView from './views/BodyDiagramView';
import BodyPartListView from './views/BodyPartListView';
import PositionListView from './views/PositionListView';
import PositionDetailView from './views/PositionDetailView';
import SearchView from './views/SearchView';
import FavoritesView from './views/FavoritesView';
import TechniqueCalculatorView from './views/TechniqueCalculatorView';
import ReferenceView from './views/ReferenceView';
import './App.css';

function TabBar() {
  const location = useLocation();

  const tabs = [
    { to: '/body-map', icon: Bone, label: 'Body Map' },
    { to: '/search', icon: Search, label: 'Search' },
    { to: '/technique', icon: Calculator, label: 'Technique' },
    { to: '/favorites', icon: Star, label: 'Favorites' },
    { to: '/reference', icon: BookOpen, label: 'Reference' },
  ];

  return (
    <nav className="tab-bar">
      {tabs.map(({ to, icon: Icon, label }) => {
        const isActive = location.pathname === to || location.pathname.startsWith(to + '/');
        return (
          <NavLink key={to} to={to} className={`tab-item ${isActive ? 'active' : ''}`}>
            <Icon strokeWidth={isActive ? 2 : 1.5} />
            <span>{label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}

function AppRoutes() {
  return (
    <div className="app-layout">
      <div className="app-content">
        <Routes>
          <Route path="/" element={<BodyDiagramView />} />
          <Route path="/body-map" element={<BodyDiagramView />} />
          <Route path="/body-map/:region" element={<BodyPartListView />} />
          <Route path="/body-map/:region/:bodyPartId" element={<PositionListView />} />
          <Route path="/position/:positionId" element={<PositionDetailView />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/favorites" element={<FavoritesView />} />
          <Route path="/technique" element={<TechniqueCalculatorView />} />
          <Route path="/reference" element={<ReferenceView />} />
        </Routes>
      </div>
      <TabBar />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <AppRoutes />
      </FavoritesProvider>
    </BrowserRouter>
  );
}
