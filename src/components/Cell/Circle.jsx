const Circle = () => {
  return (
    <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <filter id='softGlow' height='300%' width='300%' x='-75%' y='-75%'>
      <feMorphology
        operator='dilate'
        radius='4'
        in='SourceAlpha'
        result='thicken'
      />
      <feGaussianBlur in='thicken' stdDeviation='5' result='blurred' />
      <feFlood floodColor='red' result='glowColor' />
      <feComposite
        in='glowColor'
        in2='blurred'
        operator='in'
        result='softGlow_colored'
      />
      <feMerge>
        <feMergeNode in='softGlow_colored' />
        <feMergeNode in='SourceGraphic' />
      </feMerge>
    </filter>
  </defs>
  <circle
    cx='50'
    cy='50'
    r='40'
    stroke='white'
    strokeWidth='5'
    fill='none'
    strokeDasharray='251.2'
    strokeDashoffset='251.2'
    style={{ filter: 'url(#softGlow)' }}
  >
    <animate
      attributeName='stroke-dashoffset'
      from='251.2'
      to='0'
      dur='.5s'
      fill='freeze'
    />
  </circle>
</svg>

  );
};

export default Circle;
