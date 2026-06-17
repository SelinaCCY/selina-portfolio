import './index.css';
import { Header } from './components/Header';
import { RouteNav } from './components/RouteNav';
import { LandingStop } from './components/stops/LandingStop';
import { EducationStop } from './components/stops/EducationStop';
import { CareerStop } from './components/stops/CareerStop';
import { ProjectsStop } from './components/stops/ProjectsStop';
import { AboutStop } from './components/stops/AboutStop';
import { ContactStop } from './components/stops/ContactStop';
import { useScrollSpy } from './hooks/useScrollSpy';

function buildPlaceholderPdf(): Blob {
  const lines = [
    'Selina  —  Curriculum Vitae',
    '',
    'Forward Deployed Engineer / Software Engineer',
    'London, UK  ·  open to opportunities',
  ];
  const content =
    'BT /F1 16 Tf 60 780 Td 22 TL ' +
    lines.map((l) => '(' + l.replace(/[()\\]/g, '\\$&') + ') Tj T*').join(' ') +
    ' ET';
  const objs = [
    '<</Type/Catalog/Pages 2 0 R>>',
    '<</Type/Pages/Kids[3 0 R]/Count 1>>',
    '<</Type/Page/Parent 2 0 R/MediaBox[0 0 595 842]/Resources<</Font<</F1 5 0 R>>>>/Contents 4 0 R>>',
    '<</Length ' + content.length + '>>\nstream\n' + content + '\nendstream',
    '<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>',
  ];
  let pdf = '%PDF-1.4\n';
  const offsets: number[] = [];
  objs.forEach((o, i) => { offsets.push(pdf.length); pdf += (i + 1) + ' 0 obj\n' + o + '\nendobj\n'; });
  const xrefStart = pdf.length;
  pdf += 'xref\n0 ' + (objs.length + 1) + '\n0000000000 65535 f \n';
  offsets.forEach((o) => { pdf += String(o).padStart(10, '0') + ' 00000 n \n'; });
  pdf += 'trailer\n<</Size ' + (objs.length + 1) + '/Root 1 0 R>>\nstartxref\n' + xrefStart + '\n%%EOF';
  return new Blob([pdf], { type: 'application/pdf' });
}

function handleDownloadCv() {
  const blob = buildPlaceholderPdf();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'Selina_CV.pdf';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export default function App() {
  const active = useScrollSpy();

  return (
    <>
      <div className="paper-bg" />
      <Header />
      <RouteNav current={active} />
      <main className="stage">
        <LandingStop />
        <EducationStop />
        <CareerStop onDownloadCv={handleDownloadCv} />
        <ProjectsStop />
        <AboutStop />
        <ContactStop />
      </main>
      <footer className="site-footer">Selina 2026</footer>
    </>
  );
}
