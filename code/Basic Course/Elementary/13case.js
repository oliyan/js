let num = 'sd';

switch (true) {
  case(num < 100):
    console.log('lesser');
    break;
  
  case(num > 100):
    console.log('greater');
    break;

  case(num === 100):
    console.log('equal');
    break;

  default:
    console.log('wrong');
}