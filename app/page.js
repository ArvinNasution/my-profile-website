'use client'
import GlassCard from './components/GlassCard';
import { useState } from 'react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('profile');

  const showTab = (tab) => setActiveTab(tab);

  return (
    <div className="container">
      <GlassCard>
        <div className="tabs">
          <button onClick={() => showTab('profile')} className={activeTab === 'profile' ? 'tab-btn active' : 'tab-btn'}>
            Profile
          </button>
          <button onClick={() => showTab('games')} className={activeTab === 'games' ? 'tab-btn active' : 'tab-btn'}>
            Games
          </button>
          <button onClick={() => showTab('anime')} className={activeTab === 'anime' ? 'tab-btn active' : 'tab-btn'}>
            Anime
          </button>
        </div>

        <div className="content">
          {activeTab === 'profile' && (
            <div>
              <h2>Your Name</h2>
              <p>Gamer | Anime Enthusiast</p>
            </div>
          )}
          {activeTab === 'games' && <p>Games content here...</p>}
          {activeTab === 'anime' && <p>Anime content here...</p>}
        </div>
      </GlassCard>
    </div>
  );
}
