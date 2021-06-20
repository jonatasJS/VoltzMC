import ChallengeBox, { VipBox, CashBox } from '../../components/ChallengeBox';

export function Overpower() {

  return (
    <>
      <section style={{ gap: '5rem', marginTop: '.5rem', marginBottom: '1rem' }}>
        <div>
          <VipBox />
        </div>
        <div>
          <CashBox />
        </div>
      </section>
    </>
  );
}

export function Dark() {

  return (
    <>
      <section style={{ gap: '5rem', marginTop: '.5rem', marginBottom: '1rem' }}>
        <div>
          <ChallengeBox />
        </div>
        <div>
          <h1>Rankup Dark</h1>
        </div>
      </section>
    </>
  );
}

export function Pvp() {

  return (
    <>
      <section style={{ gap: '5rem', marginTop: '.5rem', marginBottom: '1rem' }}>
        <div>
          <ChallengeBox />
        </div>
        <div>
          <h1>Pvp</h1>
        </div>
      </section>
    </>
  );
}

export function Geral() {

  return (
    <>
      <section style={{ gap: '5rem', marginTop: '.5rem', marginBottom: '1rem' }}>
        <div>
          <ChallengeBox />
        </div>
        <div>
          <h1>Geral</h1>
        </div>
      </section>
    </>
  );
}
