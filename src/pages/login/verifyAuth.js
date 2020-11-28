import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

export default function verifyAuth() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

  if (initializing) return null;

  return user;

}
