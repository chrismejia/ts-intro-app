/// <reference types="@types/google.maps" />

import { CustomMap } from './CustomMap';
import { Company } from './Company';
import { User } from './User';

const user = new User();
const company = new Company();
const map = new CustomMap('map');

map.addMarker(user);
map.addMarker(company);
