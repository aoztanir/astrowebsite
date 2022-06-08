import React, { useRef, useEffect } from 'react';
import { useLocation, Switch, Redirect,  } from 'react-router-dom';

import { browserHistory } from 'react-router'


// Views 

export default function Logout() {
  localStorage.clear()

  window.location.href = "/"
}
