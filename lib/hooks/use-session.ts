import { useState, useEffect } from 'react';

const useSession = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const res = await fetch('/api/auth/session');
      const data = await res.json();
      setSession(data);
    };

    fetchSession();
  }, []);

  return { session };
};

export default useSession;
