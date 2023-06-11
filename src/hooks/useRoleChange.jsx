import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useRoleChange = () => {
  const { user, loading } = useAuth();
  const { data = {} } = useQuery({
    queryKey: ["role", !!user?.email],
    enabled: !loading,

    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/role?email=${user?.email}`
      );
      const result = await res.json();
      console.log(result);
      return result;
    },
  });

  return { data };
};

export default useRoleChange;
