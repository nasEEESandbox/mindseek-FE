export default function Response() {
  return (
    <>
      <div className="py-4 border-y-1 border-zinc-300">
        <p className="text-left">
          Based on your description, mood instability, impulsivity, and fear of
          abandonment are key features of Borderline Personality Disorder (BPD).
          To confirm, let’s cross-check with DSM-5 criteria.
          <br />
          <br />
          According to DSM-5, BPD requires at least five of the following:
        </p>
        <ol className="list-decimal pl-6 text-left">
          <li>Frantic efforts to avoid real or imagined abandonment.</li>
          <li>Unstable and intense interpersonal relationships.</li>
          <li>Identity disturbance (unstable self-image or sense of self).</li>
          <li>
            Impulsivity in at least two potentially self-damaging areas (e.g.,
            spending, substance use, reckless driving, binge eating).
          </li>
          <li>
            Recurrent suicidal behavior, gestures, or threats, or
            self-mutilating behavior.
          </li>
          <li>
            Affective instability due to marked reactivity of mood. Chronic
            feelings of emptiness.
          </li>
          <li>Inappropriate, intense anger or difficulty controlling anger.</li>
          <li>
            Transient, stress-related paranoid ideation or severe dissociative
            symptoms.
          </li>
        </ol>
      </div>
    </>
  );
}
