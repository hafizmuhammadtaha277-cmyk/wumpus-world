export default function Header({ totalSteps, visitedCount, gameState }) {
  return (
    <header className="ww-header">
      <div className="header-inner">
        <div className="masthead">
          <h1 className="masthead-title">
            Wumpus <em>Logic</em> Agent
          </h1>
          <p className="masthead-sub">
            Propositional Resolution · Inference Engine · KB Agent
          </p>
        </div>

        <div className="header-meta">
          <div className="header-meta-cell accent-cell">
            <div className="meta-val">{totalSteps.toLocaleString()}</div>
            <div className="meta-key">Inference Steps</div>
          </div>
          <div className="header-meta-cell">
            <div className="meta-val">{visitedCount}</div>
            <div className="meta-key">Explored Cells</div>
          </div>
          <div className="header-meta-cell">
            <div className="meta-val" style={{ fontSize: 13, fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}>
              {gameState ? (gameState.gameOver ? (gameState.win ? 'WON' : 'DEAD') : 'ACTIVE') : 'READY'}
            </div>
            <div className="meta-key">Agent State</div>
          </div>
        </div>
      </div>
    </header>
  );
}
