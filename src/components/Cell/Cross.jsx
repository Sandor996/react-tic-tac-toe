const Cross = () => {
  return (
    <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <filter id='sofGlow' height='300%' width='300%' x='-75%' y='-75%'>
          <feMorphology
            operator='dilate'
            radius='4'
            in='SourceAlpha'
            result='thicken'
          />
          <feGaussianBlur in='thicken' stdDeviation='5' result='blurred' />
          <feFlood floodColor='rgb(0,186,255)' result='glowColor' />
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
      <path
        d='M10,10 L90,90 M10,90 L90,10'
        stroke='white'
        strokeWidth='5'
        strokeDasharray='200'
        strokeDashoffset='200'
        style={{ filter: 'url(#sofGlow)' }}
      >
        <animate
          attributeName='stroke-dashoffset'
          from='200'
          to='0'
          dur='.5s'
          fill='freeze'
        />
      </path>
    </svg>
  );
};

export default Cross;
