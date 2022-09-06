import SolarSystem from './sketches/solarSystem/SolarSystem';
import PathFinding from './sketches/pathfinding/PathFinding';
import Tetris from './sketches/tetris/Tetris';
import Minesweeper from './sketches/minesweeper/Minesweeper';
import Scale from './sketches/scale/Scale';
import Space from './sketches/space/Space';
import Synth from './sketches/synth/Synth';
import Fifteen from './sketches/fifteen/Fifteen';
import LightsOut from './sketches/lightsOut/LightsOut';
import PegSolitaire from './sketches/pegSolitaire/PegSolitaire';

export const sketches = [
  {
    name: 'Solar System',
    component: SolarSystem,
  },
  {
    name: 'PathFinding',
    component: PathFinding,
  },
  {
    name: 'Scale Viewer',
    component: Scale,
  },
  {
    name: 'Tetris',
    component: Tetris,
  },
  {
    name: 'Minesweeper',
    component: Minesweeper,
  },
  {
    name: 'Synthesizer',
    component: Synth,
  },
  {
    name: 'Space',
    component: Space,
  },
  {
    name: 'Fifteen Slide',
    component: Fifteen,
  },
  {
    name: 'Peg Solitaire',
    component: PegSolitaire,
  },
  {
    name: 'Lights Out',
    component: LightsOut,
  },
];
