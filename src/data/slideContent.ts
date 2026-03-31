export interface SlideInfo {
  id: number;
  title: { en: string; de: string };
  shortTitle: { en: string; de: string };
}

export const slides: SlideInfo[] = [
  { id: 1, title: { en: 'Power Apps Code Apps', de: 'Power Apps Code Apps' }, shortTitle: { en: 'Code Apps', de: 'Code Apps' } },
  { id: 2, title: { en: 'What Are Code Apps?', de: 'Was sind Code Apps?' }, shortTitle: { en: 'What Are Code Apps?', de: 'Was sind Code Apps?' } },
  { id: 3, title: { en: 'Why Code Apps — Why Now?', de: 'Warum Code Apps — Warum jetzt?' }, shortTitle: { en: 'Why Now?', de: 'Warum jetzt?' } },
  { id: 4, title: { en: 'Canvas vs. Code Apps', de: 'Canvas vs. Code Apps' }, shortTitle: { en: 'Canvas vs. Code', de: 'Canvas vs. Code' } },
  { id: 5, title: { en: 'Real-World Use Cases', de: 'Praxisbeispiele' }, shortTitle: { en: 'Use Cases', de: 'Praxisbeispiele' } },
  { id: 6, title: { en: 'Shared Repository Model', de: 'Geteiltes Repository-Modell' }, shortTitle: { en: 'Repository Model', de: 'Repository-Modell' } },
  { id: 7, title: { en: 'Risk Mitigation', de: 'Risikominimierung' }, shortTitle: { en: 'Risk Mitigation', de: 'Risikominimierung' } },
  { id: 8, title: { en: 'Pilot & Proposal', de: 'Pilot & Angebot' }, shortTitle: { en: 'Proposal', de: 'Angebot' } },
];
