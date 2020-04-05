import Heading from './components/heading';
import AcornImage from './components/acorn-image';
import _ from 'lodash';
import React from 'react';

const heading = new Heading();
heading.render(_.upperFirst("acorn image"));

const acornImage = new AcornImage();
acornImage.render();