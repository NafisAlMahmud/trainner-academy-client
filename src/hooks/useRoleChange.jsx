import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useRoleChange = () => {
  const { user, loading } = useAuth();
  const { data = {} } = useQuery({
    queryKey: ["role", !!user?.email],
    enabled: !loading,

    queryFn: async () => {
      const res = await fetch(
        `https://trainer-academy-server.vercel.app/role?email=${user?.email}`
      );
      const result = await res.json();
      console.log(result);
      return result;
    },
  });

  return { data };
};

export default useRoleChange;
