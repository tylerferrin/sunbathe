import Typography from 'typography';

const typography = new Typography({
  title: 'sunbather',
  baseFontSize: '16px',
  baseLineHeight: 1.25,
  scaleRation: 2,
  googleFonts: [
    {
      name: 'Catamaran',
      styles: [
        '100',
        '400',
        '500',
        '900'
      ]
    }
  ]
});

export default typography;
