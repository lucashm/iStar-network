import _ from 'lodash';
import './style.css';
import Vis from '../node_modules/vis/dist/vis.js';
// import '../node_modules/vis/dist/vis.css';

function component() {
   let element = document.createElement('div');
  let nodes = new Vis.DataSet([
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'}
  ]);

  let edges = new Vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5}
  ]);

  let container = document.getElementById('mynetwork');

  let data = {
    nodes: nodes,
    edges: edges
  }

  let options = {};

  const network = new Vis.Network(container, data, options);
//  Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
